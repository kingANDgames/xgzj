<?php
	header('content-type:text/html;charset=utf-8');
	$conn=@mysql_connect('localhost','root','');
	if(!$conn){
		die('数据库连接失败：'.mysql_error());
	}
	
	mysql_select_db('xgzj');
	mysql_query('SET NAMES UTF8');
	
	
	//mysql_close($conn);
?>