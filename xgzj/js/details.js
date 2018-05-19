$(".bd a").on("click",function(){//换图
	$("#zoom-jpg a img").attr("src",$(this).attr("rev"));
	$('.ifdj').attr('src',$(this).attr('rev'));
});
$(".p-add").on("click",function(){//数量加
	var text=$(".text").val();
	text++;
	text=text>99?99:text;
	$(".text").val(text);
});
$(".p-reduce").on("click",function(){//数量减
	var text=$(".text").val();
	text--;
	text=text<1?1:text;
	$(".text").val(text);
});

(function(){
            //var $box=$('.box');
			var $smallbox=$('.jqzoom');
			var $smallglass=$('.MagicZoomPup');
		    var $bigbox=$('#fdj');
		    var $bigpic=$('.ifdj');
		    //var $aLi=$('li')
		    $smallbox.on('mouseover',function(){
		    	$smallglass.css('display','block');
				$bigbox.css('display','block');
//				$smallglass.width($bigbox.width()*$smallbox.width()/$bigpic.width()) 
				$smallglass.height($bigbox.height()*$smallbox.height()/$bigpic.height())
				
			$smallbox.on('mousemove',function(ev){
				var ev=ev||window.event;
				var bili=$bigpic.width()/$smallbox.width();
//				var l=ev.clientX-$box.offset().left-$smallglass.width()/1.7;
				var t=ev.clientY-$smallbox.offset().top-$smallglass.height()/3;
//				if (l<0) {
//					l=0;
//				}else if (l>=$smallbox.width()-$smallglass.width()-2) {
//					l=$smallbox.width()-$smallglass.width()-2;
//				}
				if (t<0) {
					t=0;
				}else if (t>=$smallbox.height()-$smallglass.height()) {
					t=$smallbox.height()-$smallglass.height();
				}
//				$smallglass.css('left',l)
				$smallglass.css('top',t);
				
//				$bigpic.css('left',-bili*l)
				$bigpic.css('top',-bili*t);
				
			$smallbox.on('mouseout',function(){
				$bigbox.css('display','none');
				$smallglass.css('display','none');
			})
			
//            $.each($aLi,function(index,ele){
//            	$(this).on('mouseover',function(){
//            		$smallbox.find('img')[0].src = $(this).find('img')[0].src;
//                  $bigbox.find('img')[0].src = $(this).find('img')[0].src;
//            	})
//            })
			})
			
		})
    })()