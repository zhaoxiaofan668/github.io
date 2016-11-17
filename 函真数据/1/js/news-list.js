/**
 * Created by Administrator on 2016/10/12.
 */
$(function () {
    getData(templates);
});
function getData(fn){
    $.ajax({
        url: "../../json/data.json",
        type: "GET",
        success: function(res) {
            console.log('hello');
            fn(res);
            getTop();
        }
    });
    // $.getJSON('data.json',function (res) {
    //     fn(res);
    //
    // })
}
function templates() {
    var html=template('tmp1',arguments[0]);
    $('.news-list').html(html);
    $('img').lazyload({
        effect : "fadeIn"
    });

}
function getTop() {
    $('#gotop').addClass('active');
}