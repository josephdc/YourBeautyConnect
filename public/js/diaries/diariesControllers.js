(function() {
  angular.module('ybcApp')
       .controller("DiaryShowController", DiaryShowController)
       .controller("NewDiaryController", NewDiaryController)
       .controller("DiaryEditController", DiaryEditController)

       DiaryShowController.$inject = ['DiaryResource', '$stateParams'];
       NewDiaryController.$inject = ['DiaryResource', '$state'];
       DiaryEditController.$inject = ['DiaryResource', '$stateParams', '$state'];

    function DiaryShowController(DiaryResource, $stateParams) {
      var vm = this;
      vm.diary = {};
      console.log($stateParams.id)
      DiaryResource.get({id: $stateParams.id}).$promise.then(function(resp) {
          // console.log(jsonDiary)
          console.log(resp, "the response in d contlr")
          vm.diary = resp;
      });
    }

    function NewDiaryController(DiaryResource, $state) {
      var vm = this;
      vm.diary = {};
      vm.addDiary = addDiary;

      function addDiary() {
        console.log(vm.newDiary)
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
        console.log('clicked')
        DiaryResource.update({id: vm.diary._id}, vm.diary).$promise.then(function(updatedDiary) {
          vm.diary = updatedDiary;
          $state.go('diaryShow', {id: updatedDiary._id});
        });
      }
    }

})();
