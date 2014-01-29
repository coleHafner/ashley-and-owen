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
			{label: 'Details',		sref: 'details'},
			{label: 'Rsvp',			sref: 'rsvp'},
			{label: 'Gallery',		sref: 'gallery'},
			{label: 'Our Story',	sref: 'about'}
		];

		$rootScope.goTo = function(pageId) {
			var page = $('#' + pageId);

			if(pageId == 'details') {
				$(document).scrollTop(0);
				return;
			}

			page.ScrollTo();
		}
	}]);