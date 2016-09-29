Scripts
-------------


#### Generate-gitbook

```

#!/bin/sh

CMDDESC="Generate GitBook"

./node_modules/.bin/gitbook build ./txt ./gh-pages
```


#### Generate-wiki

```
#!/bin/sh

CMDDESC="Generate Wiki"

node "$(dirname $0)/generate-wiki.js"
```


#### Deploy-gitbook


Lee el fichero *"package.json"* y obtiene la URL del repositorio remoto.
A continuación se realiza el despliegue en la rama gh-pages. 

```
#!/bin/sh

CMDDESC="Deploy GitBook on Github"

REPO=$(node -e "console.log(require('./package.json').repository.url);")

node -e "require('gh-pages').publish('./gh-pages', { repo: '$REPO', logger: function(m) { console.error(m); } });"
```


#### Deploy-wiki

```
#!/bin/bash
# source: https://raw.githubusercontent.com/christianalfoni/react-webpack-cookbook/master/scripts/deploy-wiki.sh
# this script expects that a gh-pages build exists already
# adapted from https://gist.github.com/domenic/ec8b0fc8ab45f39403dd
# go to the out directory and create a *new* Git repo

CMDDESC="Deploy wiki on Github"

REPO=$(node -e "console.log(require('./package.json').repository.wiki);")


cd wiki
# Remove possible existing git repo. We'll replace entire wiki
rm -rf .git
# Init new repo
git init
# The first and only commit to this new Git repo contains all the
# files present with the commit message "Deploy to GitHub Pages".
git add .
git commit -m "Deploy to Wiki"
# Add origin
git remote add origin $REPO
# Force push from the current repo's master branch to the remote
# (All previous history on the master branch will be lost, since we are overwriting it.)
git push --force origin master:master
```