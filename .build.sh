name=`node -p "require('./package.json').name"`
version=`node -p "require('./package.json').version"`
scrat -v
scrat release -comd ../vue-gangnam-style-gh-pages
cd ../vue-gangnam-style-gh-pages
echo "cp public/${name}/${version}/index.html ."
cp public/${name}/${version}/index.html .
git add -A
git commit -am "deploy gh-pages"
git push origin gh-pages
cd -