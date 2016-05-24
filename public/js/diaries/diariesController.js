(function() {
  angular.module('ybcApp')
//     .controller("ShowListController", ShowListController)
//     .controller("ShowShowController", ShowShowController)
       .controller("NewDiaryController", NewDiaryController)
//     .controller("ShowEditController", ShowEditController);

//     ShowListController.$inject = ['ShowResource'];
//     ShowShowController.$inject = ['ShowResource', '$stateParams'];
       NewDiaryController.$inject = ['DiaryResource', '$state'];
//     ShowEditController.$inject = ['ShowResource', '$stateParams', '$state'];

//     function ShowListController(ShowResource) {
//       var vm = this;
//       vm.shows = [];
//       vm.destroy = destroy;

//       ShowResource.query().$promise.then(function(shows) {
//         vm.shows = shows;
//       });

//       function destroy(showToDelete) {
//         ShowResource.delete({id: showToDelete._id}).$promise.then(function (response) {
//           console.log(response.message);
//           vm.shows = vm.shows.filter(function(show) {
//             return show != showToDelete;
//           });
//         });
//       }
//     }

//     function ShowShowController(ShowResource, $stateParams) {
//       var vm = this;
//       vm.show = {};

//       ShowResource.get({id: $stateParams.id}).$promise.then(function(jsonShow) {
//           vm.show = jsonShow;
//       });
//     }

    function NewDiaryController(DiaryResource, $state) {
      var vm = this;
      vm.newDiary = {};
      vm.addDiary = addDiary;

      function addDiary() {
        DiaryResource.save(vm.newDiary).$promise.then(function(jsonDiary) {
          vm.newDiary = {};
          $state.go('newDiary', {id: jsonDiary._id});
        });
      }
    }

//     function ShowEditController(ShowResource, $stateParams, $state) {
//       var vm = this;
//       vm.show = {};
//       vm.editShow = editShow;

//       ShowResource.get({id: $stateParams.id}).$promise.then(function(jsonShow) {
//           vm.show = jsonShow;
//       });

//       function editShow() {
//         ShowResource.update({id: vm.show._id}, vm.show).$promise.then(function(updatedShow) {
//           vm.show = updatedShow;
//           $state.go('showShow', {id: updatedShow._id});
//         });
//       }
//     }

})();
