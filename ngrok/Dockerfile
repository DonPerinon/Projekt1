FROM node:15

RUN wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip && \
    unzip ngrok-stable-linux-amd64.zip && \
    rm -f ngrok-stable-linux-amd64.zip && \
    mv ngrok /usr/local/bin/ && \
    apt-get update && apt-get install -y jq

COPY docker-entrypoint.sh /usr/local/bin/
COPY ngrok.yml /opt/ngrok/conf/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh && ln -s /usr/local/bin/docker-entrypoint.sh /entrypoint.sh # backwards compat

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]

CMD ["sleep", "infinity"]