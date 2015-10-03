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
    vm.loadAbout = loadAbout;

    // Load selection data.
    loadFormData();

    /**
     * Preload countries and cities information.
     */
    function loadFormData() {
      vm.countries = Locations.countries();
      vm.cities = Locations.cities();
    }

    /**
     * Save and send notifications the new student information.
     *
     * @param student
     */
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

    /**
     * Load the tab with the about information.
     */
    function loadAbout() {

    }

  });
