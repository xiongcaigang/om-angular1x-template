angular.module(APP_NAME+".controllers",[])
    .controller("topController", ["$rootScope","$scope","$stateParams","$state","globalService","$http",function($rootScope,$scope,$stateParams,$state,globalService,$http){

        $scope.user = globalService.user;
        $scope.site_cn = globalService.site_cn;
        $scope.site = globalService.site;
        $scope.$state=$state;

        $scope.navibanner = getSiteNav();

        $scope.refreshList = function(c){
            if($state.includes(c)){
                $rootScope.$broadcast("top.navs.refresh");
            }

        };
    
}]);