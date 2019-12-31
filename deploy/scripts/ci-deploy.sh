#! /bin/bash
set -e

COMMIT_SHA1=$CIRCLE_SHA1

export COMMIT_SHA1=$COMMIT_SHA1
echo "$KUBERNETES_CLUSTER_CERTIFICATE" | base64 --decode > cert.crt

sed -i 's|ajaxsoften/wissen-frontend|ajaxsoften/wissen-frontend:'"$CIRCLE_SHA1"'|' ./deploy/k8s/wissen-frontend/wissen-frontend-deployment.yml

./kubectl \
  --kubeconfig=/dev/null \
  --server=$KUBERNETES_SERVER \
  --certificate-authority=cert.crt \
  --token=$KUBERNETES_TOKEN \
  apply -f ./deploy/k8s/wissen-frontend
