(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name campusInvitationApp.config
   * @description
   * # campusInvitationApp.config
   *
   *  Configurarion Module of the application campus invitation application..
   */
  angular
    .module('campusInvitationApp.config', [])
    .constant('Config', (function() {
      return {
        'firebase': 'fireUrl',
        'mandrill': 'mandrillApi'
      }
    })());
})();


