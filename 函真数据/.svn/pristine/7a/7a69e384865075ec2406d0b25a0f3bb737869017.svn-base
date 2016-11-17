/**
 * Created by YangZi on 2016/10/13.
 */
requirejs.config({
    baseUrl:'/',
    paths:{
        jquery:'lib/jquery/dist/jquery.min',
        bootstrap:'lib/bootstrap/dist/js/bootstrap.min',
        public1 :'js/public',
        getData :'js/getData',
        template:'lib/artTemplate/dist/template',
        amazeui :'lib/amazeui.min'
    }

});
requirejs(['jquery', 'template'], function($, template){
    $(function(){
        var data = JSON.parse(localStorage.getItem('MASSAGE'));
        var html = template('temp', {data: data});
        $('.my-list').html(html);
        //var lis = $('.my-lsit');
        //for(var i = 0; i < lis.length; i++){
        //    console.log(li[i].length);
        //    if(lis.innerText.length <= 7){
        //        li[i].removeClass('no-read');
        //    }
        //}
    });
});