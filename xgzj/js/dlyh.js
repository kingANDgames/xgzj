function addCookie(key,value,day){
	var date=new Date();//创建日期对象
	date.setDate(date.getDate()+day);//过期时间：获取当前的日期+天数，设置给date
	document.cookie=key+'='+encodeURI(value)+';expires='+date;//添加cookie，设置过期时间
}
$('#login_button').on('click',function(){
	var $username=$('#un').val();//用户名
	var $password=$('#pwd').val();//密码
	$.ajax({
		type:'post',
		url:'http://10.31.155.28/xgzj/php/dlyh.php',
		data:{//将用户名和密码传输给后端
			name:$username,
			pass:$password
		},
		success:function(data){//请求成功，接收后端返回的值
			if(!data){//用户名或者密码错误
//								alert('用户名或者密码错误');
                $('#accountDesc').css('color','red').html('用户名或者密码错误');
				$($password).val('');
			}else{//成功
				addCookie('UserName',$username,7);
				location.href='http://10.31.155.28/xgzj/index.html';
			}
		}
	});
});
$('#un').on('focus',function(){
	$('#accountDesc').html('');
});
$('form').on('submit',function(){//验证不通过无法提交的
		return false;//阻止按钮跳转。
});