angular.module(APP_NAME+'.directives', [])
    .directive('ngEcharts',[function(theme){
        return {
            scope: {
                option: "=",
                height: "="
            },
            restrict: 'E',
            template: '<div style="height:{{height}}px;"></div>',
            replace: true,
            link: function($scope, element, attrs, controller) {
                var myChart;
                //myChart.setOption(option);
                function refreshChart(){
                    if($scope.option=="")
                        return;
                    else
                        myChart = echarts.init(element[0],'default');
                    myChart.setOption($scope.option);
                    myChart.resize();
                }
                $scope.$watch(
                    function () { return $scope.option; },
                    function (value) {if (value) {refreshChart();}},
                    true
                );
            }
        };
    }]);