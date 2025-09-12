<template>
    <view class="content">
        <view>我的</view>
    </view>
</template>

<script setup lang="ts">
import {Ref, ref,getCurrentInstance} from "vue";
import {useI18n} from 'vue-i18n';
import {onLoad} from "@dcloudio/uni-app";
import {I18nUtil} from "../../scripts/util/i18n-util";
import {LanguageUniEnum} from "../../scripts/constant/language-uni-enum";

const {t,locale} = useI18n()



onLoad(options => {
    // setTimeout(()=>{
    //     //切换语言
    //     console.log('切换语言')
    //     I18nUtil.changeAppLanguage(LanguageUniEnum.ZH_CN);
    // },5000)

    setTabBar();
})

function setTabBar(){
    // #ifdef MP-WEIXIN
    const { proxy } = getCurrentInstance();
    //@ts-ignore
    const tabBar = proxy.$scope.getTabBar();
    if (tabBar) {
        tabBar.init();
    }
    // #endif
}

</script>

<style>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
}

.text-area {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 36rpx;
    color: #8f8f94;
}
</style>
