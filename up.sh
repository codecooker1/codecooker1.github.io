#!/bin/bash
eval $(ssh-agent -c)
ssh-add ~/.ssh/githubsshid
git add .
git commit -m "Push Update"
git push
