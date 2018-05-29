var sapwithappveyor_app;
(
	function () {
		'use strict';
		sapwithappveyor_app = angular.module('sapwithappveyor_app', ['ui.router']);
	}
)();
sapwithappveyor_app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', '$compileProvider',
	function ($locationProvider, $stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $compileProvider) {

		//console.log('Appt.Main is now running')
		if (window.history && window.history.pushState) {
			$locationProvider.html5Mode({
				enabled: true,
				requireBase: true
			}).hashPrefix('!');
		}

		$urlMatcherFactoryProvider.strictMode(false);
		$compileProvider.debugInfoEnabled(false);

		$stateProvider
			.state('dashboard', {
				url: '/dashboard',
				templateUrl: './views/Dashboard/dashboard.html',
				controller: 'DashboardController'
			})
			.state('tenantnotfound', {
				url: '/tenantnotfound',
				templateUrl: './tenantnotfound.html',
				controller: 'TenantNotFoundController'
			});
		$urlRouterProvider.otherwise('/dashboard');
	}]);
sapwithappveyor_app.controller('DashboardController', ['$scope', '$http', function ($scope, $http) {

}]);