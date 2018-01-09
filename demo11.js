/*html模板引擎 ejs  中间件koa-view*/

const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()

// 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

app.use( async ( ctx ) => {
  let title = 'hello koa2'
  await ctx.render('index', {
    title
  })
})


app.listen(2000, () => {
	console.log('[demo] server is starting at port 2000');
});