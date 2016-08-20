jido.controller('reportsController', function ($scope) {
  $scope.username = 'Mike';
  var getDate = new Date('Jan 1,2016')+'';
  var splittedGetDate = getDate.split(' ');
  var selectedToDate = splittedGetDate.splice(1,3);
  $scope.toDate = selectedToDate.join(' ');
  var getFromDate = new Date('Jan 31,2016')+'';
  var splittedgetFromDate = getFromDate.split(' ');
  var selectedFromDate = splittedgetFromDate.splice(1,3);
  $scope.fromDate = selectedFromDate.join(' ');
})
