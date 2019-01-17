$(function(){
	$(".outleave").click(function(){
		$.removeCookie("userid");
		$(".denglv").show();
		$(".zhuce").show();
		$(".mine").hide();
		$(".outleave").hide();
		$(".car_num").html(0);
	})
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
	
	var toke=$.cookie("userid");
	if(!toke){
		$(".denglv").show();
		$(".zhuce").show();
		$(".mine").hide();
		$(".outleave").hide();
		alert("请登录");
	}
	else{
		$(".denglv").hide();
		$(".zhuce").hide();
		var str1="";
		str1=toke+"  用户你好！";
		$(".mine").html(str1).show();
		$(".outleave").show();
			
	$.get("http://47.104.244.134:8080/cartlist.do",{"token":toke},function(data){
		$(".car_num").html(data.length);
		if(data.length==0){
			$(".cart_bg").show();
			$("#shopcart").hide();
		}else{
			$("#shopcart").show();
			$(".cart_bg").hide();
		}
		var str="";
		var money=0;
		for( var j=0;j<data.length;j++){
			money+=data[j].goods.price*data[j].count;
			str+=`<li data_id="${data[j].id}">
						<div class="pro_name">
						    <a href="data.html?did=${data[j].goods.id}">
						    <img src="${data[j].goods.picurl}"/></a>
							${data[j].goods.name}
						</div>
						<div class="pro_num">
						    <b class="nec">-</b>
							<span>${data[j].count}</span>
							<b class="dec">+</b>
						</div>
						<div class="pro_pri">
							${data[j].goods.price}
						</div>
						<div class="pro_sum">
							${data[j].goods.price*data[j].count}
						</div>
						<div class="opct">
							删除
						</div>						
			            <input type="checkbox" class="selectit" checked="checked"/>
					</li>`
		}
		$("#shopcart").find("ul").html(str);
		$(".allmoney span").html(money);
	});
	}
	
	$(document).on("click",".nec",function(){
		var getid=$(this).parent().parent().attr("data_id");
		var num=$(this).parent().find("span").html();
		var pri=$(this).parent().parent().find(".pro_pri").html();
		if(num>0){
			$.get("http://47.104.244.134:8080/cartupdate.do",{"id":getid,"gid":0,"num":-1,"token":toke})
			num--;
			$(this).parent().find("span").html(num);
			$(this).parent().parent().find(".pro_sum").html(num*pri);
			var num=0;
		$("input:checked").siblings(".pro_sum").each(function(){num-= -$(this).html()});
	    $(".allmoney span").html(num);	
		}	
	})
	
	$(document).on("click",".dec",function(){
		var getid=$(this).parent().parent().attr("data_id");
		var num=$(this).parent().find("span").html();
		var pri=$(this).parent().parent().find(".pro_pri").html();
		if(num>=0){
			$.get("http://47.104.244.134:8080/cartupdate.do",{"id":getid,"gid":0,"num":1,"token":toke})
			num++;
			$(this).parent().find("span").html(num);
            $(this).parent().parent().find(".pro_sum").html(num*pri);
			var num=0;
		$("input:checked").siblings(".pro_sum").each(function(){num-= -$(this).html()});
	    $(".allmoney span").html(num);	
		}		
	})	
	$("#shopcart ul").on("click",".opct",function(){
		var getid=$(this).parent().attr("data_id");
        var linum = $(this).parent().index();
        $(".allmoney span").html($(".allmoney span").html()-$(this).parent().find(".pro_sum").html());
        $.get("http://47.104.244.134:8080/cartupdate.do",{"id":getid,"gid":0,"num":0,"token":toke})
        $(this).parent().remove();
        $(".car_num").html($(".car_num").html()-1);
        var num=0;
		$("input:checked").siblings(".pro_sum").each(function(){num-= -$(this).html()});
	    $(".allmoney span").html(num);	
	})
	
	$(".clearall").on("click",function(){
		for(var k=0;k<$('#shopcart').find("li").length;k++){
			var getid=$('#shopcart li').eq(k).attr("data_id");
			$.get("http://47.104.244.134:8080/cartupdate.do",{"id":getid,"gid":0,"num":0,"token":toke})			
		}
		$(".cart_bg").show();
		$("#shopcart").hide();
		$(".car_num").html("0");
	})
	
	$("#go_back").on("click",function(){
		history.back();
	})
	
	$(document).on("click",".selectit",function(){
		var num=0;
		$("input:checked").siblings(".pro_sum").each(function(){num-= -$(this).html()});
	    $(".allmoney span").html(num);			
	})
})