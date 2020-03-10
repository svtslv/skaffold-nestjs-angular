# Skaffold NestJS Angular

Skaffold NestJS Angular example with local remote and kaniko configurations

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

Update `deploy.kubeContext` -> `skaffold-kubernetes/skaffold-(local|remote|kaniko).yaml`

### Skaffold Local

Local docker and local kubernetes

```sh
skaffold dev -f skaffold-local.yaml --port-forward
```

Open `http://localhost:3000` and `http://localhost:4200` change the code and enjoy.

### Skaffold Remote

Local docker and remote kubernetes

```
skaffold dev \
-f skaffold-remote.yaml \
--port-forward \
--default-repo=registry.gitlab.com/USERNAME/PROJECT
```

### Skaffold Kaniko

Remote builder and remote kubernetes

1. Update `AUTH_SECRET_KEY` -> `skaffold-kubernetes/_secret-example.yaml`
2. Update `build.cluster.dockerConfig.path` -> `skaffold-kubernetes/skaffold-kaniko.yaml`

```
skaffold dev \
-f skaffold-kaniko.yaml \
--port-forward \
--default-repo=registry.gitlab.com/USERNAME/PROJECT
```

### Generate auth from username and password

```sh
echo -n 'username:password' | base64
```

# License

MIT


