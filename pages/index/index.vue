<template>
  <view class="content" :style="{height:pageContentHeight+'px'}">
    <up-grid
        :border="false"
    >
      <up-grid-item
          v-for="(baseListItem,baseListIndex) in baseList"
          :key="baseListIndex"
      >
        <up-icon
            :customStyle="{paddingTop:20+'rpx'}"
            :name="baseListItem.name"
            :size="22"
        ></up-icon>
        <text class="grid-text">{{ baseListItem.title }}</text>
      </up-grid-item>
    </up-grid>
    <CustomTabBar :tabIndex="0" :scrollTop="scrollTopUi"/>
  </view>
</template>

<script setup lang="ts">
import {Ref, ref} from "vue";
import {useI18n} from 'vue-i18n';
import {onLoad, onPageScroll} from "@dcloudio/uni-app";

import CustomTabBar from "../../components/custom-tab-bar.vue";
import {PageSizeUtil} from "../../scripts/util/page-size-util";

const {t, locale} = useI18n()

let  pageContentHeight:Ref<number>=ref(1400);
let scrollTopUi:Ref<number>=ref(0);
let baseList = ref([
  {
    name: 'photo',
    title: '图片'
  },
  {
    name: 'lock',
    title: '锁头'
  },
  {
    name: 'star',
    title: '星星'
  },
  {
    name: 'hourglass',
    title: '沙漏'
  },
  {
    name: 'home',
    title: '首页'
  },
  {
    name: 'volume', // 注意：这里修改了 name 从 'star' 改为 'volume'，以避免列表中两个元素具有相同的 name
    title: '音量'
  },
]);

onLoad(options => {


})
onPageScroll((e)=>{
  scrollTopUi.value=e.scrollTop;
})


</script>

<style scoped lang="scss">
.content{
  width: 100%;
  height: 1000px;
  padding: 0;
  margin: 0;
}
</style>
