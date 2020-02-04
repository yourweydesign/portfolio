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

	//�ƹ��I�ﭶ�Ҥ���
	$(".link li").click(function(){
		var idx = $(this).text() - 1;
		img = idx;
		//����ޭ�
		var _link = myImages.eq(idx);
		//���o�s���B���D�B����B���...
		var adlink=_link.attr("href");
		var adtitle=_link.find("img").attr("title");
		var addate=_link.find("img").attr("rel");
		var adbody=_link.find("img").attr("alt");
		var adsrc=_link.find("img").attr("src");
		var adlink=_link.attr("href");
		var adtarget=_link.attr("target");
		
		/*�H�J�H�X�ĪG*/
		$(".TopAdleft > *:not(.link)").fadeOut(fOut, function(){
			$(".TopAdleft h2").find("a").attr({
				href: adlink,
				target: adtarget
			});
			$(".TopAdleft h2 a").html(adtitle);
			//post by minwt on���ۥi�󴫦��i�K�̪��@�̦W�� 
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

	//��ƹ��ƤJ�϶�����۰ʼ���
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