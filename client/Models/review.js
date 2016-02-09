var m = require('mithril');

var Review = module.exports;

Review.fetch = function(platform, title){
	var platform = platform.replace(/ /g, "+");
    var title = title.replace(/ /g, "+");
    console.log('title:', title, 'Platform:', platform);
    if(!title){
    	var errorMess = document.createElement('h2');
    	errorMess.textContent ="You must enter a title";
    	$('.review').append(errorMess);
    }
    if(platform === ""){
    	var url = 'https://ahmedakhan-game-review-information-v1.p.mashape.com/api/v1/information?game_name=' + title
    }
    else if(platform){
    	var url = 'https://ahmedakhan-game-review-information-v1.p.mashape.com/api/v1/information?console='+ platform +'&game_name=' +title
    }

	return m.request({method: 'GET', url: "https://ahmedakhan-game-review-information-v1.p.mashape.com/api/v1/information?console=ps3&game_name=borderlands"});

}


