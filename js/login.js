$(function(){
	$("#user").change(function(){
		$(".tishi").hide();
	})
	$("#pwd").change(function(){
		$(".tishi").hide();
	})
	$("#joinit").click(function(){
		$.post("http://47.104.244.134:8080/userlogin.do",{"name":$("#user").val(),"password":$("#pwd").val()},function(data){
					if(data.code==0){
						location.href = "index.html";
					}else{
						$(".tishi").show();
					}
				})
	})
})