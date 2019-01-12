$(function(){
		$("#cart").on("mouseover",function(){
			$(this).css({"background":"#fff"});
			$("#mycart").show();
		});
		$("#cart").on("mouseleave",function(){
			$("#cart").css({"background":"#f8e3df"});
			$("#mycart").hide().css({"background":"#fff"});
		})
		$("#cart a").on("click",function(){
		});
		$("#mysth").mouseenter(
			function(){
				$("#minesth").show();
				$(this).css({"background":"#fff","border":"1px solid #f00","border-bottom":"none"});				
			})
		$("#mysth").mouseleave(
			function(){
				$("#minesth").hide();
				$(this).css({"background":"#f8e3df","border":"none"});				
			})
})
