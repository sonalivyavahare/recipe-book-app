git remote add origin https://github.com/sonalivyavahare/recipe-book-app.git
git branch -M main
git push -u origin main

npm i -g json-server

json-server --watch db.json

ng g c header