const router = require('koa-router')()

router.get('/', async(ctx, next) => {
  ctx.state = {
    title: 'hoosin (@hoosin) blogs'
  }

  await ctx.render('index', {})
})
module.exports = router