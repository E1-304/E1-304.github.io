window.onload = function(){
	document.getElementById("jia").onmouseover = function() {
		document.getElementById("gang").classList.add("gang_transform");
		document.getElementById("chuan").classList.add("chaun_transform");
		document.getElementById("fei").classList.add("fei_transform");
		document.getElementById("yu").classList.add("yu_transform");
	}
	document.getElementById("chuan").onmouseover = function() {
		document.getElementById("jia").classList.add("jia_transform");
		document.getElementById("gang").classList.add("gang_transform");
		document.getElementById("fei").classList.add("fei_transform");
		document.getElementById("yu").classList.add("yu_transform");
	}
	document.getElementById("chuan").onmouseout = function() {
		document.getElementById("jia").classList.remove("jia_transform");
		document.getElementById("gang").classList.remove("gang_transform");
		document.getElementById("fei").classList.remove("fei_transform");
		document.getElementById("yu").classList.remove("yu_transform");
	}
	document.getElementById("jia").onmouseout = function() {
		document.getElementById("gang").classList.remove("gang_transform");
		document.getElementById("chuan").classList.remove("chaun_transform");
		document.getElementById("fei").classList.remove("fei_transform");
		document.getElementById("yu").classList.remove("yu_transform");
	}
	document.getElementById("gang").onmouseover = function() {
		document.getElementById("jia").classList.add("jia_transform");
		document.getElementById("chuan").classList.add("chaun_transform");
		document.getElementById("fei").classList.add("fei_transform");
		document.getElementById("yu").classList.add("yu_transform");
	}
	document.getElementById("gang").onmouseout = function() {
		document.getElementById("jia").classList.remove("jia_transform");
		document.getElementById("chuan").classList.remove("chaun_transform");
		document.getElementById("fei").classList.remove("fei_transform");
		document.getElementById("yu").classList.remove("yu_transform");
	}
	document.getElementById("fei").onmouseover = function() {
		document.getElementById("jia").classList.add("jia_transform");
		document.getElementById("chuan").classList.add("chaun_transform");
		document.getElementById("gang").classList.add("gang_transform");
		document.getElementById("yu").classList.add("yu_transform");
	}
	document.getElementById("fei").onmouseout = function() {
		document.getElementById("jia").classList.remove("jia_transform");
		document.getElementById("chuan").classList.remove("chaun_transform");
		document.getElementById("gang").classList.remove("gang_transform");
		document.getElementById("yu").classList.remove("yu_transform");
	}
	document.getElementById("yu").onmouseover = function() {
		document.getElementById("jia").classList.add("jia_transform");
		document.getElementById("chuan").classList.add("chaun_transform");
		document.getElementById("fei").classList.add("fei_transform");
		document.getElementById("gang").classList.add("gang_transform");
	}
	document.getElementById("yu").onmouseout = function() {
		document.getElementById("jia").classList.remove("jia_transform");
		document.getElementById("chuan").classList.remove("chaun_transform");
		document.getElementById("fei").classList.remove("fei_transform");
		document.getElementById("gang").classList.remove("gang_transform");
	}
	document.getElementById("jia").onclick = function() {
		document.getElementById("jia").classList.remove("little_box_jia","_jiatransform");
		document.getElementById("jia").classList.add("big_box_jia","jia_block");
		document.getElementsByClassName("before")[0].classList.add("after");
	}
	document.getElementById("chuan").onclick = function() {
		document.getElementById("chuan").classList.remove("little_box_chuan","chuan_transform");
		document.getElementById("chuan").classList.add("big_box_chuan","chuan_block");
		document.getElementsByClassName("before")[1].classList.add("after");
	}
	document.getElementById("gang").onclick = function() {
		document.getElementById("gang").classList.remove("little_box_gang","gang_transform");
		document.getElementById("gang").classList.add("big_box_gang","gang_block");
		document.getElementsByClassName("before")[2].classList.add("after");
	}
	document.getElementById("fei").onclick = function() {
		document.getElementById("fei").classList.remove("little_box_fei","fei_transform");
		document.getElementById("fei").classList.add("big_box_fei","fei_block");
		document.getElementsByClassName("before")[3].classList.add("after");
	}
	document.getElementById("yu").onclick = function() {
		document.getElementById("yu").classList.remove("little_box_yu","yu_transform");
		document.getElementById("yu").classList.add("big_box_yu","yu_block");
		document.getElementsByClassName("before")[4].classList.add("after");
		document.getElementsByClassName("a")[0].classList.add("b");
	}
}
