
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



	var pagname=1;
	$.get("http://47.104.244.134:8080/goodsbytid.do",{"tid":13,"page":1,"limit":13},function(data){
	var str="";
	for(var j=1;j<data.data.length;j++){
		var idd=data.data[j].id;
        str+=`<li>
			<a href="data.html?did=${idd}"><img src="${data.data[j].picurl}"/></a>
			<span class="pro_name">${data.data[j].name}</span>
			<span class="pro_price">¥${data.data[j].price}</span>
			<em class="hopebuyit" name=${data.data[j].id}>加入购物车</em>
		</li>`
	}
	$(".main_pro").html(str);
   })
	$("#uppage").click(function(){
		pagname--;
		if(pagname<1){
			pagname=1;			
		}

		if($("#pagechange span").eq(2).html()>pagname&&$("#pagechange span").eq(2).html()>3){
			$("#pagechange span").eq(0).html(pagname-2);
			$("#pagechange span").eq(1).html(pagname-1);
			$("#pagechange span").eq(2).html(pagname);
			$("#pagechange span").eq(3).html(pagname+1);
			$("#pagechange span").eq(4).html(pagname+2);
		}
		$("span:contains("+pagname+")").addClass("color_red").siblings().removeClass("color_red");
		$.get("http://47.104.244.134:8080/goodsbytid.do",{"tid":13,"page":pagname,"limit":13},function(data){
	var str="";
	for(var j=1;j<data.data.length;j++){
        str+=`<li>
			<a href=""><img src="${data.data[j].picurl}"/></a>
			<span class="pro_name">${data.data[j].name}</span>
			<span class="pro_price">¥${data.data[j].price}</span>
			<em class="hopebuyit" name=${data.data[j].id}>加入购物车</em>
		</li>`
	}
	$(".main_pro").html(str);
   })
		
	$("#pagechange span").click(function(){
		pagname=$(this).html();
		console.log(pagname);
		if($("#pagechange span").eq(2).html()<pagname){
			$("#pagechange span").eq(0).html(pagname-2);
			$("#pagechange span").eq(1).html(pagname-1);
			$("#pagechange span").eq(2).html(pagname);
			$("#pagechange span").eq(3).html(pagname+1);
			$("#pagechange span").eq(4).html(pagname+2);
		}
		$("span:contains("+pagname+")").addClass("color_red").siblings().removeClass("color_red");
		$.get("http://47.104.244.134:8080/goodsbytid.do",{"tid":13,"page":pagname,"limit":13},function(data){
	var str="";
	for(var j=1;j<data.data.length;j++){
        str+=`<li>
			<a href=""><img src="${data.data[j].picurl}"/></a>
			<span class="pro_name">${data.data[j].name}</span>
			<span class="pro_price">¥${data.data[j].price}</span>
			<em class="hopebuyit" name=${data.data[j].id}>加入购物车</em>
		</li>`
	}
	$(".main_pro").html(str);
   })
		
	})
		
	})
	$("#downpage").click(function(){
		pagname++;		
		if(pagname>20){
			pagname=20;
		}
		pagn=pagname;
		if($("#pagechange span").eq(2).html()<pagname&&$("#pagechange span").eq(2).html()<18){
			$("#pagechange span").eq(0).html(pagname-2);
			$("#pagechange span").eq(1).html(pagname-1);
			$("#pagechange span").eq(2).html(pagname);
			$("#pagechange span").eq(3).html(pagname+1);
			$("#pagechange span").eq(4).html(pagname+2);
		}
		$("span:contains("+pagname+")").addClass("color_red").siblings().removeClass("color_red");
		$.get("http://47.104.244.134:8080/goodsbytid.do",{"tid":13,"page":pagname,"limit":13},function(data){
	var str="";
	for(var j=1;j<data.data.length;j++){
        str+=`<li>
			<a href=""><img src="${data.data[j].picurl}"/></a>
			<span class="pro_name">${data.data[j].name}</span>
			<span class="pro_price">¥${data.data[j].price}</span>
			<em name=${data.data[j].id} class="hopebuyit">加入购物车</em>
		</li>`
	}
	$(".main_pro").html(str);
  })
	})
	
	var toke=$.cookie("userid");
	  $(document).on("click","em",function(){
		var x=$(this).attr("name");		
		$.get("http://47.104.244.134:8080/cartsave.do",{"gid":x,"token":toke},function(data){});
		$.get("http://47.104.244.134:8080/cartlist.do",{"token":toke},function(data){console.log(data)});
	 })
	  
	  $("#go_back").on("click",function(){
		history.back();
	})
})


