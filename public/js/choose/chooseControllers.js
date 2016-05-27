(function() {
  "use strict";

  angular
    .module("ybcApp")
    .controller("ChooseController", ChooseController);

  ChooseController.$inject = ["$log", "authService", "UserResource"];

  function ChooseController($log, authService, UserResource) {
    var vm = this;

    vm.currentUser = authService.loggedInUser();
    $log.info("ChooseController loaded!");

    UserResource.get({id: $stateParams.id}).$promise.then(function(resp) {
      console.log(resp.data)
      vm.user = resp.data;
    });
  }
})();
