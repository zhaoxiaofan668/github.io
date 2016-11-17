/**
 * Created by shaw on 16-10-13.
 */
$(document).ready(function(){
    $.getJSON('signal.json', function(data){
        var html = template('signal', {modules: data.modules});
//            console.log(html);
        $('#main').html(html);
        initialColor();
    })
});
function initialColor(){
    //添加颜色
    $('h2 i.fa').each(function(){
        //console.log(this.className); fa fa-star
        var id = $(this).parents('ul')[0].id;
        var starColorClass = '';
        console.log(id); //more, full, empty, custom
        switch(id){
            case 'more':
                starColorClass = 'color-red';
                break;
            case 'full':
                starColorClass = 'color-green';
                break;
            case 'empty':
                starColorClass = 'color-brown';
                break;
            default: break;
        }
        $(this).addClass(starColorClass);

    });
    $('.price').addClass('color-green');
    $('.date').addClass('color-red');
    $('#operate span').each(function(){
        var text = $(this).text();
        //console.log(text);
        var color = '';
        switch(text){
            case '等待':
                color = 'color-green';
                break;
            case '准备':
                color = 'color-brown';
                break;
            case '建仓':
            case '平仓':
                color = 'color-red';
                break;
            default:
                break;
        }
        $(this).addClass(color);
    })
}