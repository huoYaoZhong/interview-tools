Component({
    data: {
        selected: 0,
        color: "#b0b0b0",
        selectedColor: "#fc5f46;",
        hidden: true,
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
            console.log(e,'执行里面---1')
            let data = e.currentTarget.dataset;
            let url = data.path;
            let index = data.index;
            do {
                // if (index === 2) {
                //     wx.navigateTo({ url: url });
                //     break;
                // }

                wx.switchTab({ url: url });
            } while (false);
        },
        init: function () {
            var page = getCurrentPages().pop();
            this.setData({
                selected: this.data.list.findIndex(function (item) { return item.pagePath === "/" + page.route; }),
                hidden: true
            });
        }
    }
});
