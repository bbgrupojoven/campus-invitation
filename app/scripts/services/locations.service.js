'use strict';

/**
 * @ngdoc function
 * @name campusInvitationApp.service:Locations
 * @description
 * # Locations
 * Service of the campusInvitationApp
 */
angular.module('campusInvitationApp')
  .service('Locations', function () {
    /**
     * Return a list of countries
     *
     * @returns {*[]}
     *  List countries.
     */
    this.countries = function () {
      return [
        {
          name: 'Venezuela',
          code: 'VE'
        },
        {
          name: 'Bolivia',
          code: 'BO'
        }
      ];
    };

    /**
     * Return a list of cities by specific country.
     *
     * @param country
     *  A country
     *
     * @returns {*[]}
     *  List of citites.
     */
    this.cities = function (country) {
      return [
        {
          id: 1,
          name: 'Caracas',
          country: 'VE'
        },
        {
          id: 2,
          name: 'Valencia',
          country: 'VE'
        },
        {
          id: 3,
          name: 'La Paz',
          country: 'BO'
        },
        {
          id: 4,
          name: 'Sucre',
          country: 'BO'
        }
      ];
    };

  });
