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
    this.submit = function (student) {
      DS.create('student', student)
        .then(function(student) {
          console.log(DS);
          debugger;
        }, function(error) {
          console.log(error);
        });

    };


  });
