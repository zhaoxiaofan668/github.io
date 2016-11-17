/**
 * Created by shaw on 2016/10/16.
 */
(function(){
	$(document).ready(function(){
		//获取买多信号的数据，并显示
		$.getJSON('shares.json', function(data){
			var html = template('zixuan', {items: data.items});
			//console.log(html);
			$('#tab1').html(html);
			initialColor();
			//往localStorage中存储用户要添加的数据，自选页面会获取和使用存储的数据
			$('#operate>span').on('click', function(){
				var $span = $(this).find('.item');
				var storaged={};
				if ($span.text() == '加自选'){
					var $li = $(this).parents('li');
					var item = {
						id: 	$li[0].id,
						name: 	$li.find('.name').text().trim(),
						point:	$li.find('.point').text(),
						price:	$li.find('.price').text()
						
					};
					////往localStroage中添加数据
					try{
						//如果获取不到本地存储的数据，那么localStorage.getItem()返回null,
						//null调用.split()会抛出错误
						storaged = {
							ids:	localStorage.getItem('ids').split(';'),
							names:	localStorage.getItem('names').split(';'),
							points:	localStorage.getItem('points').split(';'),
							prices:	localStorage.getItem('prices').split(';')
							
						};
						storaged.ids.push(item.id);
						storaged.names.push(item.name);
						storaged.points.push(item.point);
						storaged.prices.push(item.price);
						
						localStorage.setItem('ids', storaged.ids.join(';'));
						localStorage.setItem('names', storaged.names.join(';'));
						localStorage.setItem('points', storaged.points.join(';'));
						localStorage.setItem('prices', storaged.prices.join(';'));
						
					}catch (ex){
						//第一次设置数据
						localStorage.setItem('names', item.name);
						localStorage.setItem('ids', item.id);
						localStorage.setItem('points', item.point);
						localStorage.setItem('prices', item.price);
						
					}
					$(this).addClass('added');
					$span.text('已添加');
				}else {
					var $li = $(this).parents('li');
					var item = {
						id: 	$li[0].id,
						name: 	$li.find('.name').text().trim(),
						point:	$li.find('.point').text(),
						price:	$li.find('.price').text()
						
					};
					storaged = {
						ids:	localStorage.getItem('ids').split(';'),
						names:	localStorage.getItem('names').split(';'),
						points:	localStorage.getItem('points').split(';'),
						prices:	localStorage.getItem('prices').split(';')
						
					};
					storaged.ids=storaged.ids.filter(function (items) {
						return !(items==item.id);
					});
					storaged.names=storaged.names.filter(function (items) {
						return !(items==item.name);
					});
					storaged.points=storaged.points.filter(function (items) {
						return !(items==item.point);
					});
					storaged.prices=storaged.prices.filter(function (items) {
						return !(items==item.price);
					});
					localStorage.setItem('ids', storaged.ids.join(';'));
					localStorage.setItem('names', storaged.names.join(';'));
					localStorage.setItem('points', storaged.points.join(';'));
					localStorage.setItem('prices', storaged.prices.join(';'));
					$(this).removeClass('added');
					$span.text('加自选');
				}
//                else if($span.text() == "已添加"){
//                    $span.text('加自选');
//                }
			})
		});

	});
	function initialColor(){
		$('#tab1 ul li.row').each(function(){
			var id = parseInt(this.id);
			var color = '';
			switch(id){
				case 1:
					color = 'color-red';
					break;
				case 2:
					color = 'color-green';
					break;
				case 3:
					color = 'color-brown';
					break;
				default: break;
			}
			$(this).find('.price').addClass(color);
		});
		$('#operate .item').each(function(){
			if ($(this).text() == "已添加"){
				$(this).parent('span').addClass('added')
			}
		});
	}
})();