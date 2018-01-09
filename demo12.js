/*中间件koa-static 处理静态资源*/

const Koa = require('koa')
const path = require('path')
const static = require('koa-static')

const app = new Koa()


const staticPath = './static'

app.use(static(
  path.join( __dirname,  staticPath)
))


app.use( async ( ctx ) => {
  ctx.body = 'hello world'
})

app.listen(2000, () => {
	console.log('[demo] server is starting at port 2000');
});