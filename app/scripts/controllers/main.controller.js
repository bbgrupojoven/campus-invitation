'use strict';

/**
 * @ngdoc function
 * @name campusInvitationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the campusInvitationApp
 */
angular.module('campusInvitationApp')
  .controller('MainCtrl', function (Registration, Locations) {
    var vm = this;

    vm.submit = submit;

    // Load selection data.
    loadFormData();

    function loadFormData() {
      vm.countries = Locations.countries();
      vm.cities = Locations.cities();
    }

    function submit(student) {
      // Save the new student.
      Registration.new(student)
        .then(function(student) {
          console.log(DS);
          debugger;
        }, function(error) {
          console.log(error);
        })
    }
  });
