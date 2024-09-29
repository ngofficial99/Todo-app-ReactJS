#!/bin/bash

# Navigate to the deployment directory
cd /home/ubuntu/Todo-app-ReactJS
source ~/.nvm/nvm.sh
echo "$PATH"
# Start the application using PM2
# Replace "my-react-app" with the actual name of your app and ensure the path and other details match your setup.
pm2 stop Todo-app-ReactJS
pm2 delete Todo-app-ReactJS
pm2 start "serve -s build"  --name "Todo-app-ReactJS"
echo "Waiting a few seconds for the server to initiate..."
sleep 30