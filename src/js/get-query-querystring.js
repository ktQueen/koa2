/**
 * Created by kt on 2018-8-18.
 */
const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{//上下文对象
  console.log(ctx);
  let url =ctx.url;
  let request =ctx.request;
  let req_query = request.query;
  let req_querystring = request.querystring;

  ctx.body={
    url,
    req_query,
    req_querystring
  }

});

app.listen(3000,()=>{
  console.log('[demo] server is starting at port 3000');
});