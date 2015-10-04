'use strict';

/**
 * @ngdoc function
 * @name campusInvitationApp.service:Locations
 * @description
 * # Locations
 * Service of the campusInvitationApp
 */
angular.module('campusInvitationApp')
  .service('Locations', function ($http, $filter) {
    // Cache locations.
    var locations = {};

    /**
     * Return a list of countries.
     *
     * @returns {*[]}
     *  List countries.
     */
    this.countries = getCountries;


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

    this.isLatinAmerican = isLatinAmerican;

    /**
     * Return a json object with the continents and countries.
     *
     * @returns {*}
     */
    function getCountries() {
      return $http({
        method: 'GET',
        url: 'https://raw.githubusercontent.com/bbgrupojoven/Countries/master/countries.json',
        transformResponse: prepareCountries
      });
    }

    /**
     * Prepare the countries to the view need it.
     *
     * @param response
     * @returns {Array}
     */
    function prepareCountries(response) {
      response = angular.fromJson(response);

      // add continents and countries.
      angular.extend(locations, response);

      var countries = [];

      angular.forEach(response.countries, function(country, key) {
        this.push({
          name: country.name,
          code: key,
          continent: country.continent
        });
      }, countries);

      return countries;
    }


    function isLatinAmerican(countrySelected) {
      // Get the object.
      var country = locations.countries[countrySelected];

      return country.continent === 'SA' || country.continent === 'NA' && countrySelected !== 'US' && countrySelected !== 'CA';
    }

  });
