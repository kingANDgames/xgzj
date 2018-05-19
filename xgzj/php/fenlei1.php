<?php
	require "connect.php";
	$kb=mysql_query('select * from fenlei1');
	$arr=array();
	for($i=0;$i<mysql_num_rows($kb);$i++){
		$arr[$i]=mysql_fetch_array($kb,MYSQL_ASSOC);
	}
	echo json_encode($arr);	
?>