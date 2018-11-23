(function() {
  //业务逻辑
  angular.element(document).ready(function() {
    var ctrls = angular.module('controllers');
    ctrls.controller('MyCtrl', ['$scope', '$log', MyCtrl]);

    function MyCtrl($scope, $log) {
      $log.debug('in MyCtrl init...');

      $scope.welcome = 'ng初始化演示';

      $scope.list = [
        { id: 1000, name: '初中' },
        { id: 1001, name: '高中' },
        { id: 1002, name: '大专' }
      ];
      //选中的学历的id
      $scope.selectId = $scope.list[0].id;
    }
  });
})();
