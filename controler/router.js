module.exports.showIndexPage = function(req, res) {
  res.render("index", {
    tabBars: ["预订与服务", "旅行信息", "搭乘海航", "优惠与推荐", "金鹏俱乐部", "飞行+"]
  })
}