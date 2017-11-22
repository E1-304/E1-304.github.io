function Block() {
	//选择一个形状
	this.shape = ['S', 'Z', 'J', 'L', 'I', 'O', 'T'][~~(Math.random() * 7)]; 
	//对应形状的所有方向的个数
	this.allDirNum = block_json[this.shape].length;
	//随机一个方向
	this.direction = ~~(Math.random() * this.allDirNum);
	// 得到自己的code
	this.code = block_json[this.shape][this.direction];
	// 让方块从中间下落
	this.row = 0;
	this.col = 4;
}

// 渲染
Block.prototype.render = function() {
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			if (this.code[i][j] == 1) {
				game.setClass(this.row + i,this.col + j,this.shape)
			}
		}
	}
};

// 当碰到其他的方块时在原地创建一个一样的方块并且消除原来的
Block.prototype.addDie = function() {
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			if (this.code[i][j] != 0) {
				game.map.code[this.row + i][this.col + j] = this.shape;
			}
		}
	}
};
//向下移动
Block.prototype.down = function() {
	//判断游戏结束
	game.map.code[0].forEach(function (item) {
		if (item != 0) {
			clearInterval(game.timers);
			alert("GAME OVER");
			game.clearClass()
			$("table").css("backgroundImage","url('img/fei_img/pi2.gif')");
			$("audio").attr("src","audio/婚礼用音效-失败_爱给网_aigei_com.mp3");
			document.getElementById("video").loop = false;
			return;
		}
	})

	// 小落实遇到其他的方块或底层就停止
	if (this.check(this.row + 1, this.col)) {
		this.row++;
	} else{
		this.addDie();
		game.block = new Block();
		this.remove()
	}
};

//判断是否碰到底部或者其他的方块
Block.prototype.check = function(row, col) {
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			if (this.code[i][j] != 0 && game.map.code[row + i][col + j] != 0) {
				return false;
			}
		}
	}
	return true;
};

//按键左
Block.prototype.left = function() {
	if (this.check(this.row, this.col - 1)) {
		this.col--;
	}
};
// 按键右
Block.prototype.right = function() {
	if (this.check(this.row, this.col + 1	)) {
		this.col++;
	}
};
// 按键上变形
Block.prototype.up = function() {
	if (this.check(this.row, this.col - 1)) {
		this.rotate()
	}
};

// 按键空格快速下落
Block.prototype.goDown = function() {
	var i = ['S', 'Z', 'J', 'L', 'I', 'O', 'T'][~~(Math.random() * 7)];
	//下落时的音效
	document.getElementById(i).play();
	// 快速下落
	while (this.check(this.row + 1, this.col)) {
		this.row++;
	}
};

//变形
Block.prototype.rotate = function() {
	//存储原来的方向
	var oldDirection = this.direction; 
	this.direction++;
	if (this.direction > this.allDirNum - 1) {
		this.direction = 0;
	}
	this.code = block_json[this.shape][this.direction];

	// 当不能变形时再将原来的方块返回来
	if (!this.check(this.row, this.col)) {
		this.direction = oldDirection;
		this.code = block_json[this.shape][this.direction]
	}
};

// 消除行
Block.prototype.remove = function() {
	for (var i = 0; i < 20; i++) {
		for (var j = 0; j < 12; j++) {
			if (!game.map.code[i].includes(0)) {
				game.map.code.splice(i,1)
				game.map.code.unshift(new Array(12).fill(0))
				game.score++;
				$("h3 span").html(game.score)
				document.getElementById("clear").play()
			}
		}
	}
};