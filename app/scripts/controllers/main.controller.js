'use strict';

/**
 * @ngdoc function
 * @name campusInvitationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the campusInvitationApp
 */
angular.module('campusInvitationApp')
  .controller('MainCtrl', function ($q, $log, $filter, $scope, Registration, Locations, Mail, Mandrill) {
    var vm = this;

    vm.submit = submit;
    vm.requireCity = requireCity;

    // Load selection data.
    loadFormData();

    /**
     * Preload countries and cities information.
     */
    function loadFormData() {
      countries();
      vm.cities = Locations.cities();
    }

    /**
     * Save and send notifications the new student information.
     *
     * @param student
     */
    function submit(student) {
      vm.status = 'saving';

      // Save and notify the information.
      $q.all({
        // Save the new student.
        registry: Registration.new(student),
        // Send Notifications.
        notify: Mandrill.messages.send(Mail.toLearningCenter(student)),
        notifyStudent: Mandrill.messages.send(Mail.toStudent(student))
      }).then(function(response) {
        vm.status = 'success';
      }, function(error) {
        vm.status = 'error';
        console.log(error);
      }).finally(function() {
        // Set form at initial state.
        vm.formRegistration.$setPristine();

        // Clear the form.
        vm.student = {};
      });
    }


    /**
     * Load countries object.
     */
    function countries() {

      Locations.countries()
        .success(function(countries) {
          vm.countries = countries;
        })
        .error(function(err) {
          $log.error(err);
        })
    }

    /**
     * Verify if the country selected is a south american country,
     * if yes, return true otherwise return false.
     *
     * @param country
     * @returns {boolean}
     */
    function requireCity(country) {
      if (angular.isUndefined(vm.student) || angular.isUndefined(vm.student.country)) {
        return false;
      }

      return Locations.isLatinAmerican(country);
    }


  });
