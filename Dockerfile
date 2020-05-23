FROM nodered/node-red
USER root
RUN apk update && apk upgrade

USER node-red
COPY package.json .

RUN npm install --only=production

# Copy  the Node-RED project files into place
COPY flow_cred.json /data/flow_cred.json
COPY flow.json /data/flow.json
COPY deployment.yml /data/deployment.yml
