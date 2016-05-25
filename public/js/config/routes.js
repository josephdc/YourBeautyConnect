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

        //New User login
        .state("userShow", {
        url:            "/user/show/:id",
        templateUrl:    "js/users/user-show.html",
        controller:     "UserShowController",
        controllerAs:   "userShowVm"
        })

        .state("userEdit", {
        url:         "/user/edit/:id",
        templateUrl: "js/users/user-edit.html",
        controller:  "UserEditController",
        controllerAs: "editUserVm"
        })

        //User Diary
        .state("diaryShow", {
        url:            "/diary/show/:id",
        templateUrl:    "js/diaries/diary-show.html",
        controller:     "DiaryShowController",
        controllerAs:   "diaryShowVm"
        })

        .state("diaryNew", {
          url:          "/diary/new",
          templateUrl:  "js/diaries/diary-new.html",
          controller:   "NewDiaryController",
          controllerAs: "newDiaryVm"
        })

         .state("diaryEdit", {
            url:         "/diary/edit/:id",
            templateUrl: "js/diaries/diary-edit.html",
            controller:  "DiaryEditController",
            controllerAs: "editDiaryVm"
        })

          .state("signin", {
            url:          "/signin",
            templateUrl:  "/js/auth/signin.html",
            controller:   "SignInController",
            controllerAs: "vm"
        });

    $urlRouterProvider.otherwise('/');
  }
})();
