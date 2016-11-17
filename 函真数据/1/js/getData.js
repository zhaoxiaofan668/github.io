/**
 * New node file
 */
define(['jquery'],function(){
	
	return {
		getLeftData:function(fn){
			$.ajax({
				url: "../templates/left_data.json",
    			type: "GET",
    			success: function(res) {
    				if(fn&&fn instanceof Function){
    					fn(res)
    				}
    				console.log(res);
    			}
			})
		},
		getLeftTemp:function(fn){
				$.ajax({
				url: "../templates/ul_lefTtemplate.html",
    			type: "GET",
    			success: function(res) {
    				if(fn&&fn instanceof Function){
    					fn(res)
    				}
    				console.log(res);
    			}
			})
		}
	}
})