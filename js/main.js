
   
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
}
