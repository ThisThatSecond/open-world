#!/bin/bash

npm run build

git tag -a $1 -m "add version of $1"

git push --tags