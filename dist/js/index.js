$(function() {
	$("#cart").on("mouseover", function() {
		$(this).css({
			"background": "#fff"
		});
		$("#mycart").show();
	});
	$("#cart").on("mouseleave", function() {
		$("#cart").css({
			"background": "#f8e3df"
		});
		$("#mycart").hide().css({
			"background": "#fff"
		});
	})
	$("#cart a").on("click", function() {});
	$("#mysth").mouseenter(
		function() {
			$("#minesth").show();
			$(this).css({
				"background": "#fff",
				"border": "1px solid #f00",
				"border-bottom": "none"
			});
		})
	$("#mysth").mouseleave(
		function() {
			$("#minesth").hide();
			$(this).css({
				"background": "#f8e3df",
				"border": "none"
			});
		})
	$(".main_list li").mouseover(function() {
		var i = $(this).index();
		if(i>0){
			$(".list_00").show();
		    $(".list_01").eq(i-1).siblings().hide();
		    $(".list_01").eq(i-1).show();
		}else{
			$(".list_00").hide();
		}
	});
	$(".list_00").mouseleave(function() {
		$(this).hide();
		$(".list_01").hide();
	});

	var obj = {};
	var i = 0;
	neirong(0);

	function neirong(i) {
		$(".banner_list li").eq(i).siblings().css("display", "none");
		$(".banner_list li").eq(i).stop().fadeIn(1000);
		$(".banner_num li").eq(i).siblings().removeClass("select");
		$(".banner_num li").eq(i).addClass("select");
	}
	lunbo();

	function lunbo() {
		clearInterval(obj.timer);
		obj.timer = setInterval(function() {
			i++;
			if(i > 4) {
				i = 0;
			}
			if(i < 0) {
				i = 0;
			}
			neirong(i)
		}, 4000)
	}
	$(".banner_num li").on("click", function() {
		i = $(this).index();
		neirong(i);
	})
	$('.banner_list').on("mouseenter", function() {
		clearInterval(obj.timer);
	})
	$('.banner_list').on("mouseout", function() {
		lunbo();
	})
	$("#_left").on("click", function() {
		i = i - 1;
		if(i < 0) {
			i = 4
		}
		neirong(i);
	})
	$("#_right").on("click", function() {
		i = i + 1;
		if(i > 4) {
			i = 0;
		}
		neirong(i);
	})
	$(".banner_num").css("left", $(document).width() / 2 - $(".banner_num").width() / 2);
	var smallnum=0;
	obj.timer2=setInterval(function(){
		$(".lizi_1").eq(smallnum).show();
		$(".lizi_1").eq(smallnum).siblings().hide();
		smallnum++;
		if(smallnum>2){
			smallnum=0;
		}
	},2000);
	
	
	var secnum=0;
	neirong3(0);
	function neirong3(secnum) {
		$(".sec_lunbo li").eq(secnum).siblings().hide();
		$(".sec_lunbo li").eq(secnum).show();
		$(".sec_list em").eq(secnum).siblings().removeClass("color_blk");
		$(".sec_list em").eq(secnum).addClass("color_blk");
	}
	lunbo3();
	function lunbo3() {
		clearInterval(obj.sectimer);
		obj.sectimer = setInterval(function() {
			secnum++;
			if(secnum > 4) {
				secnum = 0;
			}
			if(secnum < 0) {
				secnum = 0;
			}
			neirong3(secnum)
		}, 4000)
	}
	$(".sec_list em").on("mouseenter", function() {
		secnum = $(this).index();
		neirong3(secnum);
	})
	$(".maybe_img li").mouseover(function(){
		$(this).find("img").stop(true).animate({"top":"-40px"},500);
		$(this).siblings().find("img").stop(true).animate({"top":"0px"},500);
	})
	$(".maybe_img li").mouseleave(function(){
		$(this).find("img").stop(true).animate({"top":"0"},500);
		$(this).siblings().find("img").stop(true).animate({"top":"0px"},500);
	})
	var imgnum=0;
	$("#maybe_left").click(function(){
		imgnum--;
		if(imgnum<0){
			imgnum=0;
		}
		$(".maybe_img ul").animate({"left":imgnum*-274+"px"},500);
	})
	$("#maybe_right").click(function(){
		
		imgnum++;
		if(imgnum>4){
			imgnum=4;
		}
		$(".maybe").find("ul").animate({"left":imgnum*-274+"px"},500);
	})
	
	var fri_num = 0;
	fri_neirong(0);
	function fri_neirong(fri_num) {
		$(".fri_lunbo").find(".fri_lunbo_img").animate({"left":-fri_num*700+"px"},500);
		$(".fri_lunbo_num li").eq(fri_num).siblings().removeClass("color_wit");
		$(".fri_lunbo_num li").eq(fri_num).addClass("color_wit");
	}
	fri_lunbo();
	function fri_lunbo(){
		clearInterval(obj.fritimer);
		obj.fritimer = setInterval(function() {
			fri_num++;
			if(fri_num > 4) {
				fri_num = 0;
			}
			if(fri_num < 0) {
				fri_num = 0;
			}
			fri_neirong(fri_num)
		}, 6000)
	}
	$(".fri_lunbo_num li").on("click", function() {
		fri_num = $(this).index();
		fri_neirong(fri_num);
	})
})