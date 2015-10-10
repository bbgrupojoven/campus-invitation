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
    'campusInvitationApp.config',
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
    'angular-mandrill',
    'selectize'
  ])
  .config(function ($routeProvider, DSFirebaseAdapterProvider, MandrillProvider, Config) {

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
    DSFirebaseAdapterProvider.defaults.basePath = Config.firebase;

    // Set notification service.
    MandrillProvider.setApiKey(Config.mandrill);
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
