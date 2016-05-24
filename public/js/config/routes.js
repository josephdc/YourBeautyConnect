(function() {
  angular.module('ybcApp')
    .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home.html'
        })

        // .state('diaryList', {
        //   url:          "/diary/list",
        //   templateUrl:  "js/diaries/diary-list.html",
        //   controller:   'NewDiary',
        //   controllerAs: 'NewDiaryVm'
        // })

        .state('diaryNew', {
          url:          "/diary/new",
          templateUrl:  "js/diaries/diary-new.html",
          controller:   'newDiaryController',
          controllerAs: 'newDiaryVm'
        })

        //  .state('diaryEdit', {
        //     url:         "/diaries/new",
        //     templateUrl: "js/diaries/diary-edit.html",
        //     controller:  'EditDiary'
        //     controllerAs:
        // })

          .state("signin", {
            url:          "/signin",
            templateUrl:  "/js/auth/signin.html",
            controller:   "SignInController",
            controllerAs: "vm"
        });

    $urlRouterProvider.otherwise('/');
  }
})();
