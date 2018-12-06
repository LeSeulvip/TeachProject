(function() {
  angular.element(document).ready(function() {
    var ctrls = angular.module('controllers');
    ctrls.controller('MyCtrl', ['$scope', '$log', '$timeout', '$interval', '$location', MyCtrl]);

    function MyCtrl($scope, $log, $timeout, $interval, $location) {
      $log.debug('in MyCtrl init.....');

      //处理scope销毁
      $scope.$on('$destroy', function() {
        //如果开启了定时任务，一定要在控制器销毁是中断
        if ($scope.timer) {
          $interval.cancel($scope.timer);
        }
        $log.debug('MyCtrl destroy....');
      });
      //延时控制div消失
      $scope.showDiv = true;
      //$timeout就是js里面的setTimeout，但是$timeout更改变量会体现在页面上

      var timer = $timeout(function() {
        $scope.showDiv = false;
      }, 5000);

      $scope.cancelHideDiv = function() {
        //通过timer的id取消延时任务，$timeout.cancel
        $timeout.cancel(timer);
      };

      //获取当前时间
      function getNowTime() {
        var date = new Date();
        //年份
        var year = date.getFullYear();
        //日期
        var month = date.getMonth() + 1;
        month = month < 10 ? '0' + month : month + '';
        var day = date.getDate();
        day = day < 10 ? '0' + day : day + '';
        var hour = date.getHours();

        var minute = date.getMinutes();

        var second = date.getSeconds();

        var result = year + '年' + month + '月' + day + '日';
        result = result + hour + ':' + minute + ':' + second;
        return result;
      }
      $scope.nowtime = getNowTime();

      //$interval就是js里面的setInterval区别一样是更新状态
      //第一个参数定时执行的function，第二个参数是时间间隔
      //返回值也是用户清楚timer的id
      $scope.timer = $interval(function() {
        $scope.nowtime = getNowTime();
      }, 1000);

      //$location就是location对象封装，并且提供了路由的支持
      //http://127.0.0.1:30000/ng008.html#!/sadf?abc=def&hh=12#abc
      //path()是读取和设置完整路由地址(就是/sadf)
      //absUrl()是读写完整url地址
      //url()是带查询参数的路由地址(就是#符号后面的地址)
      //search()就是?后面的查询字符串对应的json对象
      //hash()是锚点信息，就是#符号后面，由于锚点已经是路由标志，所以要在路由后再次添加
      $scope.locInfo = {
        path: $location.path(),
        absUrl: $location.absUrl(),
        url: $location.url(),
        qs: $location.search(),
        hash: $location.hash()
      };

      $scope.changeLocation = function() {
        //由于切换path就会触发页面（或者路由）跳转，所以修改path必须是最后动作
        $location.search({ name: 'admin', password: 'pwd-123', ids: [1, 2, 3] });
        $location.hash('abc123');
        $location.path('/abc/def');
      };

      //切换tab
      //面板的数据（真正的项目中是来自数据库）
      $scope.tabs = [
        { id: 100, title: '首页', page: 'ng008-01.html' },
        { id: 101, title: 'angularjs', page: 'ng008-02.html' },
        { id: 102, title: 'springboot', page: 'ng008-03.html' }
      ];

      $scope.changeTab = function(tab) {
        $log.debug(tab);
        $scope.selectTab = tab;
      };

      //通过url参数初始化tab
      var urltab = $location.search().tab;
      urltab = isNaN(urltab) ? 0 : parseInt(urltab);
      urltab = urltab < 0 ? 0 : urltab;
      urltab = urltab >= $scope.tabs.length ? $scope.tabs.length - 1 : urltab;
      $scope.changeTab($scope.tabs[urltab]);
    }
  });
})();
