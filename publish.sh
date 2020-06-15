#!/bin/bash

npm run build

git add .

git commit -m "commit of verion $1"

git tag -a $1 -m "add version of $1"

git push --tags