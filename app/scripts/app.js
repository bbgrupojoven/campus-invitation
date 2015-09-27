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
    'ngTouch',
    'ui.bootstrap.tabs',
    'template/tabs/tab.html',
    'template/tabs/tabset.html',
    'js-data'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function(DS) {
    // Check if already exist.


    // Make
    DS.registerAdapter('localforage', new DSLocalForageAdapter(), {default: true});

    // DS is the result of `new JSData.DS()`

    // We don't register the "User" resource
    // as a service, so it can only be used
    // via DS.<method>('user', ...)
    // The advantage here is that this code
    // is guaranteed to be executed, and you
    // only ever have to inject "DS"
    DS.defineResource('student');
  });
