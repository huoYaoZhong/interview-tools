<template>
    <view class="tab-bar" >
        <view class="tab-bar-content">
            <view  class="tab-bar-item"
                  v-for="(item,index) in list" :key="index"
                  @click="switchTab(item.pagePath)">
                <view v-if="tabIndex===index" class="round-top"></view>
                <view class="round" v-if="tabIndex===index">
                    <image :class=" {'image':item.selectedStyle === 1,'images':item.selectedStyle !== 1}" :src="item.selectedIconPath"></image>
                </view>
                <view class="item-content">
                    <image class="image" :src="item.iconPath"></image>
                    <view class="p" :class="{'active':tabIndex===index}" >{{item.text}}</view>
                </view>
            </view>
        </view>
    </view>
</template>
<script setup lang="ts">
import {nextTick, onBeforeMount, onMounted, Ref, ref} from 'vue';
import {onLoad} from "@dcloudio/uni-app";
export interface Props {
  tabIndex: number;
}

const props = withDefaults(defineProps<Props>(), {
  tabIndex: 0,
})

let selected:Ref<number>=ref(0);
let list= ref([{
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
}])

onLoad((options: any)=>{
  console.log('执行55555555555555')
  // uni.hideTabBar();
})
onBeforeMount(() => {

})
onMounted(() => {

});

function switchTab(url:string){
    uni.switchTab({ url: url });
}

</script>

<style scoped lang="scss">
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100rpx;
  background: #fff;
  z-index: 9999;
  box-shadow: 0 -2rpx 40rpx 0 rgba(0,0,0,.1);
}
.tab-bar-content{
  width: 100%;
  height: 100rpx;

  position: relative;
  display: flex;
}
.tab-bar-item{
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  position: relative;
  display: flex;
}

.tab-bar-item .round-top{
  width: 100%;
  position: absolute;
  top: -43rpx;
  height: 45rpx;
  z-index: -4;
  overflow: hidden;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAAAtCAMAAABPq6N6AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURaqqqrOzs0xpcaioqKampvPz8+zs7Pz8/Pn5+d3d3f7+/v///zC/xUkAAAALdFJOUwoFACIVmXnWuVbsWW1REwAAAhdJREFUWMPtl8l2wyAMReUaA4b//996AiSBMZOTLvrSRTap77nCwIOfPxXo+/nEPl/DOR6//7H0UUEzSS7NTNACQwI+EdLrOJjFQQD70mMJ2kZEOBIJQO/ZiaazRWwfEHuOL1hUiyGoNeOsiBMiEQ8FyNA01g4Vc8+SIRqDE8xELHOcmKjqPYNaMxmUBBMGGoFDzVxi/HNXuWiljLHWGKX0IldKBBioRBCU7TTYjCPRG0Ucox0TNlQqCEpWDTJzPukGBSEFIhAVgqBg2QQzp5cly3IRLWtQhHjacaYkjFS2MEoGQx7owQ8UqfFzKocJQDWCoNTNMaYqmANoJYIeeaBw2ez/VduGaCLoaUHDoxs/J2ObYtzEsJ+pCgdtNl1qmKCwoGvtMJrV2I6YNeKZynGom2NQtjPRwGrs8GWz2O4sEc9UhJNYxANoAo/IvvBw/4IPpUn4SQmCx71vEA3zcyMI7u427owaRnPxzOzOMaVwyN0cqRlJg3gEaT8ICWirBHZ+D6WJeHBFPI1A3G+FH1TPVpzZoOfo3hoIeJdDl776A7z0iJ9p+4FE4edz6jwYsgdGuNvDbb0W5Go+flB0YDMviKxpu/503UGNfS1G3nZE2m59f1L21aiVA7nZxSyvwxAgigR+PC7yAzCoaDim6wJL27XU9oPRkrd7wH1b2Y9HoV6/4yx7tP4CCWLSeoOQW8D+qfzj5PILImCLlJBdwN8AAAAASUVORK5CYII=);
  /* background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAAAhCAMAAAA4aWMBAAAAhFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8g2+bRAAAAK3RSTlMAz3GoVRL57dO1gy7phhaPiVA/6N7Dv39pBfWwoZ6Sd1hLRzwmHwnfYmADEx1r6wAAAQdJREFUWMPt1UdywzAQRNEBAQYwZ5HK2aHvfz97540tkUjiwu8Ev6a6akhHXg+F7NhbGARhyzpZDHVOr5F4MsQvQukl5NZY8RQPNLwayZWkSPFUWri5kWCYiAmyTUSYIbIbdIowU3QiW3IOBTwnK95DKAk/yDxfQpn0ybCkhYY2IaOOa2hZCzJoBW0rMiYGFtQTw4iYjMiABfVkwIJ6MhiUkaYSRpWk485hGL+TshuDcexGis4pLEjPpMLfwpKdwkcVDaxpBM1Td7Cqr2m6Sw/r+svEzXgMTrDh6YbyIw/gTMDFn0XjtSoZnGNldf2kH553yPbbTRTgZYJos9vHB+8bYVH+cx75AtZqq3IiGZR6AAAAAElFTkSuQmCC); */


  background-repeat: no-repeat;

  background-position: center;
  background-size: contain;
  content: "";
}

.tab-bar-item .round{
  position: absolute;
  top: -14rpx;
  left: 50%;
  width: 68rpx;
  height: 68rpx;
  border-radius: 50%;
  z-index: 2;
  background: linear-gradient(135deg,#ff7f80,#fc5f5e);
  transform: translateX(-50%);
}
.tab-bar-item .round .image{
  position: absolute;
  top: 11rpx;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  width: 44rpx;
  height: 132rpx;
}
.tab-bar-item .round .images{
  position: absolute;
  top: 11rpx;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  width: 44rpx;
  height: 44rpx;
}

.item-content{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 9rpx 0rpx 12rpx 0rpx;

}
.item-content .image{
  width: 44rpx;
  height: 44rpx;
}
.item-content .p{
  font-size: 20rpx;
  color: #b0b0b0;
}
.item-content .p.active{
  color: #fc5f46;
}
</style>
