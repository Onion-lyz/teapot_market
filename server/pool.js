//导入依赖的包
	const mysql=require("mysql")
//创建数据库连接池
	var pool=mysql.createPool({
		host:"127.0.0.1",
		port:3306,
		user:"root",
		password:"",
		database:"teapot",
		connectionLimit:20
	})
//导出数据库连接模块
	module.exports=pool