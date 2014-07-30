### Setup

Prerequisites

```sh
npm install -g bower
npm install -g broccoli-cli
```

```sh
bower install
npm install
```

### Running

```sh
broccoli serve
open http://localhost:4200
```

### Build and deploy

```sh
./build
cd dist
git add . && git commit -a "deploy" && git push 5apps master
```
