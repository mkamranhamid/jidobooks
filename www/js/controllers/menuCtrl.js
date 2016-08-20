jido.controller('menuController', function ($scope, $state, $cordovaCamera) {
  $scope.username = 'Mike';
  $scope.cameraImage = 'http://placehold.it/300x300';
  $scope.showReports = function () {
    $state.go('reports')
  };

  function successCallback(imgBase64){

  }
  function errorCallback(ERR){

  }
  $scope.takePhoto = function () {
    var options = {
     destinationType: Camera.DestinationType.DATA_URL,
     encodingType: Camera.EncodingType.JPEG
     };
    $cordovaCamera.getPicture(options).then(function(imageData) {
      console.log('camer data ',angular.toJson(imageData))
      $scope.cameraImage = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      // error
      console.log('camer data ERR ',angular.toJson(err))
    })
  }
})
