//业务逻辑
angular.element(document).ready(function() {
  var ctrls = angular.module('controllers');
  ctrls.controller('MyCtrl02', ['$rootScope', '$scope', '$log', MyCtrl02]);

  function MyCtrl02($rootScope, $scope, $log) {
    $log.debug('in MyCtrl init.....');

    //处理scope销毁
    $scope.$on('$destroy', function() {
      $log.debug('MyCtrl02 destroy....');
    });

    //业务逻辑
    $scope.welcome = '单选按钮演示';

    //性别单选
    $scope.sex = 'm';

    //动态学历单选
    $scope.edus = [
      { eid: 1000, name: '高中' },
      { eid: 1001, name: '中专' },
      { eid: 1002, name: '大专' },
      { eid: 1003, name: '大学' }
    ];

    //默认选中的学历
    $scope.edu = $scope.edus[0].eid;

    //更改选中的学历
    $scope.changeEdu = function(eid) {
      $log.debug(eid);
      $scope.edu = eid;
    };
  }
});
