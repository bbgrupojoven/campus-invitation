'use strict';

/**
 * @ngdoc function
 * @name campusInvitationApp.directive:tabsController
 * @description
 * # tabsController
 * Directive to change between
 */
angular.module('campusInvitationApp')
  .directive('tabsController', tabsController);

// usage is <tabsset tags-controller> </tabset>

function tabsController() {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs, controller) {
      var tabs = elem.find('.tab-content').scope().tabs;

      // Add tabs to the controller scope.
      scope.vm.tabsController = {
        tabs: tabs,
        activate: activate
      };

    }
  };
}

/**
 * Activate a tab.
 *
 * @param tab
 */
function activate(tab) {
  this.tabs[tab].active = true;
}
