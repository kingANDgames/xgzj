$.get("http://10.31.155.28/xgzj/php/koubei.php",function(koubei){
	$koubei=JSON.parse(koubei);
	var $oul=document.createElement("ul");
	for($i=0;$i<$koubei.length;$i++){
		$oli=document.createElement("li");
		oli.index=$i;
		$odiv=document.createElement("div");
		$oa=document.createElement("a");
		$oa.href='details.html';
		
		
		$ia=document.createElement("a");
		$ia.href='details.html';
		
		
		$oimg=document.createElement("img");
		$op=document.createElement("p");
		$op.innerHTML='￥'+$koubei[$i].price;
		$op.style.cssText="width: 80px;height: 30px;background: #76ac25;color: #FFFFFF;position: absolute;text-align: center;";
		$ia.appendChild($op);
		$oli.style.cssText="float: left;border: 1px solid #ccc;";
		$oul.append($oli);
		$odiv.style.cssText="width: 194px;padding: 0 20px;height: 45px;";
		$oli.append($odiv);
		$oa.innerHTML=$koubei[$i].exl;
		$oa.style.cssText="font-size: 14px;color: #000000;"
		$odiv.append($oa);
		$ia.style.cssText="display: block;width: 234px;height: 235px;position: relative;color: #000000;";
		$oli.append($ia);
		$oimg.src=$koubei[$i].imgurl;
		$oimg.style.cssText="width: 234px;height: 235px;display: block;";
		$ia.append($oimg);
	}
	$oul.style.overflow="hidden";
	$(".body_koubei").append($oul);
});
