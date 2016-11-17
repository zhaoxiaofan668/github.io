$(function () {

    var inData=[];
    var outData=[];
    var Temp=getTemplateByURL('../../templates/trademoli-template.html');
    //买入数据存储
    $("#btn1").click(function () {
        var id=$("#form1 input[name='id']").val();
        var price=$("#form1 input[name='price']").val();
        var num=$("#form1 input[name='num']").val();
        var total=price*num;

        var obj={
            "id":id,
            "price":price,
            "num":num,
            "total":total
        };

        if(localStorage.getItem("buy")){
            var localData=localStorage.getItem("buy");
            inData=JSON.parse(localData);
        }
        inData.push(obj);
        var buy=JSON.stringify(inData);
        localStorage.setItem("buy",buy);
        layer.msg('买入成功');
    });
    //卖出数据存储
    $("#btn2").click(function () {
        var id=$("#form2 input[name='id']").val();
        var price=$("#form2 input[name='price']").val();
        var num=$("#form2 input[name='num']").val();
        var total=price*num;

        var obj={
            "id":id,
            "price":price,
            "num":num,
            "total":total
        };

        if(localStorage.getItem("sale")){
            var localData=localStorage.getItem("sale");
            outData=JSON.parse(localData);
        }
        outData.push(obj);
        var sale=JSON.stringify(outData);
        localStorage.setItem("sale",sale);
        layer.msg('卖出成功');
    });

    //表单验证
    $('#form1,#form2').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            id: {
                message: '股票代码验证失败',
                validators: {
                    notEmpty: {
                        message: '股票代码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 6,
                        message: '股票代码必须为6位'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9]+$/,
                        message: '股票代码只能包含大写、小写、数字'
                    }
                }
            },
            price: {
                validators: {
                    notEmpty: {
                        message: '价格不能为空'
                    },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: '价格只能为数字'
                    }
                }
            },
            num: {
                validators: {
                    notEmpty: {
                        message: '数量不能为空'
                    },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: '数量只能为数字'
                    }
                }
            }
        }
    });


// json获取持仓数据
        $.getJSON('../../json/moni.json',function (data) {
            var html=template('data',{list:data.items});
            $('.div-tab4').html(html);
        });

    //撤单页面渲染

    //获得买入数据
    var buyData=localStorage.getItem("buy");
    buyData=JSON.parse(buyData);


    //渲染数据到页面
    if(buyData&&buyData.length>0){
        $('#tab3-1 table tbody').html(template.compile(Temp)({list:buyData}));
    }else {
        $('#tab3-1 table tbody').html('暂无数据');
    }

    //获得卖出数据
    var saleData=localStorage.getItem("sale");
    saleData=JSON.parse(saleData);

    //渲染数据到页面
    if(saleData&&saleData.length>0){
        $('#tab3-2 table tbody').html(template.compile(Temp)({list:saleData}));
    }else {
        $('#tab3-2 table tbody').html('暂无数据');
    }

    //撤单操作
    $("#tab3-1 table tbody").on('click','.del',function () {
        $(this).parent().remove();
        var id=$(this).prev().prev().prev().text();
        data=buyData.filter(function (item) {
            return !(item.id==id);
        });
        var buy=JSON.stringify(data);
        localStorage.setItem("buy",buy);
        layer.msg('删除成功');

    })

    $("#tab3-2 table tbody").on('click','.del',function () {
        $(this).parent().remove();
        var id=$(this).prev().prev().prev().text();
        data=buyData.filter(function (item) {
            return !(item.id==id);
        });
        var sale=JSON.stringify(data);
        localStorage.setItem("sale",sale);
        layer.msg('删除成功');

    })
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