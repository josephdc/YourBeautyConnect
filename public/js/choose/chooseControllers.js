(function() {
  "use strict";

  angular
    .module("ybcApp")
    .controller("ChooseController", ChooseController);

  ChooseController.$inject = ["$log", "authService"];

  function ChooseController($log, authService) {
    var vm = this;

    vm.currentUser = authService.loggedInUser();

    $log.info("ChooseController loaded!");
  }
})();
