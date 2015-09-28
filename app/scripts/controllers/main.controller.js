'use strict';

/**
 * @ngdoc function
 * @name campusInvitationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the campusInvitationApp
 */
angular.module('campusInvitationApp')
  .controller('MainCtrl', function ($q, $scope, Registration, Locations, Mail, Mandrill) {
    var vm = this;

    vm.submit = submit;

    // Load selection data.
    loadFormData();

    function loadFormData() {
      vm.countries = Locations.countries();
      vm.cities = Locations.cities();
    }

    function submit(student) {
      console.log($scope);
      debugger;
      // Save and notify the information.
      $q.all({
        // Save the new student.
        registry: Registration.new(student),
        // Send Notification.
        notify: Mandrill.messages.send(Mail.toLearningCenter(student))
      }).then(function(response) {
        vm.status = 'success';
        debugger;
      }, function(error) {
        console.log(error);
      });
    }
  });
