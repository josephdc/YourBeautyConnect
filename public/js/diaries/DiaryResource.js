(function() {
  angular.module('ybcApp')
    .factory("DiaryResource", DiaryResource);

  DiaryResource.$inject = ['$resource'];

  function DiaryResource($resource) {
    return $resource(
      "/api/diaries/:id",
      {id: '@id'}, {
        'update': { method: 'PUT'}
      }
    );
  }
})();
