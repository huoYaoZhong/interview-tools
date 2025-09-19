<template>
  <view class="page-content">
      <view class="grid-list">
          <view class="li" v-for="(item,index) in setListUi" :key="item.key" @click="goPage(item.key)">
              <div class="icon" >
                  <view class="icon-p iconfont" :class="{[item.iconName]:true}" :style="{'font-size':item.iconFontSize}"></view>
              </div>
              <view class="p" >{{item.name}}</view>
          </view>
      </view>
    <CustomTabBar :tabIndex="0" :scrollTop="scrollTopUi"/>
  </view>
</template>

<script setup lang="ts">
import {Ref, ref} from "vue";
import {useI18n} from 'vue-i18n';
import {onLoad, onPageScroll} from "@dcloudio/uni-app";

import CustomTabBar from "../../components/custom-tab-bar.vue";
import {PageSizeUtil} from "../../scripts/util/page-size-util";
import UIcon from "../../uni_modules/uview-plus/components/u-icon/u-icon.vue";

const {t, locale} = useI18n()


let scrollTopUi:Ref<number>=ref(0);
let setListUi:Ref<Array<{ key:string,name:string,iconName:string,iconFontSize:string }>> = ref([
    {
        key:'print-order-list',
        name:'蓝牙',
        iconName:'icon-lanya',
        iconFontSize:'74rpx'

    },
    {
        key:'print-order-list',
        name:'蓝牙',
        iconName:'icon-lanya',
        iconFontSize:'74rpx'

    },
    {
        key:'print-order-list',
        name:'蓝牙',
        iconName:'icon-lanya',
        iconFontSize:'74rpx'

    },

]);

onLoad(options => {


})
function goPage(key:string){

}
onPageScroll((e)=>{
  scrollTopUi.value=e.scrollTop;
})


</script>

<style scoped lang="scss">
.page-content{
  width: 100%;
  height: 1400px;
  border-top: 2rpx solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  background: #FFFFFF;
  .grid-list{

    display: flex;
    padding: 20rpx 20rpx;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: space-between;
    .li{
      width: 346rpx;
      height: 230rpx;
      background: #F8F8F8;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 14rpx;
      border-radius: 30rpx;
      overflow: hidden;
      .icon{

      }
      .p{
        padding-top: 10rpx;
        font-size: 30rpx;
        color: #333333;
        text-align: center;
      }
    }
  }
}
</style>
