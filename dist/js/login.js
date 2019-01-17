$(function(){
	if($.cookie("zz")){
		$("#user").val($.cookie("zz"));
		$("#pwd").val($.cookie("mima"));
	}
	
	
	$(".outleave").click(function(){
		$.removeCookie("userid");
		$(".denglv").show();
		$(".zhuce").show();
		$(".mine").hide();
		$(".outleave").hide();
		$(".car_num").html(0);
	})
	var toke=$.cookie("userid");
	if(toke){
	$.get("http://47.104.244.134:8080/cartlist.do",{"token":toke},function(data){
		$(".car_num").html(data.length);})
	    $(".denglv").hide();
		$(".zhuce").hide();
		var str1="";
		str1=toke+"  用户你好！";
		$(".mine").html(str1).show();
		$(".outleave").show();
		
	}else{
		$(".denglv").show();
		$(".zhuce").show();
		$(".mine").hide();
		$(".outleave").hide();
	}
	
	$("#user").change(function(){
		$(".tishi").hide();
	})
	$("#pwd").change(function(){
		$(".tishi").hide();
	})
	$("#joinit").click(function(){
		$.post("http://47.104.244.134:8080/userlogin.do",{"name":$("#user").val(),"password":$("#pwd").val()},function(data){
					if(data.code==0){
						$.cookie("userid",data.data.token,{ expires: 7 , path: '/' });
						location.href = "index.html";						
					}else{
						$(".tishi").show();
					}
				})
	})
})