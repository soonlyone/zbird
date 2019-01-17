$(function() {
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

	var id = location.search.split("=")[1];
	$.get("http://47.104.244.134:8080/goodsbyid.do", {
		id: id
	}, function(data) {
		
	var str=`<div class="data_left">
		<div class="data_img">
			<img src="${data.picurl}"/>
		</div>       			
	</div>
	<div class="data_right">
	    <em class="go_up">返回上页</em>
		<div class="data_info">
			${data.info}
		</div>
		<div class="data_name">
			${data.name}
		</div>
		<div class="data_date">
		 <span>日期</span>${data.pubdate}
		</div>
		<div class="data_price">
			<span>单价:</span>${data.price}
		</div>
		<input type="button" class="in_cart" name="${data.id}"  value="加入购物车" />
	</div>`
	
	$("#pro_data").html(str);
	})
	
	$("#pro_data").on("click","em",function(){
		history.back();
	})
	$("#pro_data").on("click",".in_cart",function(){
		var x=$(this).attr("name");	
		console.log("aa");
		if(toke){
		$.get("http://47.104.244.134:8080/cartsave.do",{"gid":x,"token":toke},function(data){location.assign("cart.html")});		
	        location.assign("cart.html");
		}else{
	    	location.assign("logoin.html");
	    }
	})
})