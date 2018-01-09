/*利用中间件 实现路由3(多个层级路由) 中间件koa-router*/

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const home = new Router();
const page = new Router();


home.get('/', function(ctx, next) {
    ctx.body = "Hello JSPang";
})
page.get('/todo',(ctx,next)=>{
    ctx.body = "Hello todo";
})


const router = new Router();
router.use('/home',home.routes(),home.allowedMethods());
router.use('/page',page.routes(),page.allowedMethods());
app.use(router.routes()).use(router.allowedMethods());

app.listen(2000, () => {
    console.log('[demo] server is starting at port 2000');
});