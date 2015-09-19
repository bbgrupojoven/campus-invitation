'use strict';

/**
 * @ngdoc overview
 * @name campusInvitationApp
 * @description
 * # campusInvitationApp
 *
 * Main module of the application.
 */
angular
  .module('campusInvitationApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
