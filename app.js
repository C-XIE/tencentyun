// const Koa = require('koa');
// const path = require('path');
// const serve = require('koa-static');

// const app = new Koa();


// const main = serve(path.join(__dirname));

// app.use(main)
// app.listen(4000);

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('build'))
app.listen(4000);