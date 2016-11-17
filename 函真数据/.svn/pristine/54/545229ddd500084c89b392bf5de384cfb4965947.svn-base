/**
 * Created by YangZi on 2016/10/14.
 */
$(function() {
    register();

    //注册信息
    function register(){
        var localUser = [];
        $('#register').click(function(){
            var emali = $("form input[name='email']").val();
            var password = $("form input[name='password']").val();
            var phone = $("form input[name='phone']").val();
            var key = $("form input[name='key']").val();
            var objRegister = {
                "email": emali,
                "password": password,
                "phone": phone,
                "key": key,
                "name" : ''
            };
            //存储用户信息并添加当前用户信息
            if(localStorage.getItem('users')){
                localUser = JSON.parse(localStorage.getItem('users'));
            }
            localUser.push(objRegister);
            localStorage.setItem('users',JSON.stringify(localUser));
            alert('success');
            window.location = 'user-login.html';
        })
    }

});