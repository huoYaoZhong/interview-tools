<template>
    <view class="content">
        <view>我的</view>
      <CustomTabBar :tabIndex="1" />
    </view>
</template>

<script setup lang="ts">
import {Ref, ref,getCurrentInstance} from "vue";
import {useI18n} from 'vue-i18n';
import {onLoad} from "@dcloudio/uni-app";
import {I18nUtil} from "../../scripts/util/i18n-util";
import {LanguageUniEnum} from "../../scripts/constant/language-uni-enum";
import CustomTabBar from "../../components/custom-tab-bar.vue";

const {t,locale} = useI18n()



onLoad(options => {
    // setTimeout(()=>{
    //     //切换语言
    //     console.log('切换语言')
    //     I18nUtil.changeAppLanguage(LanguageUniEnum.ZH_CN);
    // },5000)

})



</script>

<style>

</style>
