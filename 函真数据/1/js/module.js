/**
 * Created by shaw on 16-10-13.
 */
$(document).ready(function(){
    $.getJSON('module.json', function(data){
        console.log(data);
        var html = manipulateData(data);

        $('#modules').html(html);
    });

    function manipulateData(data) {
        var modules = data.modules;
        var html = '';
        for (var i = 0; i < modules.length; i++) {   //遍历modules
            var module = modules[i];
            var moduleClassName = '';
            switch (module.title) {
                case '推荐板块':
                    moduleClassName = 'recommend';
                    break;
                case '强势板块':
                    moduleClassName = 'strong';
                    break;
                case '蓄势板块':
                    moduleClassName = 'grow';
                    break;
                default:
                    break;
            }
            html += [
                '<ul class="module ', moduleClassName, '">',
                '<li class="title">',
                '<h2><i class="fa fa-th-large"></i>', module.title, '</h2>',
//                                '<span>「妖股」</span>',
                '<span class="sub-title">', module.subTitle, '</span>',
                '<a href="##" class="more">more >></a>',
                '</li>'
            ].join('');
            if (module.items){  //遍历子版块 items
                var subModules = module.items;
                html += '<li class="clearfix">';
                for (var j = 0; j < subModules.length; j++){
                    var subModule = subModules[i];
                    html += [
                        '<a href="##">',
                        '<table class="sub-module">',
                        '<caption class="sub-title"><h3>', subModule.title,'</h3></caption>'
                    ].join('');
                    if (subModule.name){
                        var names = subModule.name;
                        for (var k = 0; k < names.length; k++ ) {
                            if(k == 0) {
                                html += [
                                    '<tr>',
                                    '<td>', names[i], '</td>',
                                    '<td><i class="fa fa-eye"></i></td>',
                                    '<td><i class="fa fa-star"></i></td>',
                                    '<td><i class="fa fa-bookmark"></i></td>',
                                    '</tr>'
                                ].join('');
                            }else{
                                html += [
                                    '<tr>',
                                    '<td>', names[i], '</td>',
                                    '<td><i class="fa fa-eye"></i></td>',
                                    '<td><i class=""></i></td>',
                                    '<td><i class=""></i></td>',
                                    '</tr>'
                                ].join('');
                            }
                        }
                    }
                    html += '</table></a>';
                }
                html += '</li>';
            }//if modules
            html += '</ul>';
        }
        return html;
    }
});
