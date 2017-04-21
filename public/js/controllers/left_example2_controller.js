angular.module(APP_NAME+'.controllers').controller("leftExample2Controller",["$scope","$rootScope","$stateParams","globalService",function($scope,$rootScope,$stateParams,globalService){
    $scope.init = function() {
        $scope.vars = {
            curNav : '',
            navs : []
        }
        $scope.getCategoryData();
    }        

    $scope.changeNav = function(curNav){
        $scope.vars.curNav = curNav.categoryid;
        $rootScope.$broadcast("left.menu.change", {nav:curNav.categoryid});
    }			
    
	$scope.getCategoryData = function() {
		globalService.fetchCategory().then (function (ret) {
				if(ret.data.code == "0") {
					$scope.vars.navs = ret.data.data.category_info;
					if ($scope.vars.navs != undefined && $scope.vars.navs.length > 0)
						$scope.vars.curNav = $scope.navs[0].categoryid;	
				} else {
					alert("导航拉取失败");
				}
		});
	}
	
    $scope.init();		
}])
