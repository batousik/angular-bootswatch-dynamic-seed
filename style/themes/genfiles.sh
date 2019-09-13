#!/bin/bash
cat template > _themes.scss
input="themelist"
while IFS= read -r line
do
  cat templatetheme > .tmp;
  sed -i "s/{THEME_NAME}/$line/g" .tmp;
  cat .tmp >> _themes.scss;
done < "$input"
rm .tmp
