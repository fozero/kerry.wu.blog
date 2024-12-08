<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
      result: {{ result }}
    </view>
    <qrcode-stream
      :constraints="selectedConstraints"
      :paused="paused"
      @detect="onDetect"
      @camera-on="onCameraOn"
      @camera-off="onCameraOff"
      @error="onError"
      :formats="selectedBarcodeFormats"
    ></qrcode-stream>
  </view>
</template>

<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";
export default {
  components: {
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture,
  },
  data() {
    return {
      title: "Hello",
      paused: false,
      result: "",
      showScanConfirmation: false,
      selectedConstraints: {
        facingMode: "environment",
      },
      barcodeFormats: {
        aztec: false,
        code_128: false,
        code_39: false,
        code_93: false,
        codabar: false,
        databar: false,
        databar_expanded: false,
        data_matrix: false,
        dx_film_edge: false,
        ean_13: false,
        ean_8: false,
        itf: false,
        maxi_code: false,
        micro_qr_code: false,
        pdf417: false,
        qr_code: true,
        rm_qr_code: false,
        upc_a: false,
        upc_e: false,
        linear_codes: false,
        matrix_codes: false,
      },
    };
  },
  onLoad() {},
  computed: {
    selectedBarcodeFormats() {
      return Object.keys(this.barcodeFormats).filter(
        (format) => this.barcodeFormats[format]
      );
    },
  },
  methods: {
    onCameraOn() {
      this.showScanConfirmation = false;
    },

    onCameraOff() {
      this.showScanConfirmation = true;
    },

    onError: console.error,
    async onDetect(detectedCodes) {
      console.log(detectedCodes);
      const result = await detectedCodes;
      console.log("🚀 ~ onDetect ~ result:", result);
      this.result = result.content;
      //   this.result = JSON.stringify(detectedCodes.map((code) => code.rawValue))
    },
    // async onDetect(detectedCodes) {
    //   console.log("🚀 ~ onDetect ~ detectedCodes:", detectedCodes, typeof detectedCodes)
    // //   const res = await detectedCodes()
    // //   console.log("🚀 ~ onDetect ~ res:", res)
    // //   this.result = JSON.stringify(detectedCodes.map((code) => code.rawValue))
    // //   his.paused = true
    // //   await this.timeout(500)
    // //   this.paused = false
    //   // ...
    // },
  },
};
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
  margin: 200rpx auto 50rpx auto;
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
