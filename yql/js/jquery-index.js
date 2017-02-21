
//导航切换效果
$(".nav ul li").click(function(){
	$(this).addClass("nav_col").children("a").addClass("on");
	$(this).siblings().removeClass("nav_col").children("a").removeClass("on");
});
//设计与报价的切换
$(".main_right ul li").click(function(){
      var index=$(this).index();
      $(this).addClass("bor").siblings().removeClass("bor");
      $(".for").children().eq(index).show().siblings().hide();
    });
//设计与报价的验证
	function formValidation_name(){
		var name = document.getElementById("sj_name").value;
		if(name=="" && name.length==0){
			document.getElementById("sj_name").placeholder="请输入您的名称";
			document.getElementById("sj_name").style.borderColor="red";
			document.getElementById("sj_name").style.color="#CF0100";
		}else{
			if(name.length < 4 ||  name.length>=10){
				document.getElementById("sj_name").style.borderColor="#CF0100";
				document.getElementById("sj_name").placeholder="请正确输入您的名称";
			}else{
				document.getElementById("sj_name").style.borderColor="#535353";
				document.getElementById("sj_name").style.color="#535353";
			}
		}
	}
	function formValidation_area(){
		var area = document.getElementById("sj_area").value;
		if(area=="" && area.length==0){
			document.getElementById("sj_area").placeholder="请输入您的面积";
			document.getElementById("sj_area").style.borderColor="red";
			document.getElementById("sj_area").style.color="#CF0100";
		}else{
			if(area.length < 0 ||  area.length>=4){
				document.getElementById("sj_area").style.borderColor="#CF0100";
				document.getElementById("sj_area").placeholder="请正确输入您的面积";
			}else{
				document.getElementById("sj_area").style.borderColor="#535353";
				document.getElementById("sj_area").style.color="#535353";
			}
		}
	}
	
//banner滑动效果
$(function() {
    $(".flexslider").flexslider({
    slideshowSpeed: 4000, //展示时间间隔ms
    animationSpeed: 400, //滚动时间ms
    touch: true, //是否支持触屏滑动
    after: function() {
     var index=$(".flex-control-paging li a.flex-active").parent().index();
      var bgc=$(".slides li").eq(index).attr("bgc");
      $(".banner").css("background",bgc);
    }
  });
}); 


/*公司详情的导航切换*/
//导航切换效果
$(".company_nav ul li").click(function(){
	$(this).children("a").addClass("on");
	$(this).siblings().children("a").removeClass("on");
});

/*个性设计的效果*/
$(".personal_design").hover(function(){
     $(this).children(".personal_design_text").show();
     $(this).addClass("por");
     $(this).children(".personal_design_img").css({width:"30%"});
     $(this).siblings().removeClass("por");
     $(this).siblings().children(".personal_design_img").css({width:"100%"});
     $(this).siblings().children(".personal_design_text").hide();
});
