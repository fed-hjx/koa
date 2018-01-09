/*写入cookie 中间件koa-router*/

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', function(ctx, next) {
	ctx.cookies.set(
		'MyName', 'JSPang', {
			domain: '10.41.12.11', // 写cookie所在的域名
			path: '/', // 写cookie所在的路径
			maxAge: 1000 * 60 * 60 * 24, // cookie有效时长 1天
			expires: new Date('2018-12-31'), // cookie失效时间
			httpOnly: false, // 是否只用于http请求中获取
			overwrite: false // 是否允许重写
		}
	);
	ctx.body = 'cookie is ok';
});
router.get('/page', function(ctx, next) {
	const ss = ctx.cookies.get('MyName')
	ctx.body = ss;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(2000, () => {
	console.log('[demo] server is starting at port 2000');
});