$(function(){
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
	
	var toke=$.cookie("userid");
	if(toke){
	$.get("http://47.104.244.134:8080/cartlist.do",{"token":toke},function(data){
		$(".car_num").html(data.length);})
	}
	
	var a,b,c,d,flag;
	flag=0;

	$("#phonenum").change(function(){
		var regnum=/^1(3|5|7|8)\d{9}$/;
		console.log(regnum.test($(this).val()));
		if(!$(this).val()){
			$("#tishi1").html("手机号不能为空").show();
		}else if(!regnum.test($(this).val())){
			$("#tishi1").html("手机号格式不对").show();
		}else{
			$("#tishi1").hide();
			a=1;
		}
	});
	
	$("#mimi").change(function(){
		if(!$(this).val()){
			$("#tishi2").html("验证码不能为空").show();
		}else if($(this).val().length!=6){
			$("#tishi2").html("验证码长度6位").show();
		}else{
			b=1
		}
	})	
	$("#pswd").change(function(){
		var reg=/^\w{6,20}$/;
		if(!$(this).val()){
			$("#tishi3").html("密码不能为空").show();
		}else if(!reg.test($(this).val())){
			$("#tishi3").html("格式不对").show();
		}else{
			c=1;
		}
	})
	$("#pwd").change(function(){		
		if(!$(this).val()){
			$("#tishi4").html("验证码不能为空").show();
		}else if($(this).val()!=$("#pswd").val()){
			$("#tishi4").html("两次密码不一致").show();
		}else{
			d=1;
		}
	})
	$("#joinit").click(function(){
		flag=a+b+c+d;
		if(flag!=4){
			alert("请输入正确信息");
		}else{
			var username=$("#phonenum").val();
			$.get("http://47.104.244.134:8080/username.do",{username:$("#phonenum").val()},function(data){
			    if(data.code==0){
			    	$("#tishi1").html("该用户已存在").show();
			    }else{			    	
				    $.post("http://47.104.244.134:8080/usersave.do",{"username":$("#phonenum").val(),"password":$("#pswd").val(),"email":$("#phonenum").val()+"@163.com","sex":"男"});
				    $.cookie("zz",$("#phonenum").val(),{ expires: 1 , path: '/' });
				    $.cookie("mima",$("#pwd").val(),{ expires: 1 , path: '/' });
	                location.assign("logoin.html");		   
			    }
			});
						
		}
	})
	
	
})