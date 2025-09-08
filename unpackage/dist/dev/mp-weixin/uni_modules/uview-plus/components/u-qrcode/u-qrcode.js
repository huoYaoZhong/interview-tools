"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewPlus_components_uQrcode_qrcode = require("./qrcode.js");
let qrcode;
const _sfc_main = {
  name: "u-qrcode",
  props: {
    cid: {
      type: String,
      default: () => `u-qrcode-canvas${Math.floor(Math.random() * 1e6)}`
    },
    size: {
      type: Number,
      default: 200
    },
    unit: {
      type: String,
      default: "px"
    },
    show: {
      type: Boolean,
      default: true
    },
    val: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: "#ffffff"
    },
    foreground: {
      type: String,
      default: "#000000"
    },
    pdground: {
      type: String,
      default: "#000000"
    },
    icon: {
      type: String,
      default: ""
    },
    iconSize: {
      type: Number,
      default: 40
    },
    lv: {
      type: Number,
      default: 3
    },
    onval: {
      type: Boolean,
      default: true
    },
    loadMake: {
      type: Boolean,
      default: true
    },
    usingComponents: {
      type: Boolean,
      default: true
    },
    showLoading: {
      type: Boolean,
      default: true
    },
    loadingText: {
      type: String,
      default: "生成中"
    },
    allowPreview: {
      type: Boolean,
      default: false
    },
    // 是否使用根节点宽高
    useRootHeightAndWidth: {
      type: Boolean,
      default: () => false
    }
  },
  emits: ["result", "longpressCallback"],
  data() {
    return {
      loading: false,
      result: "",
      popupShow: false,
      list: [
        {
          name: "保存二维码"
        }
      ],
      rootId: `rootId${Number(Math.random() * 100).toFixed(0)}`,
      ganvas: null,
      context: "",
      canvasObj: {},
      sizeLocal: this.size,
      ctx: null,
      // ctx 在new Qrcode 时js文件内部设置
      canvas: null
      // ctx 在new Qrcode 时js文件内部设置
    };
  },
  async mounted() {
    if (this.useRootHeightAndWidth) {
      await this.setNewSize();
    }
    if (this.loadMake) {
      if (!this._empty(this.val)) {
        setTimeout(() => {
          setTimeout(() => {
            this._makeCode();
          });
        }, 0);
      }
    }
  },
  methods: {
    _makeCode() {
      let that2 = this;
      if (!this._empty(this.val)) {
        this.loading = true;
        qrcode = new uni_modules_uviewPlus_components_uQrcode_qrcode.QRCode({
          context: that2,
          // 上下文环境
          canvasId: that2.cid,
          // canvas-id
          nvueContext: that2.context,
          usingComponents: that2.usingComponents,
          // 是否是自定义组件
          showLoading: false,
          // 是否显示loading
          loadingText: that2.loadingText,
          // loading文字
          text: that2.val,
          // 生成内容
          size: that2.sizeLocal,
          // 二维码大小
          background: that2.background,
          // 背景色
          foreground: that2.foreground,
          // 前景色
          pdground: that2.pdground,
          // 定位角点颜色
          correctLevel: that2.lv,
          // 容错级别
          image: that2.icon,
          // 二维码图标
          imageSize: that2.iconSize,
          // 二维码图标大小
          cbResult: function(res) {
            that2._result(res);
          }
        });
      } else {
        common_vendor.index.showToast({
          title: "二维码内容不能为空",
          icon: "none",
          duration: 2e3
        });
      }
    },
    _clearCode() {
      this._result("");
      qrcode.clear();
    },
    _saveCode() {
      let that2 = this;
      if (this.result != "") {
        common_vendor.index.saveImageToPhotosAlbum({
          filePath: that2.result,
          success: function() {
            common_vendor.index.showToast({
              title: "二维码保存成功",
              icon: "success",
              duration: 2e3
            });
          }
        });
      }
    },
    preview(e) {
      if (this.allowPreview) {
        common_vendor.index.previewImage({
          urls: [this.result],
          longPressActions: {
            itemList: ["保存二维码图片"],
            success: function(data) {
              switch (data.tapIndex) {
                case 0:
                  that._saveCode();
                  break;
              }
            },
            fail: function(err) {
              common_vendor.index.__f__("log", "at uni_modules/uview-plus/components/u-qrcode/u-qrcode.vue:254", err.errMsg);
            }
          }
        });
      }
      this.$emit("preview", {
        url: this.result
      }, e);
    },
    async toTempFilePath({ success, fail }) {
      if (this.context) {
        this.ctx.toTempFilePath(
          0,
          0,
          this.sizeLocal,
          this.sizeLocal,
          this.sizeLocal,
          this.sizeLocal,
          "",
          1,
          (res) => {
            success(res);
          }
        );
      } else {
        const canvas = await this.getNode(this.cid, true);
        common_vendor.index.canvasToTempFilePath(
          {
            canvas,
            success: (res) => {
              success(res);
            },
            fail
          },
          this
        );
      }
    },
    async longpress() {
      this.toTempFilePath({
        success: (res) => {
          this.$emit("longpressCallback", res.tempFilePath);
        },
        fail: (err) => {
        }
      });
    },
    /**
     * 使用根节点宽高 设置新的size
     * @return {Promise<void>}
     */
    async setNewSize() {
      const rootNode = await this.getNode(this.rootId, false);
      const { width, height } = rootNode;
      if (width > height) {
        this.sizeLocal = height;
      } else {
        this.sizeLocal = width;
      }
    },
    /**
     * 获取节点
     * @param id 节点id
     * @param isCanvas 是否为Canvas节点
     * @return {Promise<unknown>}
     */
    async getNode(id, isCanvas) {
      return new Promise((resolve, reject) => {
        try {
          const query = common_vendor.index.createSelectorQuery().in(this);
          query.select(`#${id}`).fields({ node: true, size: true }).exec((res) => {
            if (isCanvas) {
              resolve(res[0].node);
            } else {
              resolve(res[0]);
            }
          });
        } catch (e) {
          common_vendor.index.__f__("error", "at uni_modules/uview-plus/components/u-qrcode/u-qrcode.vue:361", "获取节点失败", e);
        }
      });
    },
    selectClick(index) {
      switch (index) {
        case 0:
          alert("保存二维码");
          this._saveCode();
          break;
      }
    },
    _result(res) {
      this.loading = false;
      this.result = res;
      this.$emit("result", res);
    },
    _empty(v) {
      let tp = typeof v, rt = false;
      if (tp == "number" && String(v) == "") {
        rt = true;
      } else if (tp == "undefined") {
        rt = true;
      } else if (tp == "object") {
        if (JSON.stringify(v) == "{}" || JSON.stringify(v) == "[]" || v == null)
          rt = true;
      } else if (tp == "string") {
        if (v == "" || v == "undefined" || v == "null" || v == "{}" || v == "[]")
          rt = true;
      } else if (tp == "function") {
        rt = false;
      }
      return rt;
    }
  },
  watch: {
    size: function(n, o) {
      if (n != o && !this._empty(n)) {
        this.cSize = n;
        if (!this._empty(this.val)) {
          setTimeout(() => {
            this._makeCode();
          }, 100);
        }
      }
    },
    val: function(n, o) {
      if (this.onval) {
        if (n != o && !this._empty(n)) {
          setTimeout(() => {
            this._makeCode();
          }, 0);
        }
      }
    }
  },
  computed: {}
};
if (!Array) {
  const _easycom_up_loading_icon2 = common_vendor.resolveComponent("up-loading-icon");
  _easycom_up_loading_icon2();
}
const _easycom_up_loading_icon = () => "../u-loading-icon/u-loading-icon.js";
if (!Math) {
  _easycom_up_loading_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.cid,
    b: $props.cid,
    c: $data.sizeLocal + $props.unit,
    d: $data.sizeLocal + $props.unit,
    e: $props.showLoading && $data.loading
  }, $props.showLoading && $data.loading ? {
    f: common_vendor.p({
      vertical: true,
      text: $props.loadingText,
      textSize: "14px"
    }),
    g: $data.sizeLocal + $props.unit,
    h: $data.sizeLocal + $props.unit
  } : {}, {
    i: common_vendor.o((...args) => $options.preview && $options.preview(...args)),
    j: $data.rootId,
    k: $props.useRootHeightAndWidth ? "100%" : "auto",
    l: $props.useRootHeightAndWidth ? "100%" : "auto",
    m: common_vendor.o((...args) => $options.longpress && $options.longpress(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-44e78b4f"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-plus/components/u-qrcode/u-qrcode.js.map
