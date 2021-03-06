angular.element(document).ready(function() {
  var ctrls = angular.module('controllers');
  ctrls.controller('IndexCtrl', ['$scope', '$log',IndexCtrl]);

  function IndexCtrl($scope, $log) {
    $log.debug('in IndexCtrl init.....');

    //处理scope销毁
    $scope.$on('$destroy', function() {
      $log.debug('IndexCtrl destroy....');
    });
  }
});
