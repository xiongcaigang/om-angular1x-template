if(!+[1,]){alert("系统不兼容您使用的浏览器版本，建议使用chrome浏览器");}
var APP_NAME = 'OMManagement';
var APP_MODULE = angular.module(APP_NAME, [APP_NAME+'.controllers','ui.router','ui.bootstrap',APP_NAME+'.services',APP_NAME+'.directives',APP_NAME+'.filters'])
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) {
        return decodeURIComponent(arr[2]);
    }
    return null;
}
function setCookie(name, value, expires, path, domain, raw) {
    if (!raw) value = escape(value);

    if (typeof expires == "undefined") {
        expires = new Date(new Date().getTime() + 10 * 24 * 3600 * 1000);
    }

    document.cookie = name + "=" + value +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "; path=/") +
        ((domain) ? "; domain=" + domain : "; domain=webdev.com");
}
function getSiteNav(site) {
    site = site || APP_SITE;
    //START_REPLACE_DEFAULT
    return navData[site] || navData["default"];
    //END_REPLACE_DEFAULT
}
var APP_SITE = getCookie('SITE_EN_CHANGE_ME');
var APP_SITE_CN = getCookie('SITE_CN_CHANGE_ME');
var APP_USER = getCookie('PAS_COOKIE_USER');

var navData = {
    //{{ADD_NAVIGATOR}}
    'default':[{name:'example1',title:'整面布局'},
                {name:'example2',title:'左右布局'}]
};
var routerData = {
    //{{ADD_ROUTER_DATA}}
    'example1' : {
        url:'/example1'
    },    
    'example2' : {
        abstract : true,
        url : '/example2'
    },
    'example2.child1' : {
        url : ''
    }
};


function routeConfig($stateProvider, $urlRouterProvider) {
    var _firstListType = routerData[getSiteNav()[0]['name']].url;
    $urlRouterProvider.otherwise(_firstListType);

    angular.forEach(routerData, function(params, st){
        params.views = {};
     

        if(params.abstract){//abstract url
            params.views['left_menu'] = {
                templateUrl: 'template/left_' + st + '.html?r='+Math.random()
               // templateUrl : ''
            }
        } else{
            if(st.indexOf('.') != -1){//right_main
                params.views['right_main@'] = {
                    templateUrl:function (stateParams) {
                        return 'template/right_' + st + '.html?r=' + Math.random();
                    }
                }
            }else{//all_main
                params.views['all_main@'] = {
                    templateUrl : function(stateParams){
                        return 'template/' + st + '.html?r=' + Math.random();
                    }
                }
            }
        }
        
        $stateProvider.state(st,params);
    });

};

//初始化
(function (application, _) {

    //给模块添加underscore功能
    application.factory('_', function () {
        return _;
    });

    application.run();
    application.config(routeConfig);
    application.filter('trusted', ['$sce', function ($sce) {
        return function (url) {
            return $sce.trustAsResourceUrl(url);
        };
    }]);
    

})(APP_MODULE, _.noConflict());
