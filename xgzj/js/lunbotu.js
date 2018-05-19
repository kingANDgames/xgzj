
function Taobao(){
	this.banner=$('.banner');
	this.picul=$('.banner ul');
	this.piclist=$('.banner ul li');
	this.btns=$('.banner ol li');
	this.num=0;
	this.liwidth=this.piclist.eq(0).width();
	this.timer=null;
}
Taobao.prototype.init=function(){
	var that=this;
	var $firstpic=this.piclist.first().clone()
	var $lastpic=this.piclist.last().clone();
	this.picul.append($firstpic);
	this.picul.prepend($lastpic);
	//重新获取piclist的长度。
	this.piclist=$('.banner ul li');
	this.picul.width(this.liwidth*this.piclist.length).css('left',-this.liwidth);
	for(var i=0;i<this.btns.length;i++){
		this.btns[i].onmousemove=function(){
			that.num=$(this).index();
			that.tabchange();
		}
	}
	this.banner.hover(function(){
		clearInterval(that.timer);
	},function(){
		that.autoplay();
	});
	
	
	this.autoplay();
}

Taobao.prototype.tabchange=function(){
	var that=this;
	this.btns.eq(this.num).addClass('active').siblings().removeClass('active');
	this.picul.stop(true,true).animate({
		left:-this.liwidth*(this.num+1)
	},200,function(){
		if(parseInt(that.picul.css('left'))==-that.liwidth*(that.btns.length+1)){
			that.picul.css('left',-that.liwidth+'px');
			that.num=0;
		}
		if(parseInt(that.picul.css('left'))==0){
			that.picul.css('left',-that.liwidth*that.btns.length+'px');
			that.num=that.btns.length-1;
		}
	})
}
Taobao.prototype.autoplay=function(){
	var that=this;
	that.timer=setInterval(function(){
		that.num++;
		if(that.num==that.btns.length){
			that.btns.eq(0).addClass('active').siblings().removeClass('active');
		}
		that.tabchange();
	},2000)
}
new Taobao().init();