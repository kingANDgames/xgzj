$(function(){
    //1.控制楼梯的显示与隐藏
	var $loutili=$('#loutinav ul li');//楼梯子元素li
	var $louceng=$('#body .louti');//楼层
	$(window).on('scroll',function(){
		//scrollTop():获取匹配元素相对滚动条顶部的偏移
		var $st=$(window).scrollTop();
		if($st>=400){
			$loutili.show();
		}else{
			$loutili.hide();
		}
		
		//4.拖拽滚轮，左侧对应的楼梯添加active
		//获取楼层每一个的top值
		//each(): 类似于for，遍历  ,终止循环 --return false  
		$louceng.each(function(index,element){//index:元素的索引，element:当前的元素   
			var $top1=$louceng.eq(index).offset().top+400;
			if($top1>$st){//如果盒子的top值大于滚动条的top值，添加active.
				$loutili.removeClass('active');
				$loutili.eq(index).addClass('active');
				return false;
			}
			//return false;//终止循环
		});
		
	});
	
	//2.给左侧的楼梯添加点击事件，进行位置的跳转
	//offset():盒子的偏移值，返回一个对象，包含left/top
	$loutili.not('.last').on('click',function(){
		var $top=$louceng.eq($(this).index('li')).offset().top;//当前楼梯li项对应的楼层的top值。
		$('html,body').animate({
			scrollTop:$top
		})
	});
	
	//3.回到顶部
	$('#loutinav ul li.last').on('click',function(){
		$('html,body').animate({
			scrollTop:0
		});
	});
});