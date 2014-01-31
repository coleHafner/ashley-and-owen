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
	}])

	.run(['$rootScope', function($rootScope) {
		$rootScope.navItems = [
			{label: 'Home',			sref: 'home'},
			{label: 'Details',		sref: 'details'},
			{label: 'Gallery',		sref: 'gallery'},
			{label: 'Rsvp',			sref: 'rsvp'},
			{label: 'Our Story',	sref: 'about'}
		];

		$rootScope.goTo = function(pageId, hide) {
			var page = $('#' + pageId);

			if(pageId == 'home') {
				$('html, body').animate({scrollTop:0},1000);

			}else {
				var duration = pageId == 'details' ? 1000 : 700;
				page.ScrollTo({duration: duration});
			}

			if(hide) {
				$('#navver-mobile').hide();
			}
		}
	}]);