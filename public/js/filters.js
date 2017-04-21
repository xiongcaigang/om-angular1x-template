angular.module(APP_NAME+'.filters', [])
    .filter('accountType', function ($sce) {
        return function (id) {
            var map = {
                "0":"机构",
                "1": "个人",
                "2": "媒体",
                "3":"企业",
                "4":"政府",
                "5":"其他组织"
            }
            return map[id] || "未知";
        };
    })
    .filter('mediaSource', function ($sce) {
        return function (id) {
            var map = {"0": "注册", "1": "导入","2" : "邀约","6":"伯乐"}
            return map[id] || id || '未知';
        };
    })
    .filter('articleSource', function ($sce) {
        return function (id) {
            var map = {"0": "手动发文", "1": "微信发文","2":"RSS文章","3":"视频抓取"}
            return map[id] || "未知";
        };
    })
    .filter('cut', function ($sce) {
        return function (text, len, replaceText) {
            text = text.replace(/\s/g, "")
            var _text = text.substr(0, len) + (text.length > len ? "..." : "");
            return _text || replaceText;
        };
    })
    .filter('publishStatus', function ($sce) {
        return function (id) {
            var map = {"0": "未发布", "1": "已发布", "2": "审核中", "3": "拒绝", "4": "定时发布"}
            return map[id] || "未知";
        };
    })
    .filter('marketType', function ($sce) {
        return function (id) {
            var map = {"1": "投资类", "2": "健康两性类", "3": "色情类"}
            return map[id] || "未知";
        };
    })
    .filter('numTrendStyle', function ($sce) {
        return function (num) {
            num = num || 0;
            return $sce.trustAsHtml(parseInt(num)>0?'<label style="color:#55c878;display:inline">'+num+'</label>':'<label style="color:#f77274;display:inline">'+num+'</label>');
        };
    });
   

