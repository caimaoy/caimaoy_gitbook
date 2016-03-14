#!/bin/bash


if [ $# == 1 ]
then
    git add .
    git ci -a -m "$1"
    git pull origin master
    git push origin master
    ghp-import -m "$1" _book -p
else
    git add .
    git ci -a -m "update data"
    git pull origin master
    git push origin master
    ghp-import _book -p
fi



