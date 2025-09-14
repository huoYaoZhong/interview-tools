export class PageSizeUtil {
    //rpx转px比例
    public static turnPxScale=0.5;
    //设置状态栏高度
    public static statusBarHeight=0;
    //底部黑条高度
    public static blackStripeHeight=0;
    //导航栏高度
    public static navBarHeight=45;
    public static pageContentHeight=700;
    public static pageContentHeightNoTab=700;
    public static initSize(){
        const systemInfo = uni.getSystemInfoSync();
        //rpx转px比例
        let turnPxScale = systemInfo.windowWidth / 750;
        PageSizeUtil.turnPxScale=turnPxScale;
        let statusBarHeight = systemInfo.statusBarHeight?systemInfo.statusBarHeight:0;
        PageSizeUtil.statusBarHeight=statusBarHeight;
        PageSizeUtil.pageContentHeight=systemInfo.windowHeight-PageSizeUtil.navBarHeight;
        PageSizeUtil.pageContentHeightNoTab=systemInfo.windowHeight-PageSizeUtil.navBarHeight-100*turnPxScale;
        //#ifdef MP-WEIXIN
            let safeAreaBottom=systemInfo.safeArea?.bottom?systemInfo.safeArea.bottom:0
            PageSizeUtil.blackStripeHeight = (systemInfo.screenHeight - safeAreaBottom);
            // 获取胶囊的位置
            const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
            // (胶囊底部高度-状态栏高度)+(胶囊顶部高度-状态栏的高度)=导航栏高度;
            PageSizeUtil.navBarHeight = (menuButtonInfo.bottom - statusBarHeight) + (menuButtonInfo.top - statusBarHeight);

            // tabBar 高度 = (screenHeight - windowHeight) - safeBottom
            let tabBarHeight = (systemInfo.screenHeight - systemInfo.windowHeight)-statusBarHeight-PageSizeUtil.navBarHeight;
            tabBarHeight=tabBarHeight>0?tabBarHeight:0;

            PageSizeUtil.pageContentHeight=systemInfo.windowHeight+tabBarHeight;
            PageSizeUtil.pageContentHeightNoTab=systemInfo.windowHeight+tabBarHeight-100*turnPxScale;
        //#endif



        console.log(PageSizeUtil.statusBarHeight,'statusBarHeight')
        console.log(PageSizeUtil.blackStripeHeight,'blackStripeHeight')
        console.log(PageSizeUtil.navBarHeight,'navBarHeight')
        console.log(PageSizeUtil.pageContentHeight,'pageContentHeight')
        console.log(PageSizeUtil.pageContentHeightNoTab,'pageContentHeightNoTab')
    }
}