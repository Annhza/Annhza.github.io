  //输入框
	/* var name=prompt("请输入您的姓名");
     var name01;
     name01=""+name+"小主,欢迎您光临此网站,小站蓬荜生辉哦!!!";
     alert(name01);*/
  
	//轮播图
	var index=0;
	function ChangeImg() {
	    index++;
	    var a=document.getElementsByClassName("img-slide");
	    if(index>=a.length) index=0;
	    for(var i=0;i<a.length;i++){
	        a[i].style.display='none';
	    }
	    a[index].style.display='block';
	}
	setInterval(ChangeImg,2000);
	//歌曲播放
     function play(){
				var v=document.getElementById("vid");
				v.play();
			}
			function pause(){
				var v=document.getElementById("vid");
				v.pause();
			}
	//导航栏搜索框
	$(function(){
		(function(){
			const $search=$("#nav .n_search");
			const $input=$("#nav .n_search .n_s_input input");
			const $hotwords=$("#nav .n_search .n_s_input .n_s_hotwords");
			const $sreach_hide=$("#nav .n_search .n_s_input .n_s_hide");
			
			$input.focus(function(){
				$search.addClass("focus");
				$search_hide.fadeIn();
				$shotwords.fadeOut();
			}).blur(function(){
				$search.removeClass("focus");
				$search_hide.fadeOut();
				$shotwords.fadeIn();
			});
			
		})();
	});
	
