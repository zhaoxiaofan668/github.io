/**
 * Created by shaw on 16-10-13.
 */
(function(){
    $(document).ready(function(){
        $.getJSON('cash.json',function(data){
            var html = template('cash', {modules: data.modules})
            //console.log(html);
            $('#main').html(html);
            initialColor();
        });
        $('#top_bar .back').click(function(){
            history.back();
        });
    });

    function initialColor(){
        //给星星添加颜色
        $('h2 i.fa').each(function(){
            //console.log(this.className); fa fa-star
            var id = $(this).parents('ul')[0].id;
            var color = '';
            //alert(id);
            switch(id){
                case 'buyList':
                    color = 'color-red';
                    break;
                case 'sellList':
                    color = 'color-green';
                    break;
                case 'position':
                    color = 'color-brown';
                    break;
                default: break;
            }

            $(this).addClass(color);

        });
        $('.price').addClass('color-green');
        $('.date').addClass('color-red');
        $('#operate span').each(function(){
            var text = $(this).text();
            //console.log(text);
            var color = '';
            switch(text){
                case '待减':
                case '较重':
                    color = 'color-green';
                    break;
                case '一般':
                case '续持':
                    color = 'color-brown';
                    break;
                case '平仓':
                case '正常':
                case '良好':
                case '较高':
                    color = 'color-red';
                    break;
                default:
                    break;
            }
            $(this).addClass(color);
        })
    }
})();