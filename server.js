const strapi = require("@strapi/strapi");
strapi().start();
(PATH=/opt/plesk/node/16/bin:$PATH; npm ci --force && npm run build &> npm.log)
mkdir -p ./tmp
touch ./tmp/restart.txt