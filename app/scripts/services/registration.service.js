'use strict';

/**
 * @ngdoc function
 * @name campusInvitationApp.service:Registration
 * @description
 * # Registration
 * Service of the campusInvitationApp
 */
angular.module('campusInvitationApp')
  .service('Registration', function (DS) {
    /**
     * Save student profile.
     *
     * @param student
     *  The student image
     */
    this.new = function (student) {
      return DS.create('student', student);
    };

  });
