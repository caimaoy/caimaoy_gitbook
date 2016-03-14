#!/bin/bash

if git pull origin master
then
    echo "pull success"
else
    exit $?
fi


if [ $# == 1 ]
then
    git add .
    git ci -a -m "$1"
    git push origin master
    ghp-import -m "$1" _book -p
else
    git add .
    git ci -a -m "update data"
    git push origin master
    ghp-import _book -p
fi



