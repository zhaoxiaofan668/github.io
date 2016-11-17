/**
 * Created by wang on 2016/10/12.
 */

$(function () {
    
    //头部返回上个页面
    // $(".back").click(function () {
    //     history.back();
    // });
    //刷新页面
    $("#refresh").click(function () {
       // location.href='http://localhost:63342/1/html/indexHtml/trade.html';
        history.go(0);
    });
    //预测数据获取部分
    var temp=getTemplateByURL('../../templates/list-template.html');
    var data=getTemplateByURL('../../json/forecastData.json');
    if(data.szzs.length<=0){
        $('#tab1-1 table tbody,#tab2-1 table tbody').html('暂无数据');
    }else {
        $('#tab1-1 table tbody,#tab2-1 table tbody').html(template.compile(temp)({list:data.szzs}));
    }

    if(data.zz500.length<=0){
        $('#tab1-2 table tbody,#tab2-2 table tbody').html('暂无数据');
    }else {
        $('#tab1-2 table tbody,#tab2-2 table tbody').html(template.compile(temp)({list:data.zz500}));
    }
    if(data.cymb.length<=0){
        $('#tab1-3 table tbody,#tab2-3 table tbody').html('暂无数据');
    }else {
        $('#tab1-3 table tbody,#tab2-3 table tbody').html(template.compile(temp)({list:data.cymb}));
    }
    
    //获得买入数据
    var buyData=localStorage.getItem("buy");
    buyData=JSON.parse(buyData);
    
    //获得模板页
    var buyTemp=getTemplateByURL('../../templates/trade-template.html');
    
    //渲染数据到页面
    if(buyData&&buyData.length>0){
        $('#tab1 table tbody').html(template.compile(buyTemp)({list:buyData}));
    }else {
        $('#tab1 table tbody').html('暂无数据');
    }

    //获得卖出数据
    var outData=localStorage.getItem("sale");
    outData=JSON.parse(outData);

    //获得模板页
    var outTemp=getTemplateByURL('../../templates/trade-template.html');

    //渲染数据到页面
    if(outData&&outData.length>0){
        $('#tab2 table tbody').html(template.compile(outTemp)({list:outData}));
    }else {
        $('#tab2 table tbody').html('暂无数据');
    }

    
});







//ajax获得数据
function getTemplateByURL(url) {
    var result;
    $.ajax({
        url:url,
        type:'get',
        async:false,
        success:function (data) {
            result=data;
        }
    });
    return result;
}