#!/bin/bash

echo "entrypoint $APP"
/usr/local/bin/ngrok http --config=/opt/ngrok/conf/ngrok.yml $NGROK_APP &
sleep 5
curl localhost:4040/api/tunnels | jq -r '.tunnels[] | .public_url'| egrep 'https:' >> /tmp/endpoints
exec "$@"