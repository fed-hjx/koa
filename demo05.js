/*原声node.js 实现路由 中间件fs*/

const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const fs = require('fs');

function render(page) {

    return new Promise((resolve, reject) => {
        let pageUrl = `./page/${page}`;
        fs.readFile(pageUrl, "binary", (err, data) => {
            console.log(data);
            if (err) {
                reject(err)
            } else {

                resolve(data);
            }
        })
    })

}

async function route(url) {

    let page = '404.html';
    switch (url) {
        case '/':

            page = 'index.html';
            break;
        case '/index':
            page = 'index.html';
            break;
        case '/todo':
            page = 'todo.html';
            break;
        case '/404':
            page = '404.html';
            break;
        default:
            break;
    }
    let html = await render(page);

    return html;
}

app.use(async (ctx) => {

    let url = ctx.request.url;
    let html = await route(url);

    ctx.body = html;
})

app.listen(2000, () => {
    console.log('[demo] server is starting at port 2000');
});