(function() {
  "use strict";

  angular
    .module("ybcApp")
    .controller("ChooseController", ChooseController);

  ChooseController.$inject = ["$log", "authService", "UserResource", "$stateParams"];

  function ChooseController($log, authService, UserResource, $stateParams) {
    var vm = this;

    vm.currentUser = authService.loggedInUser();
    $log.info("ChooseController loaded!");

    UserResource.get({id: vm.currentUser._id}).$promise.then(function(resp) {
      console.log(resp.data)
      vm.user = resp.data;
      console.log(vm.user.diaryId)
    });
  }
})();
