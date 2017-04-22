document.getElementById("fei").onmouseover = function() {
		document.getElementById("jia").classList.add("jia_transform");
		document.getElementById("chuan").classList.add("chuan_transform");
		document.getElementById("gang").classList.add("gang_transform");
		document.getElementById("yu").classList.add("yu_transform");
		document.getElementById("fei_name").classList.add("footer_name_transform");
	}
	document.getElementById("fei").onmouseout = function() {
		document.getElementById("jia").classList.remove("jia_transform");
		document.getElementById("chuan").classList.remove("chuan_transform");
		document.getElementById("gang").classList.remove("gang_transform");
		document.getElementById("yu").classList.remove("yu_transform");
		document.getElementById("fei_name").classList.remove("footer_name_transform");
	}
	document.getElementById("yu").onmouseover = function() {
		document.getElementById("jia").classList.add("jia_transform");
		document.getElementById("chuan").classList.add("chuan_transform");
		document.getElementById("fei").classList.add("fei_transform");
		document.getElementById("gang").classList.add("gang_transform");
		document.getElementById("yu_name").classList.add("footer_name_transform");
	}
	document.getElementById("yu").onmouseout = function() {
		document.getElementById("jia").classList.remove("jia_transform");
		document.getElementById("chuan").classList.remove("chuan_transform");
		document.getElementById("fei").classList.remove("fei_transform");
		document.getElementById("gang").classList.remove("gang_transform");
		document.getElementById("yu_name").classList.remove("footer_name_transform");
	}
	document.getElementById("gang").onmouseover = function() {
		document.getElementById("jia").classList.add("jia_transform");
		document.getElementById("chuan").classList.add("chuan_transform");
		document.getElementById("fei").classList.add("fei_transform");
		document.getElementById("yu").classList.add("yu_transform");
		document.getElementById("gang_name").classList.add("footer_name_transform");
	}
	document.getElementById("gang").onmouseout = function() {
		document.getElementById("jia").classList.remove("jia_transform");
		document.getElementById("chuan").classList.remove("chuan_transform");
		document.getElementById("fei").classList.remove("fei_transform");
		document.getElementById("yu").classList.remove("yu_transform");
		document.getElementById("gang_name").classList.remove("footer_name_transform");
	}
	document.getElementById("chuan").onmouseover = function() {
		document.getElementById("jia").classList.add("jia_transform");
		document.getElementById("gang").classList.add("gang_transform");
		document.getElementById("fei").classList.add("fei_transform");
		document.getElementById("yu").classList.add("yu_transform");
		document.getElementById("chuan_name").classList.add("footer_name_transform");
	}
	document.getElementById("chuan").onmouseout = function() {
		document.getElementById("jia").classList.remove("jia_transform");
		document.getElementById("gang").classList.remove("gang_transform");
		document.getElementById("fei").classList.remove("fei_transform");
		document.getElementById("yu").classList.remove("yu_transform");
		document.getElementById("chuan_name").classList.remove("footer_name_transform");
	}
	document.getElementById("jia").onmouseover = function() {
		document.getElementById("gang").classList.add("gang_transform");
		document.getElementById("chuan").classList.add("chuan_transform");
		document.getElementById("fei").classList.add("fei_transform");
		document.getElementById("yu").classList.add("yu_transform");
		document.getElementById("jia_name").classList.add("footer_name_transform");
	}
	document.getElementById("jia").onmouseout = function() {
		document.getElementById("gang").classList.remove("gang_transform");
		document.getElementById("chuan").classList.remove("chuan_transform");
		document.getElementById("fei").classList.remove("fei_transform");
		document.getElementById("yu").classList.remove("yu_transform");
		document.getElementById("jia_name").classList.remove("footer_name_transform");
	}
	// 点击之后更换类名，用于查看个人样式
	document.getElementById("fei").onclick = function() {
		document.getElementById("fei").classList.remove("little_box_fei","fei_transform");
		document.getElementById("fei").classList.add("big_box_fei","fei_block");
		document.getElementById("fei_name").classList.add("footer_name_disappear");
		// document.getElementsByClassName("onclick_before")[0].classList.add("onclick_after");
		setTimeout(function(){
			document.getElementsByClassName("personal_statement")[0].classList.remove("fallbackAnimation");
			document.getElementsByClassName("personal_statement")[0].classList.add("imgAnimation");
		},1000);
		function addNewDiv(){
			var newDiv = document.createElement("div");
			newDiv.id = "banClickTimes";
			newDiv.className = "banClickTimes";
			var first = document.body.firstChild;
			document.body.insertBefore(newDiv,first);
		}
		addNewDiv();
		setTimeout(function(){
			var first = document.body.firstChild;
			document.body.removeChild(first);
		},1500);
	}
	document.getElementById("yu").onclick = function() {
		document.getElementById("yu").classList.remove("little_box_yu","yu_transform");
		document.getElementById("yu").classList.add("big_box_yu","yu_block");
		document.getElementById("yu_name").classList.add("footer_name_disappear");
		// document.getElementsByClassName("onclick_before")[1].classList.add("onclick_after");
		setTimeout(function(){
			document.getElementsByClassName("personal_statement")[1].classList.remove("fallbackAnimation");
			document.getElementsByClassName("personal_statement")[1].classList.add("imgAnimation")
		},1000);
		function addNewDiv(){
			var newDiv = document.createElement("div");
			newDiv.id = "banClickTimes";
			newDiv.className = "banClickTimes";
			var first = document.body.firstChild;
			document.body.insertBefore(newDiv,first);
		}
		addNewDiv();
		setTimeout(function(){
			var first = document.body.firstChild;
			document.body.removeChild(first);
		},1500);		
	}
	var canvasflag = true;
	document.getElementById("gang").onclick = function() {
		document.getElementById("gang").classList.remove("little_box_gang","gang_transform");
		document.getElementById("gang").classList.add("big_box_gang","gang_block");
		document.getElementById("gang_name").classList.add("footer_name_disappear");
		// document.getElementsByClassName("onclick_before")[2].classList.add("onclick_after");
		
		setTimeout(function(){
			document.getElementsByClassName("personal_statement")[2].classList.remove("fallbackAnimation");
			document.getElementsByClassName("personal_statement")[2].classList.add("imgAnimation");
			document.getElementById("LG_box").style.display='block';
			if(canvasflag){
				bufferDraw();
				canvasflag = false;
			}else{
				textSetChangerIncrement = 0;
			}
			
		},1000);
		function addNewDiv(){
			var newDiv = document.createElement("div");
			newDiv.id = "banClickTimes";
			newDiv.className = "banClickTimes";
			var first = document.body.firstChild;
			document.body.insertBefore(newDiv,first);
		}
		addNewDiv();
		setTimeout(function(){
			var first = document.body.firstChild;
			document.body.removeChild(first);
		},1500);
	}
	document.getElementById("chuan").onclick = function() {
		document.getElementById("chuan").classList.remove("little_box_chuan","chuan_transform");
		document.getElementById("chuan").classList.add("big_box_chuan","chuan_block");
		document.getElementById("chuan_name").classList.add("footer_name_disappear");
		// document.getElementsByClassName("onclick_before")[3].classList.add("onclick_after");
		setTimeout(function(){
			document.getElementsByClassName("personal_statement")[3].classList.remove("fallbackAnimation");
			document.getElementsByClassName("personal_statement")[3].classList.add("imgAnimation");
			document.getElementById("dlc_box").style.display='block';
		},1000);
		function addNewDiv(){
			var newDiv = document.createElement("div");
			newDiv.id = "banClickTimes";
			newDiv.className = "banClickTimes";
			var first = document.body.firstChild;
			document.body.insertBefore(newDiv,first);
		}
		addNewDiv();
		setTimeout(function(){
			var first = document.body.firstChild;
			document.body.removeChild(first);
		},1500);
	}
	document.getElementById("jia").onclick = function() {
        document.getElementById("jia").classList.remove("little_box_jia","jia_transform");
		document.getElementById("jia").classList.add("big_box_jia","jia_block");
		document.getElementById("jia_name").classList.add("footer_name_disappear");
		// document.getElementsByClassName("onclick_before")[4].classList.add("onclick_after");
		setTimeout(function(){
			document.getElementsByClassName("personal_statement")[4].classList.remove("fallbackAnimation");
			document.getElementsByClassName("personal_statement")[4].classList.add("imgAnimation");
		},1000);
		function addNewDiv(){
			var newDiv = document.createElement("div");
			newDiv.id = "banClickTimes";
			newDiv.className = "banClickTimes";
			var first = document.body.firstChild;
			document.body.insertBefore(newDiv,first);
		}
		addNewDiv();
		setTimeout(function(){
			var first = document.body.firstChild;
			document.body.removeChild(first);
		},1500);		
	}
	document.getElementById("fei_return").onclick = function(e) {
		e.stopPropagation();//事件冒泡解决方法	
		setTimeout(function(){
			document.getElementById("fei").classList.remove("big_box_fei","fei_block");
			document.getElementById("fei").classList.add("little_box_fei","fei_transform");
			// document.getElementsByClassName("onclick_before")[0].classList.remove("onclick_after");
			document.getElementById("fei_name").classList.remove("footer_name_disappear");
		},700);
		document.getElementsByClassName("personal_statement")[0].classList.add("fallbackAnimation");
		function addNewDiv(){
			var newDiv = document.createElement("div");
			newDiv.id = "banClickTimes";
			newDiv.className = "banClickTimes";
			var first = document.body.firstChild;
			document.body.insertBefore(newDiv,first);
		}
		addNewDiv();
		setTimeout(function(){
			var first = document.body.firstChild;
			document.body.removeChild(first);
		},1500);
	}
	document.getElementById("yu_return").onclick = function(e) {
		e.stopPropagation();//事件冒泡解决方法		
		setTimeout(function(){
			document.getElementById("yu").classList.remove("big_box_yu","yu_block");
			document.getElementById("yu").classList.add("little_box_yu","yu_transform");
			// document.getElementsByClassName("onclick_before")[1].classList.remove("onclick_after");
			document.getElementById("yu_name").classList.remove("footer_name_disappear");
		},700);
		document.getElementsByClassName("personal_statement")[1].classList.add("fallbackAnimation");
		function addNewDiv(){
			var newDiv = document.createElement("div");
			newDiv.id = "banClickTimes";
			newDiv.className = "banClickTimes";
			var first = document.body.firstChild;
			document.body.insertBefore(newDiv,first);
		}
		addNewDiv();
		setTimeout(function(){
			var first = document.body.firstChild;
			document.body.removeChild(first);
		},1500);
	}
	document.getElementById("gang_return").onclick = function(e) {
		e.stopPropagation();//事件冒泡解决方法
		setTimeout(function(){
			document.getElementById("gang").classList.remove("big_box_gang","gang_block");
			document.getElementById("gang").classList.add("little_box_gang","gang_transform");
			// document.getElementsByClassName("onclick_before")[2].classList.remove("onclick_after");
			document.getElementById("gang_name").classList.remove("footer_name_disappear");
			document.getElementById("LG_box").style.display='none';
		},700);
		document.getElementsByClassName("personal_statement")[2].classList.add("fallbackAnimation");
		function addNewDiv(){
			var newDiv = document.createElement("div");
			newDiv.id = "banClickTimes";
			newDiv.className = "banClickTimes";
			var first = document.body.firstChild;
			document.body.insertBefore(newDiv,first);
		}
		addNewDiv();
		setTimeout(function(){
			var first = document.body.firstChild;
			document.body.removeChild(first);
		},1500);
	}
	document.getElementById("chuan_return").onclick = function(e) {
		e.stopPropagation();//事件冒泡解决方法		
		setTimeout(function(){
			document.getElementById("chuan").classList.remove("big_box_chuan","chuan_block");
			document.getElementById("chuan").classList.add("little_box_chuan","chuan_transform");
			// document.getElementsByClassName("onclick_before")[3].classList.remove("onclick_after");
			document.getElementById("chuan_name").classList.remove("footer_name_disappear");
			document.getElementById("dlc_box").style.display='none';
		},700);
		document.getElementsByClassName("personal_statement")[3].classList.add("fallbackAnimation");
		function addNewDiv(){
			var newDiv = document.createElement("div");
			newDiv.id = "banClickTimes";
			newDiv.className = "banClickTimes";
			var first = document.body.firstChild;
			document.body.insertBefore(newDiv,first);
		}
		addNewDiv();
		setTimeout(function(){
			var first = document.body.firstChild;
			document.body.removeChild(first);
		},1500);
	}
	document.getElementById("jia_return").onclick = function(e) {
		e.stopPropagation();//事件冒泡解决方法		
		setTimeout(function(){
			document.getElementById("jia").classList.remove("big_box_jia","jia_block");
			document.getElementById("jia").classList.add("little_box_jia","jia_transform");
			// document.getElementsByClassName("onclick_before")[4].classList.remove("onclick_after");
			document.getElementById("jia_name").classList.remove("footer_name_disappear");
		},700);
		document.getElementsByClassName("personal_statement")[4].classList.add("fallbackAnimation");
		function addNewDiv(){
			var newDiv = document.createElement("div");
			newDiv.id = "banClickTimes";
			newDiv.className = "banClickTimes";
			var first = document.body.firstChild;
			document.body.insertBefore(newDiv,first);
		}
		addNewDiv();
		setTimeout(function(){
			var first = document.body.firstChild;
			document.body.removeChild(first);
		},1500);
	}