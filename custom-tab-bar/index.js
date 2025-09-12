//暂时废弃了
Component({
    data: {
        selected: 0,
        color: "#b0b0b0",
        selectedColor: "#fc5f46;",
        hidden: false,
        list: [{
                pagePath: "/pages/index/index",
                iconPath: "/static/image/index.png",
                selectedIconPath: "/static/image/indexs.png",
                text: "首页",
                selectedStyle: 1
            }, {
                pagePath: "/pages/user/mine",
                iconPath: "/static/image/mine.png",
                selectedIconPath: "/static/image/mines.png",
                text: "我的",
                selectedStyle: 2
            }]
    },
    methods: {
        switchTab: function (e) {
            let data = e.currentTarget.dataset;
            let url = data.path;
            let page = getCurrentPages().pop();
            if (page&&page.$vm&&page.$vm.aa){
                page.$vm.aa()
            }
            wx.switchTab({ url: url });
        },
        init: function () {
            let page = getCurrentPages().pop();
            this.setData({
                selected: this.data.list.findIndex(function (item) { return item.pagePath === "/" + page.route; }),
                hidden: true
            });
        }
    }
});
