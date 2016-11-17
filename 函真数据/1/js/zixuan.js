(function(){
	/**
	 * Created by shaw on 16-10-13.
	 */
	$(document).ready(function(){
		//获取买多信号的数据，并显示
		var datas = getData();
		if (datas){
			var html = template('zixuan', {modules: datas.modules});
			//console.log(html);
			$('#main').html(html);
			initialColor();
		}
		else{
			$('#main').html('<h1>暂无数据<h1>');
		}
	});
//获取本地存储的数据，这此数据由用户添加自选而生成
	function getData(){
		var datas = {
			"title": "自选",
			"modules": [{
				"title": "自选一",
				"id": 1,
				"items": []
			},{
				"title": "自选二",
				"id": 2,
				"items": []
			},{
				"title": "自选三",
				"id": 3,
				"items": []
			},{
				"title": "自选四",
				"id": 4,
				"items": []   //随机生成
			}]
		};
		try{

			var storaged = {            //获取数据
				ids:	localStorage.getItem('ids').split(';'),
				names:	localStorage.getItem('names').split(';'),
				points:	localStorage.getItem('points').split(';'),
				prices:	localStorage.getItem('prices').split(';')
			};
			var rawdatas = [];              //处理数据

			var operate = [
				["跌", "熊空", "操作"],
				["盘", "牛空", "操作"],
				["涨", "牛多", "操作"]
			];
			for (var i = 0; i < storaged.ids.length; i++){
				var n = Math.floor(Math.random() * 3);  //[1, 3]
				var item = {
					id:         storaged.ids[i],
					name:       storaged.names[i],
					point:      storaged.points[i],
					price:      storaged.prices[i],
					operate:    operate[n]
				};
				rawdatas.push(item);
			}
			rawdatas.forEach(function(item, index){
				var id = parseInt(item.id);
				if (!(id > 4)){
					datas.modules[id - 1].items.push(item);
				}
			});
		}catch(ex){
			//如果没有获取到本地数据，就可能会出错
		}
		//为空的自选项添加暂无数据
		for (var i = 0; i < datas.modules.length; i++){
			if (datas.modules[i].items.length < 1){
				datas.modules[i].items.push({name: "暂无数据"});
			}
		}
		return datas;
	}
	function initialColor(){
		//给星星添加颜色
		$('h2 i.fa').each(function(){
			//console.log(this.className);
			var id = $(this).parents('ul')[0].id;
			//console.log(id);
			var starColorClass = '';
			//console.log(id); //one, two, three, four
			switch(id){
				case '1':
					starColorClass = 'color-red';
					break;
				case '2':
					starColorClass = 'color-green';
					break;
				case '3':
					starColorClass = 'color-brown';
					break;
				default: break;
			}
			$(this).addClass(starColorClass);

		});
		$('.price').each(function(){
			var text = $(this).parent().next().find('span:first-child').text();
			console.log(text);
			var color = '';
			switch (text){
				case "跌":
					color = 'color-green';
					break;
				case "盘":
					color = 'color-brown';
					break;
				case "涨":
					color = 'color-red';
				default: break;
			}
			$(this).addClass(color);
		});
		$('#operate span').each(function(){
			var text = $(this).text();
			//console.log(text);
			var color = '';
			switch(text){
				case '跌':
				case '熊空':
					color = 'color-green';
					break;
				case '盘':
				case '牛空':
					color = 'color-brown';
					break;
				case '涨':
				case '牛多':
					color = 'color-red';
					break;
				default:
					break;
			}
			$(this).addClass(color);
		})
	}

})();