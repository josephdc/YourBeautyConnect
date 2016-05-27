(function() {
  angular.module('ybcApp')
      .controller("UserShowController", UserShowController)
      .controller("UserEditController", UserEditController);

      UserShowController.$inject = ['UserResource', '$stateParams', "authService"];
      UserEditController.$inject = ['UserResource', '$stateParams', '$state', "authService"];

    function UserShowController(UserResource, $stateParams, authService) {
      var vm = this;
      vm.user = {};
      vm.currentUser = authService.loggedInUser();
      console.log("the user is " + vm.currentUser._id)
      console.log(vm.currentUser);

      UserResource.get({id: $stateParams.id}).$promise.then(function(resp) {
        vm.user = resp.data;
        console.log("new vm.user is " + vm.currentUser._id)
        console.log(vm.user)
      });

    }

    function UserEditController(UserResource, $stateParams, $state, authService) {
      var vm = this;
      vm.user = {};
      vm.editUser = editUser;
      vm.deleteUser = deleteUser;
      vm.currentUser = authService.loggedInUser();

      UserResource.get({id: $stateParams.id}).$promise.then(function(resp) {
        console.log(resp.data)
        vm.user = resp.data;
      });

      function editUser() {
        UserResource.update({id: vm.user._id}, vm.user).$promise.then(function(updatedUser) {
          vm.user = updatedUser;
          $state.go('userShow', {id: updatedUser._id});
        });
      }

      function deleteUser() {
        UserResource.delete({id: vm.user._id}).$promise.then(function(resp) {
          console.log(resp);
          $state.go('home');
        });
      }
    }

})();
