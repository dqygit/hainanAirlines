const express = require("express")
const app = express()
const router = require("./controler/router")


app.set("view engine", "ejs")

app.use(express.static("./public"))


// 默认路由
app.get("/", router.showIndexPage)

app.listen(8000, function() {
  console.log("服务器启动成功!!!")
})