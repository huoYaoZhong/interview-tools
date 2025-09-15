<script>
import CustomTabBar from "./components/custom-tab-bar.vue"
import {I18nUtil} from "./scripts/util/i18n-util";
import {useI18n} from "vue-i18n";
import {PageSizeUtil} from "./scripts/util/page-size-util";

export default {
  onLaunch: function () {

    // #ifdef MP-WEIXIN
    uni.hideTabBar();
    // #endif
    // #ifdef H5 || APP-PLUS
    // setTimeout(() => {
    //   uni.hideTabBar();
    // }, 100)
    // #endif
    PageSizeUtil.initSize();
    I18nUtil.useI18nData = useI18n();

  },
  onShow: function () {

  },
  onHide: function () {

  }
}
</script>

<style lang="scss">
/* 注意要写在第一行，注意不能引入至uni.scss，同时给style标签加入lang="scss"属性 */
@import "/uni_modules/uview-plus/index.scss";
@import "/static/iconfont/iconfont.css";

</style>
