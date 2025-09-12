<template>
    <App>
        <slot/>
        <!-- 仅 H5 和 App 端显示 Vue tabBar -->
        <!-- #ifdef H5 || APP-PLUS -->
        <CustomTabBar />
        <!-- #endif -->
    </App>
</template>
<script>
    import CustomTabBar from "./components/custom-tab-bar.vue"
	import {I18nUtil} from "./scripts/util/i18n-util";
    import {useI18n} from "vue-i18n";
    export default {
        components: {CustomTabBar},
		onLaunch: function() {
            I18nUtil.useI18nData = useI18n();
		},
		onShow: function() {

		},
		onHide: function() {

		}
	}
</script>

<style lang="scss">
/* 注意要写在第一行，注意不能引入至uni.scss，同时给style标签加入lang="scss"属性 */
@import "/uni_modules/uview-plus/index.scss";
</style>
