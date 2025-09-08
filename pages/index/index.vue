<template>
  <view class="content">
    <view class="text-area">
      <text class="title">{{navbarTitleUi}}</text>
    </view>
    <up-icon name="arrow-right" color="#333" size="40rpx"></up-icon>
    <up-empty
        mode="car">
    </up-empty>
    <view>
      <up-qrcode cid="ex1" :size="200" val="uview-plus"></up-qrcode>
      <up-qrcode cid="ex2" :size="200" val="uview-plus" icon="https://uview-plus.jiangruyi.com/uview-plus/common/logo.png"></up-qrcode>
      <up-qrcode cid="ex3" :size="200" val="uview-plus" background="red" foreground="blue"></up-qrcode>
    </view>
  </view>
</template>

<script setup lang="ts">
import {Ref, ref} from "vue";
const list1 = ref([
  'https://cdn.uviewui.com/uview/swiper/swiper1.png',
  'https://cdn.uviewui.com/uview/swiper/swiper2.png',
  'https://cdn.uviewui.com/uview/swiper/swiper3.png',
]);
let navbarTitleUi:Ref<string>=ref('Yum Me Print Merchant Portal');
function aa(){

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
