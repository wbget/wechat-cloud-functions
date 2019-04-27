const cloud = require('wx-server-sdk');
cloud.init();
const QRCode = require('qrcode');
const qs = require('qs');

exports.main = async (event, context) => {
  try {
    const { path, obj, options } = event;
    // const { OPENID, APPID } = cloud.getWXContext();
    const parseString = qs.stringify({ ...obj }, options);
    const url = await QRCode.toDataURL(parseString);
    const buffer = Buffer.from(
      url.replace(/^data:image\/\w+;base64,/, ''),
      'base64'
    );
    const upload = await cloud.uploadFile({
      cloudPath: path,
      fileContent: buffer
    });
    return upload.fileID;
  } catch (err) {
    console.log(err);
    return err;
  }
};
