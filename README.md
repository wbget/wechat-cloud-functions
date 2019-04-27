# 微信小程序 云函数

## 二维码生成

      const { result } = yield Taro.cloud.callFunction({
        name: 'qrcode',
        data: {
          path: any/files/name.png,
          obj: { ke1: 123, key2:"513" }
        }
      });
