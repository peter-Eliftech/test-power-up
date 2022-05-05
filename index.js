const Koa = require("koa");
const serve = require("koa-static");
const cors = require("@koa/cors");
const path = require("path");

const app = new Koa();

// response
app.use(cors({ origin: "https://trello.com" }));
app.use(serve(path.join(__dirname, "/src")));

app.listen(process.env.PORT || 3000);
