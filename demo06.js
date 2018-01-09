/*利用中间件 实现路由 中间件koa-router*/

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', function(ctx, next) {
    ctx.body = "Hello JSPang";
})
.get('/todo',(ctx,next)=>{
    ctx.body = "Hello todo";
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(2000, () => {
    console.log('[demo] server is starting at port 2000');
});