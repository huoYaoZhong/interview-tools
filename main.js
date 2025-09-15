import App from './App'
import uviewPlus from './uni_modules/uview-plus'
import en from './locale/en.json'
import zhHans from './locale/zh-Hans.json'

const messages = {
    en,
    'zh-Hans': zhHans,
}
let i18nConfig = {
    locale: uni.getLocale(),
    messages
}
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import {createI18n} from 'vue-i18n'
import {LanguageUniEnum} from "./scripts/constant/language-uni-enum";
const i18n = createI18n(i18nConfig);
export function createApp() {
  const app = createSSRApp(App)
    app.use(i18n);
    app.use(uviewPlus, () => {
        return {
            options: {
                // 修改$u.config对象的属性
                config: {
                    // 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
                    unit: 'rpx'
                },
            }
        }
    })
  return {
    app
  }
}
// #endif
