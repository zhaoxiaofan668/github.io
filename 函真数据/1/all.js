/**
 * Created by |du xu dong| on 2016/10/11.
 */
requirejs.config({
   baseUrl:'/',
    paths:{
        jquery:'lib/jquery/dist/jquery.min',
        bootstrap:'lib/bootstrap/dist/js/bootstrap.min',
        public1 :'js/public',
        getData :'js/getData',
        template:'lib/artTemplate/dist/template',
        amazeui :'lib/amazeui.min',
        home : 'js/home',
        hammer : 'lib/hammer',
        signal : 'js/signal',
        zixuan : 'js/zixuan'
    }
   
});
/**
 * Created by XXXXX on 2016/10/11.
 */
requirejs(['jquery','bootstrap','public1'],(function (a,b,public) {
// $('.header_email').popover({title:'联系我们',content:'26661@126.com',placement:'left'})
    requirejs(['home']);
	requirejs(['signal']);
}));
