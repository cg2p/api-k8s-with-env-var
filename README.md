# xsx

kubectl config current-context
kubectl get namespace

kubectl get services --all-name                         # List all services in the namespace
kubectl get pods --all-namespaces

> in context of ibm cloud kubes cluster
kubectl create secret generic echo-service-url --from-literal=echo_service_url=http://173.193.79.169:32743 --namespace  prod 


# API K8s with env var
Demonstration of k8s deployment with environment variables at run time 

```
GET / > returns simple ping message
GET /envvars > echos back the secret env var and a public one
```

## Run
Start using scripts in package.json. Will run on localhost:3000 as default.
```
npm run start
```

## Kubernetes

```
kubectl config current-context
kubectl get namespace

# List all services in the namespace
kubectl get services --all-name                         
kubectl get pods --all-namespaces

# in context of ibm cloud kubes cluster
kubectl create secret generic my-secret-url --from-literal=my_secret_url=http://thesecreturl --namespace  prod 
```

## Config
Uses a config parameter module, plus dotenv for secrets and globals. Rename `env.CHANGEME` to `.env` (which is in .gitignore). 


