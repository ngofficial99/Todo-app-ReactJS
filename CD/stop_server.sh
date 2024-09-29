#!/bin/bash
source ~/.nvm/nvm.sh
echo "$PATH"

pm2 stop Todo-app-ReactJS || true
pm2 delete Todo-app-ReactJS || true