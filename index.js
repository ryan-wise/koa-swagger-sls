const Koa = require("koa");
const koaSwagger = require("koa2-swagger-ui");
const yamljs = require('yamljs');

const app = new Koa();

const spec = yamljs.load('./swagger.yml');

app.use(
  koaSwagger({
    routePrefix: "/swagger",
    swaggerOptions: { 
      spec, 
      supportedSubmitMethods: []
    },
    title: 'TSS Data Aggregator',
    hideTopbar: true
  })
);

module.exports = app;