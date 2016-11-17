/**
 * Created by YangZi on 2016/10/14.
 */
$(function(){
    load();
    //µÇÂ¼ÑéÖ¤
    function load(){
        $('#login').click(function(){
            var email = $("form input[name='email']").val();
            var password = $("form input[name='password']").val();
            var localUser = localStorage.getItem('users');
            localUser = JSON.parse(localUser);
            localUser.forEach(function(item){
                if((email == item.email || email == item.phone) && (password == item.password)){
                    var thisUser = {
                        "email": item.email,
                        "phone": item.phone,
                        "name": "name",
                        "sex": "girl",
                        "address": "address",
                        "personal": "listen to self"
                    };
                    localStorage.setItem('currentUser', JSON.stringify(thisUser));
                    window.location = '../user_data.html';
                }
                else if((email == item.email || email == item.phone) && (password != item.password)){
                    alert("Password error");
                }
            });
        });
    }
});