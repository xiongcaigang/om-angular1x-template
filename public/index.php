<?php
$version_js = "?v=1.00";
$version_css = "?v=1.00";
?>
<!DOCTYPE html >
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="en" />

    <title>企鹅管理后台</title>
    <link rel="Stylesheet" type="text/css" href="/css/bootstrap.css<?php echo $version_css; ?>">
    <link rel="Stylesheet" type="text/css" href="/css/bootstrap-datetimepicker.css<?php echo $version_css; ?>">
    <link rel="Stylesheet" type="text/css" href="/css/main.css<?php echo $version_css; ?>">

    <script src="/libs/jquery.js"></script>
    <script src="/libs/jquery-ui.min.js"></script>
    <script src="/libs/underscore.js" charset="utf-8"></script>
    <script src="/libs/angular.min.js" charset="utf-8"></script>
    <script src="/libs/angular-ui-router.js" charset="utf-8"></script>
    <script src="/libs/ui-utils.js"></script>
    <script src="/libs/angular-sanitize.js"></script>
    <script src="/libs/bootstrap2.js" charset="utf-8"></script>
    <script src="/libs/ui-bootstrap-tpls-0.6.0.js"></script>
    <script src="/libs/sortable.min.js"></script>
	<!--{{LIB}}-->

    <script src="/js/main.js<?php echo $version_js; ?>"></script>
    <script src="/js/service.js<?php echo $version_js; ?>"></script>
    <script src="/js/filters.js<?php echo $version_js; ?>"></script>
    <script src="/js/directives.js<?php echo $version_js; ?>"></script>
    <script src="/js/controllers/example1_controller.js<?php echo $version_js; ?>"></script>
    <script src="/js/controllers/top_controller.js<?php echo $version_js; ?>"></script>
    <script src="/js/controllers/lef_example2_controller.js<?php echo $version_js; ?>"></script>
    <script src="/js/controllers/right_example2_controller.js<?php echo $version_js; ?>"></script>
	<!--{{IMPORT}}-->

</head>
<body>
<div class="container-fluid"  ng-app="OMManagement" class="ng-app:OMManagement" id="ng-app">
    <div class="topArea ng-scope" ng-controller="topController">
        <div class="naviBanner">
            <a ng-repeat="navi in navibanner" ng-class="{'on':$state.includes('{{navi.name}}')}" href="#/{{navi.name}}">{{navi.title}}</a>
        </div>
        <div class="userBanner">
            <span class="ng-binding">欢迎你 {{user}}</span>
            <span class="ng-binding"> {{site_cn}}</span>
            <span><a href="http://pass2.webdev.com/project/change?project_code=omAnalytics">[切换]</a></span>
        </div>
    </div>
    <div class="row-fluid">
        <div ui-view="left_menu">       
        </div>
        <div class="ng-scope" ui-view="right_main">
        </div>        
        <div class="ng-scope" style="margin-left:0px;" ui-view="all_main"></div>      
    </div>
</div>
</body>
</html>