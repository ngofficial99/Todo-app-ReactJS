# Wait until the app is responsive
while ! curl -s http://localhost:3000/ > /dev/null; do
  echo "Waiting for app to start..."
  sleep 5  # check every 5 seconds
done
echo "Application has started."