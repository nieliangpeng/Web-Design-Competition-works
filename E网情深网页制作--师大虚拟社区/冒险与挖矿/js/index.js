/*二维码隐藏*/
$(function(){
	$(".im").bind("mouseover",function(){
		$(".tel_hover").css("display","block");
	});
	$(".im").bind("mouseout",function(){
		$(".tel_hover").css("display","none");
	});
});
/*图片变大变小动画*/
$(function(){
	$w = 81;
	$h = 82;
	$w2 = $w + 20;
	$h2 = $h + 20;
	setInterval(function(){
		 $('.pic').stop().animate({height:$h2,width:$w2,left:"-10px",top:"-10px"},2000);
		 var end=true;
		 if(end==true)
		 {
		 	setTimeout(function(){
		 $('.pic').stop().animate({height:$h,width:$w,left:"0",top:"0"},2000);
	      },2000);
		 }
	},4000);
});
/*图片上下移动动画*/
$(function(){
	setInterval(function(){
		$('.pic2').stop().animate({top:"5"},2000);
		var end=true;
		if(end==true)
		{
			setTimeout(function(){
				$('.pic2').stop().animate({top:"0"},2000);
			},2000);
		}
	},4000);
});
/*图片滚动*/

window.onload=function(){
	/*获取节点*/
	var picScroll = document.getElementById("bot");
	var picScroll1 = document.getElementById("d1");
	/*每10毫秒调用一次函数*/
	var speed= 10;
	var time = setInterval("changeToLeft();",speed);
	picScroll.onmouseover=function(){
		clearInterval(time);
	}
	picScroll.onmouseout=function(){
	    time=setInterval(changeToLeft,speed); 
	}
}
function changeToLeft(){
	var picScroll = document.getElementById("bot");
	var picScroll1 = document.getElementById("d1");
	if (picScroll.scrollLeft >picScroll1.offsetWidth)
	 {
	 	picScroll.scrollLeft=0;
	 }
	 else{
	picScroll.scrollLeft+=1;
     }
}
