jido
  .controller('signinController', function ($scope, $state) {
    $scope.login = function (user) {
      console.log(user);
      $state.go('menu');
    }
})
