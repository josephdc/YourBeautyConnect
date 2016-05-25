(function() {
  angular.module('ybcApp')
//     .controller("ShowListController", ShowListController)
       .controller("DiaryShowController", DiaryShowController)
       .controller("NewDiaryController", NewDiaryController)
       // .controller("DiaryEditController", DiaryEditController);

//     ShowListController.$inject = ['ShowResource'];
       DiaryShowController.$inject = ['DiaryResource', '$stateParams'];
       NewDiaryController.$inject = ['DiaryResource', '$state'];
       // DiaryEditController.$inject = ['DiaryResource', '$stateParams', '$state'];

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

    function DiaryShowController(DiaryResource, $stateParams) {
      var vm = this;
      vm.diary = {};

      DiaryResource.get({id: $stateParams.id}).$promise.then(function(jsonDiary) {
          vm.diary = jsonDiary;
      });
    }

    function NewDiaryController(DiaryResource, $state) {
      var vm = this;
      vm.newDiary = {};
      vm.addDiary = addDiary;

      function addDiary() {
        DiaryResource.save(vm.newDiary).$promise.then(function(jsonDiary) {
          vm.newDiary = {};
          $state.go('diaryShow', {id: jsonDiary._id});
        });
      }
    }

    // function DiaryEditController(DiaryResource, $stateParams, $state) {
    //   var vm = this;
    //   vm.show = {};
    //   vm.editDiary = editDiary;

    //   DiaryResource.get({id: $stateParams.id}).$promise.then(function(jsonDiary) {
    //       vm.diary = jsonDiary;
    //   });

    //   function editDiary() {
    //     DiaryResource.update({id: vm.diary._id}, vm.diary).$promise.then(function(updatedDiary) {
    //       vm.diary = updatedDiary;
    //       $state.go('editDiary', {id: updatedDiary._id});
    //     });
    //   }
    // }

})();
