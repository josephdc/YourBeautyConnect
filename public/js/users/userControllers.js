(function() {
  angular.module('ybcApp')
      .controller("UserShowController", UserShowController)
      .controller("UserEditController", UserEditController);

      UserShowController.$inject = ['UserResource', '$stateParams'];
      UserEditController.$inject = ['UserResource', '$stateParams', '$state'];

    function UserShowController(UserResource, $stateParams) {
      var vm = this;
      vm.user = {};

      UserResource.get({id: $stateParams.id}).$promise.then(function(resp) {
          vm.user = resp.data;
      });
    }

    function UserEditController(UserResource, $stateParams, $state) {
      var vm = this;
      vm.user = {};
      vm.editUser = editUser;

      UserResource.get({id: $stateParams.id}).$promise.then(function(resp) {
      vm.user = resp.data;
      });
      function editUser() {
        UserResource.update({id: vm.user._id}, vm.user).$promise.then(function(updatedUser) {
          vm.user = updatedUser;
          $state.go('userEdit', {id: updatedUser._id});
        });
      }
    }

      function UserDeleteController(UserResource, $stateParams, $state) {
        var vm = this;
        vm.deleteUser = deleteUser;
        UserResource.get({id: $stateParams.id}).$promise.then(function(resp) {
        vm.user = resp.data;
        });

        function deleteUser() {
        UserResource.update({id: vm.user._id}, vm.user).$promise.then(function(updatedUser) {
          vm.user = updatedUser;
          $state.go('deleteUser', {id: updatedUser._id});
        });
      }
    }


})();