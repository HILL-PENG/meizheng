$(document).ready(function(){	


/*************************轮播banner************************************/
	var w=$(window).width();
	var a=0;
	var len=$(".banner .bd li").length;
	console.log(len)
	 $(".banner .hd li").eq(0).addClass("on");
	
	$(".banner .hd li").click(function(){
		  $(this).addClass("on").siblings().removeClass("on")
		  var l=$(this).index();
		  $(".banner .bd").stop(false,true).animate({left:-w*l+"px"},1000)
			return a=l;
		 
		 }) 
		 
		 
	for(var i=0;i<len;i++){
	$(".banner .bd li").eq(i).css({"left":w*i+"px"});	
	}	 
	
	
	function show(){
		lun=setInterval(function(){
			//a+=1;
			a=a+1;
			if(a>=len){
				a=0;
			}
			
				$(".banner .bd").stop(false,true).animate({left:-w*a+"px"},1000)
				$(".banner .hd li").eq(a).addClass("on").siblings().removeClass("on")
							
			},3000)
		
		}
		show();
    $(".banner").mouseover(function(){
		  clearInterval(lun);
		  
		  })
	  $(".banner").mouseout(function(){
		  show();
		  
		
        })
	  /************************************/
	  $('.name').focus(function() {
		  var c=$(this).val();
		  if(c=="姓名"){
			  $(this).val('');
			  }
        
         });		  
     $('.name').blur(function() {
		  var c=$(this).val();
		  if(c==""){
			  $(this).val('姓名');
			  }
        
         });		
		 
		  
	  $('.tel').focus(function() {
		  var c=$(this).val();
		  if(c=="电话"){
			  $(this).val('');
			  }
        
         });		  
     $('.tel').blur(function() {
		  var c=$(this).val();
		  if(c==""){
			  $(this).val('电话');
			  }
        
         });	
		 
	 $('.mail').focus(function() {
		  var c=$(this).val();
		  if(c=="邮箱"){
			  $(this).val('');
			  }
        
         });		  
     $('.mail').blur(function() {
		  var c=$(this).val();
		  if(c==""){
			  $(this).val('邮箱');
			  }
        
         });	
		 
	$('textarea').focus(function() {
		  var c=$(this).val();
		  if(c=="留言"){
			  $(this).val('');
			  }
        
         });		  
     $('textarea').blur(function() {
		  var c=$(this).val();
		  if(c==""){
			  $(this).val('留言');
			  }
        
         }); 


/************公司介绍图片轮播********************/
$(document).ready(function(){
			$(".box .list").css({"left":-4*461+"px"});
			function starMove(){
			  	var Index=3;
				var proLen=$(".box .list li").length;
				var liW_0=$(".box .list li").eq(0).outerWidth(true);
				$(".box .list").width(liW_0*proLen+"px")
					$(".btnBox .leftBtn").click(function(){
					Index-=1;
					if(Index<1){
						$(".box .list").animate({left:"0px"},function () {
							$(this).css('left',-3*461+'px')
						})
						return Index=3;
					}
					$(".box .list").animate({left:-Index*liW_0+"px"})
				})
				
				$(".btnBox .rightBtn").click(function(){
					Index+=1;
					if(Index>6){
						Index=3;
						$(".box .list").css({"left":-Index*liW_0+"px"}).animate({left:-(Index+1)*liW_0+"px"})
						return Index=4;
					}
					$(".box .list").animate({left:-Index*liW_0+"px"})
					
				})
				
				
		  }
		  starMove()
		  })
		  
		  
		  
		  
})