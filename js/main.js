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
	var Jia_Anima = true;
	document.getElementById("jia").onclick = function() {
		if(Jia_Anima){
			Jia_Anima = false;
			setTimeout(function(){
				particlesJS("particles-js", {
			  "particles": {
			    "number": {
			      "value": 200,
			      "density": {
			        "enable": true,
			        "value_area": 800
			      }
			    },
			    "color": {
			      "value": "#ffffff"
			    },
			    "shape": {
			      "type": "image",
			      "stroke": {
			        "width": 3,
			        "color": "#fff"
			      },
			      "polygon": {
			        "nb_sides": 5
			      },
			      "image": {
			        "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
			        "width": 100,
			        "height": 100
			      }
			    },
			    "opacity": {
			      "value": 0.7,
			      "random": false,
			      "anim": {
			        "enable": false,
			        "speed": 1,
			        "opacity_min": 0.1,
			        "sync": false
			      }
			    },
			    "size": {
			      "value": 5,
			      "random": true,
			      "anim": {
			        "enable": false,
			        "speed": 20,
			        "size_min": 0.1,
			        "sync": false
			      }
			    },
			    "line_linked": {
			      "enable": false,
			      "distance": 50,
			      "color": "#ffffff",
			      "opacity": 0.6,
			      "width": 1
			    },
			    "move": {
			      "enable": true,
			      "speed": 5,
			      "direction": "bottom",
			      "random": true,
			      "straight": false,
			      "out_mode": "out",
			      "bounce": false,
			      "attract": {
			        "enable": true,
			        "rotateX": 300,
			        "rotateY": 1200
			      }
			    }
			  },
			  "interactivity": {
			    "detect_on": "canvas",
			    "events": {
			      "onhover": {
			        "enable": true,
			        "mode":  "bubble"
			      },
			      "onclick": {
			        "enable": true,
			        "mode": "repulse"
			      },
			      "resize": true
			    },
			    "modes": {
			      "grab": {
			        "distance": 150,
			        "line_linked": {
			          "opacity": 1
			        }
			      },
			      "bubble": {
			        "distance": 200,
			        "size": 40,
			        "duration": 2,
			        "opacity": 8,
			        "speed": 3
			      },
			      "repulse": {
			        "distance": 200,
			        "duration": 0.2
			      },
			      "push": {
			        "particles_nb": 4
			      },
			      "remove": {
			        "particles_nb": 2
			      }
			    }
			  },
			  "retina_detect": true
			});
}, 800)
			
		}
		document.getElementById("Jia_box").style.display='block';
        document.getElementById("jia").classList.remove("little_box_jia","jia_transform");
		document.getElementById("jia").classList.add("big_box_jia","jia_block");
		document.getElementById("jia_name").classList.add("footer_name_disappear");
		$("#jia_img1").animate({opacity:1},2000, function() {
        	$("#jia_img2").animate({opacity:1},500, function() {
          		$("#jia_img3").animate({opacity:1},620, function() {
          			$("#jia_img4").animate({opacity:1},500, function() {
          				$("#jia_img5").animate({opacity:1},500, function() {
          					$("#jia_img6").animate({opacity:1},500, function() {})
          				})
          			})
          		})
          	})
        });
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
		$("#jia_img1").animate({opacity:0},800, function() {
        	$("#jia_img2").animate({opacity:0},200, function() {
          		$("#jia_img3").animate({opacity:0},320, function() {
          			$("#jia_img4").animate({opacity:0},250, function() {
          				$("#jia_img5").animate({opacity:0},220, function() {
          					$("#jia_img6").animate({opacity:0},210, function() {
          						setTimeout(function(){
								document.getElementById("jia").classList.remove("big_box_jia","jia_block");
								document.getElementById("jia").classList.add("little_box_jia","jia_transform");
								// document.getElementsByClassName("onclick_before")[4].classList.remove("onclick_after");
								document.getElementById("jia_name").classList.remove("footer_name_disappear");
								document.getElementById("Jia_box").style.display='none';
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
          					})
          				})
          			})
          		})
          	})
        });
		
	}