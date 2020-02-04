$(function(){
	var timer;
	var img = -1;
	var speed = 10000;
	var fOut = 500, fIn = 1000;
	var myImages = $(".list a");	
	$("#TopAD").slideDown();
	
	$(".link").append("<ul />");
	for(var i=1;i<=myImages.length;i++){
		$(".link ul").append("<li>"+i+"</li>");
	}

	//滑鼠點選頁籤切換
	$(".link li").click(function(){
		var idx = $(this).text() - 1;
		img = idx;
		//抓索引值
		var _link = myImages.eq(idx);
		//取得連結、標題、內文、日期...
		var adlink=_link.attr("href");
		var adtitle=_link.find("img").attr("title");
		var addate=_link.find("img").attr("rel");
		var adbody=_link.find("img").attr("alt");
		var adsrc=_link.find("img").attr("src");
		var adlink=_link.attr("href");
		var adtarget=_link.attr("target");
		
		/*淡入淡出效果*/
		$(".TopAdleft > *:not(.link)").fadeOut(fOut, function(){
			$(".TopAdleft h2").find("a").attr({
				href: adlink,
				target: adtarget
			});
			$(".TopAdleft h2 a").html(adtitle);
			//post by minwt on←自可更換成張貼者的作者名稱 
			$(".TopAdleft .AdDate").html("Post by Minwt on"+addate);
			
			$(".TopAdleft .Adbody a").html(adbody);
			$(".TopAdleft .Adbody").find("a").attr({
				href: adlink,
				target: adtarget
			});
		}).fadeIn(fIn);
		$(".TopAdright").fadeOut(fOut, function(){
			$(".TopAdright").find("a").attr({
				href: adlink,
				target: adtarget
			});
			$(".TopAdright").find("img").attr("src",adsrc);
		}).fadeIn(fIn);	
		
		$(this).removeClass("off").addClass("on")
			.siblings().removeClass("on").addClass("off");		
	});

	//當滑鼠滑入區塊停止自動播放
	$("#TopAD").hover(function(){
		clearTimeout(timer);
	}, function(){
		timer = setTimeout(autoShow, speed);
	});
	
	function autoShow(){
		img = (img+1<myImages.length) ? img+1 : 0;
		$(".link li").eq(img).click();
		timer = setTimeout(autoShow, speed);
	}

	autoShow();
	
});