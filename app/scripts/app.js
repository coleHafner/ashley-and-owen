'use strict';

angular.module('ashleyAndOwenApp', ['ui.router', 'ui.bootstrap'])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('index', {
				url: '/',
				controller: 'IndexCtrl',
				templateUrl: '/views/index.html'
			})
	}]);

$(function(){
	$('#site-nav').sticky({topSpacing: 0, elementClassName: 'bottom-shadow'});
});