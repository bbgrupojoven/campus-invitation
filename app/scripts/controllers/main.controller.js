'use strict';

/**
 * @ngdoc function
 * @name campusInvitationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the campusInvitationApp
 */
angular.module('campusInvitationApp')
  .controller('MainCtrl', function (Registration, Locations, Mail, Mandrill) {
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
        });

      // Send Notification.
      Mandrill.messages.send(Mail.toLearningCenter(student))
        .success(function(response){
          // Succes handling
          console.log(response);
          debugger;
        }).error(function(error){
          // Error handling
          console.log(error);
          debugger;
        });
    }
  });
