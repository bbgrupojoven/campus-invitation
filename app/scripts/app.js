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
    'js-data',
    'angular-mandrill'
  ])
  .config(function ($routeProvider, DSFirebaseAdapterProvider, MandrillProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });

    // Set data server.
    DSFirebaseAdapterProvider.defaults.basePath = 'https://centrodeestudios.firebaseio.com/';

    // Set notification service.
    MandrillProvider.setApiKey('qfs05hqLxFmpN2Y2CRwC3Q');
  })
  .run(function(DS, DSFirebaseAdapter) {
    // Configure adapter.
    DS.registerAdapter('firebase', DSFirebaseAdapter, { default: true });

    // DS is the result of `new JSData.DS()`

    // We don't register the "User" resource
    // as a service, so it can only be used
    // via DS.<method>('user', ...)
    // The advantage here is that this code
    // is guaranteed to be executed, and you
    // only ever have to inject "DS"
    DS.defineResource('student');
  });
