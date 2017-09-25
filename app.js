
const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const { graphql } = require('graphql');
const schema = require('./schema');

const app = new Koa();
const router = new Router();

app.use(koaBody());

router.post('/graphql', async (ctx, next) => {
    let result = await graphql(schema.RootType, ctx.request.body.graphqlStr);
    ctx.body = result;
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen('3000');