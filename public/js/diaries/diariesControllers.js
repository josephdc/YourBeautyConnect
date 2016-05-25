(function() {
  angular.module('ybcApp')
       .controller("DiaryShowController", DiaryShowController)
       .controller("NewDiaryController", NewDiaryController)
       .controller("DiaryEditController", DiaryEditController)
       // .controller("DestroyDiaryController", DestroyDiaryController);

       DiaryShowController.$inject = ['DiaryResource', '$stateParams'];
       NewDiaryController.$inject = ['DiaryResource', '$state'];
       DiaryEditController.$inject = ['DiaryResource', '$stateParams', '$state'];
       // DestroyDiaryController.$inject = ['DiaryResource', '$stateParams', '$state'];

      // function DestroyDiaryController(diaryToDelete) {
      //   DiaryResource.delete({id: diaryToDelete._id}).$promise.then(function (response) {
      //     console.log(response.message);
      //     vm.diaries = vm.diaries.filter(function(diary) {
      //       return diary != diaryToDelete;
      //     });
      //   });
      // }

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

    function DiaryEditController(DiaryResource, $stateParams, $state) {
      var vm = this;
      vm.diary = {};
      vm.editDiary = editDiary;

      DiaryResource.get({id: $stateParams.id}).$promise.then(function(jsonDiary) {
      vm.diary = jsonDiary;
      });
      function editDiary() {
        DiaryResource.update({id: vm.diary._id}, vm.diary).$promise.then(function(updatedDiary) {
          vm.diary = updatedDiary;
          $state.go('diaryEdit', {id: updatedDiary._id});
        });
      }
    }

})();
