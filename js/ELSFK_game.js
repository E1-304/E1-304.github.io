function Game() {
	this.block = new Block()
	this.map = new Map()
	this.score = 0;
	this.init()
	this.bindEvent()
}

//创建舞台
Game.prototype.init = function() {
	this.dom = $("<table></table>");
	for (var i = 0; i < 20; i++) {
		var $tr = $("<tr></tr>").appendTo(this.dom);
		for (var j = 0; j < 12; j++) {
			$("<td></td>").appendTo($tr);
		}
	}
	this.dom.appendTo($(".tables"));
};

// 添加类名
Game.prototype.setClass = function(row, col, classname) {
	$("table tr").eq(row).children().eq(col).addClass(classname);
};

//清除类名
Game.prototype.clearClass = function() {
	for (var i = 0; i < 20; i++) {
		for (var j = 0; j < 12; j++) {
			$("table tr").eq(i).children().eq(j).attr("class","");
		}
	}
};

Game.prototype.bindEvent = function() {
	var self = this;
	$(document).keyup(function (event) {
		var e = event || window.event;
		if (e.keyCode == 37) {
			self.block.left()
		} else if (e.keyCode == 38) {
			self.block.up()
		} else if (e.keyCode == 39) {
			self.block.right()
		} else if (e.keyCode == 32) {
			self.block.goDown()
		}
	})

	$(".little_box_fei .leftBtn").click(function () {
		self.start()
	})
};
//开始
Game.prototype.start = function() {
	var self = this;
	self.f = 0;
	this.timers = setInterval(function () {
		self.f++;
		self.clearClass()
		self.map.render()
		self.block.render()
		self.f % 30 == 0 && self.block.down()
	},20)
};