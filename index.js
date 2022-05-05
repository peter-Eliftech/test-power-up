const Koa = require("koa");
const serve = require("koa-static");
// const path = require("path");
const app = new Koa();

// response

app.use(serve(__dirname + "/src/html/index.html"));

app.listen(3000);
