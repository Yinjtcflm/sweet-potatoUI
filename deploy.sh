rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'change' &&
git branch -M master &&
git remote add origin git@github.com:Yinjtcflm/sweetpotato-ui-website.git &&
git push -f -u origin master &&
cd -
echo https://github.com/Yinjtcflm/sweetpotato-ui-website/index.html