
$.get("http://10.31.155.28/xgzj/php/lfenlei.php",function (lfenlei){
	$lfenlei=JSON.parse(lfenlei);
	$.each($lfenlei, function($i) {
		var ldiv=$('<div index='+$i+'></div>');
		ldiv.css('width','250px').css('float','left').css('overflow','hidden');
		var ltdiv=$('<div></div>');
		var lta=$('<a></a>');
		lta.attr('href','#');
		
		lta.css('color','#FFFFFF');
		lta.html($lfenlei[$i].exl);
		lta.appendTo(ltdiv);
		ltdiv.css('width','240px').css('line-height','50px').css('background',$lfenlei[$i].color).css('float','right').css('border-radius','5px 0 0 0').css('text-align','center');
		ltdiv.appendTo(ldiv);
		var lbdiv=$('<div></div>');
		var lba=$('<a></a>');
		lba.attr('href','#');
		
		
		lba.css('display','block').css('width','250px').css('height','420px');
		lba.appendTo(lbdiv);
		var lbimg=$('<img />');
		lbimg.attr('src',$lfenlei[$i].url);
		lbimg.css('display','block').css('width','250px').css('height','420px');
		lbimg.appendTo(lba);
		lbdiv.appendTo(ldiv);
		ldiv.appendTo('.body_fenlei');
		
		var rdiv=$('<div></div>');
		rdiv.css('width','950px').css('float','left').css('border-top','1px solid '+$lfenlei[$i].color).css('overflow','hidden');
		var rdiv1=$('<div></div>');
		rdiv1.css('width','948px').css('padding','7px 10px 9px 10px').css('border-bottom','1px solid #eee').css('overflow','hidden').css('margin-bottom','40px');
		rdiv1.appendTo(rdiv);
		$.get("http://10.31.155.28/xgzj/php/fenlei1.php",function(fenlei1){
			$fenlei1=JSON.parse(fenlei1);
			$.each($fenlei1,function($j){
				var rsdiv=$('<div></div>');
				rsdiv.css('float','left').css('padding','8px');
				var idiv=$('<div></div>');
				var ia=$('<a></a>');
				ia.attr('href','details.html');
				
				
				ia.appendTo(idiv);
				var rsimg=$('<img />');
				rsimg.css('width','220px').css('height','220px');
				rsimg.attr('src',$fenlei1[$j].url);
				rsimg.appendTo(ia);
				idiv.appendTo(rsdiv);
				rsdiv.appendTo(rdiv1);
				var rbdiv=$('<div></div>');
				rbdiv.css('line-height','18px');
				rbdiv.appendTo(rsdiv);
				var rba=$('<a></a>');
				rba.attr('href','#');
				
				
				rba.html($fenlei1[$j].exl);
				rba.appendTo(rbp);
				var rbp=$('<p></p>');
				rbp.css('font-size','12px').css('width','220px');
				rbp.appendTo(rbdiv);
				var rbp2=$('<p></p>');
				rbp2.css('width','220px');
				rbp2.appendTo(rbdiv);
				var rbspan=$('<span></span>');
				rbspan.html('￥'+$fenlei1[$j].pirce);
				rbspan.css('margin-right','20px').css('color','#ea5404').css('font-weight','bold');
				rbspan.appendTo(rbp2);
				var rbspan2=$('<span></span>');
				rbspan2.html('￥'+$fenlei1[$j].fpirce);
				rbspan2.css('font-size','12px').css('text-decoration','line-through');
				rbspan2.appendTo(rbp2);
			})
			
		})
		rdiv.appendTo('.body_fenlei');
	});
	
	
});
