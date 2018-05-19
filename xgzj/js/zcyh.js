$(function(){
var bstop=true;//不通过
var pstop=true;
var estop=true;
var cpstop=true;
var usereg=/^([\u4e00-\u9fa5]|[\w\-]){3,15}$/;
var emailreg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
var passnum=/[0-9]/g;
var passAa=/[a-zA-Z]/g;
var passf=/\W/g;
//var phonereg=/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\\d{8}$/;
$('#username').on('blur',function(){
	var username=$(this).val();//获取用户名值
	if(username!=''){//检测用户名是否为空
		if(usereg.test(username)){//检测用户名是否满足正则
			//将当前的用户名给后端，后端和数据库进行匹配，不管是否存在，后端返回结果
			$.ajax({
				type:'post',
				url:'http://10.31.155.28/xgzj/php/reg.php',
				data:{
					name:username//获取用户名给后端
				},
				success:function(d){
					console.log(d);
					if(d){
						$('#username_notice').css('color','red').html('用户名已存在');
						bstop=true;
					}else{
						$('#username_notice').css('color','green').html('√');
						bstop=false;
					}
				}
			})
		}else{
			$('#username_notice').css('color','red').html('格式不正确');
			bstop=true;
		}
	}else{
		$('#username_notice').css('color','red').html('用户名不能为空');
		bstop=true;
	}
});
$("#email").on('blur',function(){
	var email=$(this).val();
	if(email!=''){//检测用户名是否为空
		if(emailreg.test(email)){
			$('#email_notice').css('color','green').html('√');
			estop=false;
		}else{
			$('#email_notice').css('color','red').html('格式不正确');
			estop=true;
		}
	}else{
		$('#email_notice').css('color','red').html('邮箱不能为空');
		estop=true;
	}
});
$("#password1").on('blur',function(){
	var password=$(this).val();
	if(password.length>=6 && password.length<=20){//检测用户名是否为空
		if(passAa.test(password) && passnum.test(password) && passf.test(password)){
			$('#pwdStrong em').css('background-color','#c4c4c4');
			$('#pwd_high').css('background-color','rgb(247, 145, 0)');
			$('#password_notice').css('color','green').html('√');
		}else if((passAa.test(password) && passf.test(password)) || (passAa.test(password) && passnum.test(password)) || (passnum.test(password) && passf.test(password))){
			$('#pwdStrong em').css('background-color','#c4c4c4');
			$('#pwd_middle').css('background-color','rgb(247, 145, 0)');
			$('#password_notice').css('color','green').html('√');
		}else if(passAa.test(password) || passnum.test(password) || passf.test(password)){
			$('#pwdStrong em').css('background-color','#c4c4c4');
			$('#pwd_lower').css('background-color','rgb(247, 145, 0)');
			$('#password_notice').css('color','green').html('√');
		}
		pstop=false;
	}else{
		$('#password_notice').css('color','red').html('请输入6-20位密码');
		pstop=true;
	}
});
$("#conform_password").on('blur',function(){
	var conform_password=$(this).val();
	if(conform_password==$("#password1").val()){
		$('#conform_password_notice').css('color','green').html('√');
		cpstop=false;
	}else{
		$('#conform_password_notice').css('color','red').html('密码不一致');
		cpstop=true;
	}
});

//	$("#phone").on('blur',function(){
//		var phone=$(this).val();
//		if(phonereg.test(phone)){
//			$('#phone_notice').css('color','green').html('√');
//		}else{
//			$('#phone_notice').css('color','red').html('格式不正确');
//		}
//	});


$('form').on('submit',function(){//验证不通过无法提交的
	if(bstop || pstop || estop ||cpstop){
		return false;//阻止按钮跳转。
		}
	});
});