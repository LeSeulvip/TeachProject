(function() {
  angular.element(document).ready(function() {
    var dircs = angular.module('directives');

    //directive是吻合js-css风格的
    //也就是调用的单词用-号分割，但是js用驼峰表达式
    //js:myDirective<==>css/html:my-directive
    dircs.directive('myDirective', ['$log', MyDirective]);

    function MyDirective($log) {
      $log.debug('My-Directive init...');

      //directive和service一样需要返回值，表示指令对象
      //和service不一样的就是,directive会被页面反复调用，会产生多个实例
      return {
        //link返回direction操作的页面元素和对应的$scope
        link: function($scope, element, attrs) {
          $log.debug('my-directive element,attrs:', element, attrs);
          //修改元素的内容
          element.html('通过directive操作元素');

          //通过jq动态绑定事件，
          element.click(function() {
            alert('不推荐的jq事件');
          });

          //指令销毁动作
          $scope.$on('$destroy', function() {
            $log.debug('my-directive init...');
          });

          $scope.showMyDirective = true;
        }
      };
    }

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

    dircs.directive('showTime', [
      '$log',
      '$interval',
      function($log, $interval) {
        $log.debug('show-Time init...');

        return {
          //link返回direction操作的页面元素和对应的$scope
          link: function($scope, element, attrs) {
            //动态显示时间
            element.html(getNowTime());
            var timer = $interval(function() {
              element.html(getNowTime());
            }, 1000);

            //指令销毁动作
            $scope.$on('$destroy', function() {
              //销毁定时任务
              if (timer) {
                $interval.cancel(timer);
              }
              $log.debug('my-directive init...');
            });
          }
        };
      }
    ]);
  });
})();
