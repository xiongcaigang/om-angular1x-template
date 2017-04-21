angular.module(APP_NAME+".services",[]).service("globalService",['$rootScope','$http','$stateParams',function($rootScope,$http,$stateParams){
    var service = {
        fetchCategory: function() {
            return $http({
                method : "GET",
                url : '/all/problem/list'
            })
        }
    }

    service.user = APP_USER;
    service.site = APP_SITE;
    service.site_cn = APP_SITE_CN;

    service.inArray = function(ar, ele) {
        var ret = false;
        $.each(ar, function (i, r) {
            if (ele === r) {
                ret = true;
            }
        })
        return ret;
    };

    Date.prototype.format = function(format) {
        var date = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S+": this.getMilliseconds()
        };
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in date) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1
                    ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
            }
        }
        return format;
    }

    return service;
}]).
    //{{ADD_SERVICE}}
    service("example1Service", ["$rootScope", "$http", function ($rootScope, $http) {
        return {
            vars:{
            },

            fetchTableData : function(params){
                return $http({
                    method : "GET",
                    url : '/all/problem/list',
                    params : params
                })
            }
        }
    }]).
    service("example2Service", ["$rootScope", "$http", function ($rootScope, $http) {
        return {
            vars:{
            },

            fetchTableData : function(params){
                return $http({
                    method : "GET",
                    url : '/all/problem/list',
                    params : params
                })
            }
        }
    }])