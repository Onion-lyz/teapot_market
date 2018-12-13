//导入项目依赖的模块
	const express=require("express")
	const bodyParser=require("body-parser")
//导入路由器
	const user=require("./routes/user.js")

//搭建服务器
	var app=express()
	app.listen(3000,()=>{console.log("teapot server built,port:3000!")})
//托管静态资源
	app.use(express.static('../client'))
//使用body-parser中间件对内容进行解码
	app.use(bodyParser.urlencoded({extended:false}))
//使用中间件方式连接路由由器
	app.use("/user",user)