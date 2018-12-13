//导入依赖的包
	const express=require("express")
//导入数据库连接池
	const pool=require("../pool.js")
//创建路由器
	var router=express.Router()
//创建路由

//导出路由器
	module.exports=router