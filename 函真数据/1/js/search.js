/**
 * Created by Administrator on 2016/10/15.
 */
$(function () {
    $('.sub').on('click', function () {
        var text = $('#text').val();
        console.log(text)
            if (text==''){
                $(".tpm").html('请输入搜索内容');
            }else {
                $.ajax({
                    url: 'http://apis.baidu.com/apistore/stockservice/hkstock?stockid=00168&list=1', //后台webservice里的方法名称根据自己需要实现返回数据位json
                    type: "get",
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader("apikey", "80e96f7c71a9f7eb0c8e2cabf03e751d");
                    },
                    success: function (data) {
                        arr = data.retData.stockinfo;
                        var m = arr.filter(function (item) {
                            if (text == item.name) {
                                return item;
                            }
                        });
                        if(text!=null){
                            $(".tpm").html(template('html',m[0]));
                        }

                    }
                });
            }


        

    });
});