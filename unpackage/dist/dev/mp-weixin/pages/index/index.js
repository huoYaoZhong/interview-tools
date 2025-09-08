"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_empty2 = common_vendor.resolveComponent("up-empty");
  const _easycom_up_qrcode2 = common_vendor.resolveComponent("up-qrcode");
  (_easycom_up_icon2 + _easycom_up_empty2 + _easycom_up_qrcode2)();
}
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_up_empty = () => "../../uni_modules/uview-plus/components/u-empty/u-empty.js";
const _easycom_up_qrcode = () => "../../uni_modules/uview-plus/components/u-qrcode/u-qrcode.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_empty + _easycom_up_qrcode)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    common_vendor.ref([
      "https://cdn.uviewui.com/uview/swiper/swiper1.png",
      "https://cdn.uviewui.com/uview/swiper/swiper2.png",
      "https://cdn.uviewui.com/uview/swiper/swiper3.png"
    ]);
    let navbarTitleUi = common_vendor.ref("Yum Me Print Merchant Portal");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(navbarTitleUi)),
        b: common_vendor.p({
          name: "arrow-right",
          color: "#333",
          size: "40rpx"
        }),
        c: common_vendor.p({
          mode: "car"
        }),
        d: common_vendor.p({
          cid: "ex1",
          size: 200,
          val: "uview-plus"
        }),
        e: common_vendor.p({
          cid: "ex2",
          size: 200,
          val: "uview-plus",
          icon: "https://uview-plus.jiangruyi.com/uview-plus/common/logo.png"
        }),
        f: common_vendor.p({
          cid: "ex3",
          size: 200,
          val: "uview-plus",
          background: "red",
          foreground: "blue"
        })
      };
    };
  }
});
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
