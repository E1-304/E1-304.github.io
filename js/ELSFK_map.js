function Map() {
	this.code = (function () {
		var arr = [];
		for (var i = 0; i < 21; i++) {
			arr.push([])
			for (var j = 0; j < 12; j++) {
				if (i == 20) {
					arr[i].push(1)
				}else{
					arr[i].push(0)
				}
			}
		}

		return arr
	})()
}

Map.prototype.render = function() {
	for (var i = 0; i < 20; i++) {
		for (var j = 0; j < 12; j++) {
			if (this.code[i][j] != 0) {
				game.setClass(i,j,this.code[i][j])
			}
		}
	}
};
