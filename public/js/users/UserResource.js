(function() {
  angular.module('ybcApp')
    .factory("UserResource", UserResource);

  UserResource.$inject = ['$resource'];

  function UserResource($resource) {
    return $resource(
      "/api/users/:id",
      {id: '@id'}, {
        'update': { method: 'PUT' }
      }
    );
  }
})();
