<?php
	require "connect.php";
	//确认前端是否将用户名传输过来。
	//如果用户名存在，或者点击了submit按钮
	if(isset($_POST['index'])){
		$index=$_POST['index'];
		//判断用户输入的用户名是否存在数据库中,引号。
		//username:数据库的字段
		//$username：前端传输过来的值
		$query1="select * from gwc where index='$index'";
		
		$result=mysql_query($query1);//如果$result有结果，代表用户名存在数据库中
		
		if(mysql_fetch_array($result)){//有重复
			echo true;//1
		}else{
			echo false;//空
		}
		
		//注册的信息放置到数据库里面
		if(isset($_POST['submit'])){
			$index=$_POST['username'];//用户名
			$url=$_POST['email'];//邮箱
			$exl=md5($_POST['password']);//密码
			$price=$_POST['phone'];
			$num=$_POST['phone'];
			$zprice=$_POST['phone'];
			$query="insert xinxi values(null,'$indix,'$url','$exl','$price','$num','$zprice')";
			mysql_query($query);
			header('location:../denglu.html');//跳转到login.html页面
		}
	}else{
		$kb=mysql_query('select * from gwc');
		$arr=array();
		for($i=0;$i<mysql_num_rows($kb);$i++){
			$arr[$i]=mysql_fetch_array($kb,MYSQL_ASSOC);
		}
		echo json_encode($arr);
	}
	
	
?>