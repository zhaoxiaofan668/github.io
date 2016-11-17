/**
 * Created by mac on 16/10/12.
 */
(function(){
    var allData = data;
    initPage();
    search();
    $('#fa-search').click(function(){
        $('#search_yc').toggleClass('header_search');
        if($('#search_yc').hasClass('header_search'))
        {
            $('#table').css('margin-top',0);
        }
        else{
            $('#table').css('margin-top',50+'px');
        }
    });
    $('.table_menu').on('click','li',function(){
        $(this).children().toggleClass('active');
        $('.table_box ul').eq($('.table_menu li').index(this)).toggleClass('active').siblings().removeClass('active');
    });
    //点击搜索与之匹配的礼物插入模板中
    $('#search_yc .fa-search').click(function(){
        search();
    });
    function search() {
        var inpVal=$('#search_yc input').val();
        var arr=[];
        for(var i=0;i<allData.presentSearch.length;i++)
        {
            if(allData.presentSearch[i].Title.indexOf(inpVal)>-1)
            {
                arr.push(allData.presentSearch[i])
            }
        }
        temp(arr);
    }       
    ////模板与数据封装的函数
    function temp(data){
        $.get('../template/temp.html',function(html){
            var  listtemp = html;
            var obj={list:data};
            $('#recommend_main ul').html(template.compile(listtemp)({list:data}));
        });
    }
    //当目的页面跳转到此页面的时候显示的内容
    function getParameter(name){
        var match=new RegExp('[?&]'+name+'=([^&]*)').exec(location.search);
        return match&&decodeURIComponent(match[1]);
    }
    getTemp();
    function getTemp(){
        var aValue=getParameter('aValue');
        var aAge=getParameter('aAge');
        var mudi=getParameter('mudi');
        var arrAll=[];
        for(var i=0;i<allData.presentSearch.length;i++)
        {
            if((allData.presentSearch[i].WhoSend.indexOf(aValue)>-1)&&(allData.presentSearch[i].Age.indexOf(aAge)>-1)&&(allData.presentSearch[i].WhySend.indexOf(mudi)>-1))
            {
                arrAll.push(allData.presentSearch[i])
            }
        }
        if(arrAll.length>=1)
        {
            temp(arrAll);
        }
        else if(arrAll.length==0){
            //alert('你来晚了,没货了')
        }
    }
    $('#header .fa-backward').click(function(){
        window.history.back();
    });
    //对选型卡里面的内容进行排序

    //获取到需要排序的数据,放在数组中根据数据的数进行排序
    //综合排序
    $('.zonghe a').eq(0).click(function(){
        temp(allData.presentSearch);
    });
    //价钱从低到高
    $('.zonghe a').eq(2).click(function(){
           var  priceArr1=allData.presentSearch.sort(function(a,b){
                return a.Price- b.Price;
            });
            temp(priceArr1);
    });
    //销量从高到低
    $('.zonghe a').eq(3).click(function(){
        var priceArr2=allData.presentSearch.sort(function(a,b){
            return b.Price- a.Price;
        });
        temp(priceArr2);
    });
    //礼物分类
    $('.liwu').on('click','a',function(){
        var liValue=$(this).html();
        getliwusearch(liValue);
        return false;
    });
    //查找的模板
    function getliwusearch(liValue){
        var liarr=[];
        for(var i=0;i<allData.presentSearch.length;i++)
        {
            if(allData.presentSearch[i].GiftTopic.indexOf(liValue)>-1)
            {
                liarr.push(allData.presentSearch[i])
            }
        }
        temp(liarr);
    }
    $('#recommend_main').on('click','span',function(){
        var num=$(this).siblings().last().html();
        var thisP = $(this).parents('p');
        thisP.toggleClass('active');
        function FalseOrTrue(arrId) {
            arr = allData.presentSearch.filter(function (item) {
                return arrId == item.Id.toString();
            });
            return arr;
        }
        if(thisP.hasClass('active'))
        {
            console.log(thisP.attr('id'));
            $(this).siblings().last().html(parseInt(num)+1);
            var arr = FalseOrTrue(thisP.attr('id'));
            arr[0].IsEnjoy = true;
            console.log(allData.presentSearch);
        }
        else{
            $(this).siblings().last().html(parseInt(num)-1);
            var arr = FalseOrTrue(thisP.attr('id'));
            arr[0].IsEnjoy = false;
            console.log(allData.presentSearch);
        }
    });
    
    
    function initPage(){
        temp(allData.presentSearch);
    }
    
    
    
    
})();
