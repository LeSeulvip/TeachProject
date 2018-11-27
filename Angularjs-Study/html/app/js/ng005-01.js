//业务逻辑
angular.element(document).ready(function() {
  var ctrls = angular.module('controllers');
  ctrls.controller('MyCtrl01', ['$rootScope', '$scope', '$log', MyCtrl01]);

  function MyCtrl01($rootScope, $scope, $log) {
    $log.debug('in MyCtrl init.....');

    //处理scope销毁
    $scope.$on('$destroy', function() {
      $log.debug('MyCtrl01 destroy....');
    });

    //业务逻辑
    $scope.welcome = '全选反选演示';
  }
});
