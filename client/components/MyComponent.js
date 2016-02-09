var m = require('mithril')
var Review = require('../models/review');

var AppWindow = module.exports;

AppWindow.controller = function (options) {
    var ctrl = this;

	ctrl.review = null

	Review.fetch().then(function(reviewData){
		ctrl.review = reviewData
	})
}

AppWindow.view = function (ctrl, options) {
  return m('.my-component', [
    m('h5', options.title)
    m('h2', ctrl.review.result)
  ])
}
