# Skaffold NestJS Angular Example

## How to use

```sh
git clone https://github.com/svtslv/skaffold-nestjs-angular
```

```sh
cd skaffold-nestjs-angular/skaffold-kubernetes
```

```sh
kubectl create ns skaffold-nestjs-angular-namespace
```

### Skaffold Local

Local docker and local kubernetes

```sh
skaffold dev -f skaffold-local.yaml --port-forward
```

### Skaffold Remote

Local docker and remote kubernetes

```
skaffold dev -f skaffold-remote.yaml --port-forward --default-repo=registry.gitlab.com/USERNAME/PROJECT
```

### Skaffold Kaniko

Remote builder and remote kubernetes

1. Update `AUTH_SECRET_KEY` -> `skaffold-kubernetes/secret-example.yaml`
2. Update `build.cluster.dockerConfig.path` -> `skaffold-kubernetes/skaffold-kaniko.yaml`

```
skaffold dev -f skaffold-kaniko.yaml --port-forward --default-repo=registry.gitlab.com/USERNAME/PROJECT
```

## Generate auth from username and password

```sh
echo -n 'username:password' | base64
```

# License

MIT


