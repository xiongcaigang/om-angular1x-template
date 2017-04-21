angular.module(APP_NAME+'.controllers').controller("rightExample2Controller",["$scope","$rootScope","example2Service","$modal",function($scope,$rootScope,example2Service, $modal){
    
    $scope.init = function(){
        $scope.vars = {
            searchvalue : '',
            searchflag : 0,
            isLoading : false,
            hasPage : false,
            pageSize : 15,
            page : 1,
            count : 0,
            errorMsg: '操作失败',
            maxShowPage : 5
        }
        $scope.getAllTableData();
    }
    
    $scope.initPageSize = function() {
        $scope.vars.page = 1;
        $scope.vars.pageSize = 15;
        $scope.vars.count = 0;
        $scope.vars.hasPage = false;
    }

    $scope.showMessagePop = function(type) {
        if (type == 1) {
            $scope._modalInstance = $modal.open({
                templateUrl: 'template/dialog/successModal.html?r='+Math.random(),
                scope:$scope,
                windowClass: 'messagePop'
            });
            setTimeout(function() {
                $scope._modalInstance.close();
            }, 1500);
        }
        else if (type == 0) {
            $scope._modalInstance = $modal.open({
                templateUrl: 'template/dialog/faildModal.html?r='+Math.random(),
                scope:$scope,
                windowClass: 'messagePop'
            });
            setTimeout(function() {
                $scope._modalInstance.close();
            }, 2000);           
        }       
    }   
    
    $scope.search = function(){
        $scope.initPageSize();
        $scope.vars.searchflag = 1;
        $scope.getAllTableData();
    }

    $scope.clearSearch = function() {
        $scope.vars.searchvalue = "";
        $scope.vars.searchflag = 0;
        $scope.initPageSize();
        $scope.getAllTableData();    
    } 

    $scope.selectPage = function(page){
        $scope.vars.page = page;
        $scope.vars.inputPage = page;
        $scope.getAllTableData();
    } 

    $scope.getAllTableData = function(){
        $scope.vars.isLoading = true;
        $scope.tableData = [];
        var params = {};
        params.page = $scope.vars.page;
        params.limit = $scope.vars.pageSize;
        if ($scope.vars.searchvalue != "") {
            params.keyword = $scope.vars.searchvalue;
        }
        example2Service.fetchTableData(params).then(function(ret){
            $scope.vars.isLoading = false;
            if('0' == ret.data.code){
                $scope.tableData = ret.data.data.problem_info;
                $scope.vars.count = ret.data.data.total;
                $scope.vars.hasPage = true;
            }else{
                $scope.vars.hasPage = false;
                $scope.vars.page = 1;
                $scope.vars.count = 0;
                $scope.vars.errorMsg = ret.data.msg;
                $scope.showMessagePop(0);
            }       
        }, function(err) {
            $scope.vars.isLoading = false;
            $scope.vars.hasPage = false;
            $scope.vars.page = 1;
            $scope.vars.count = 0;
            $scope.vars.errorMsg = '拉取数据接口错误';
            $scope.showMessagePop(0);          
        });
    }
    
    $scope.init();
}])

