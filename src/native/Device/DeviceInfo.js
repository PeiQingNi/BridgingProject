import {NativeModules} from 'react-native';

const DeviceInfo = NativeModules.DeviceInfoManager;

// todo: 通过常量 获取原生数据
function getConstants() {
  const deviceWidth = DeviceInfo.deviceWidth;
  const deviceHeight = DeviceInfo.deviceHeight;
  const iPhoneName = DeviceInfo.iPhoneName;
  const systemName = DeviceInfo.systemName;
  const systemVersion = DeviceInfo.systemVersion;
  const batteryLevel = DeviceInfo.batteryLevel;
  console.log('deviceWidth =>', deviceWidth);
  console.log('deviceHeight =>', deviceHeight);
  console.log('iPhoneName =>', iPhoneName);
  console.log('systemName =>', systemName);
  console.log('systemVersion =>', systemVersion);
  console.log('batteryLevel =>', batteryLevel);

  return {
    deviceWidth,
    deviceHeight,
    iPhoneName,
    systemName,
    systemVersion,
    batteryLevel,
  };
}

// todo: 通过回调方法 获取原生数据
function getDeviceWidth() {
  return new Promise(resolve => {
    DeviceInfo.getDeviceWidth(item => {
      console.log('width =>', item);
      resolve(item);
    });
  });
}

function getDeviceHeight() {
  return new Promise(resolve => {
    DeviceInfo.getDeviceHeight(item => {
      console.log('height =>', item);
      resolve(item);
    });
  });
}

// todo: 通过Promise 获取原生数据
async function getScreenWidth() {
  const width = await DeviceInfo.getScreenWidth();
  console.log('width ==>', width);
  return width;
}

async function getScreenHeight() {
  const height = await DeviceInfo.getScreenHeight();
  console.log('height ==>', height);
  return height;
}

async function getIphoneName() {
  const name = await DeviceInfo.getIphoneName();
  console.log('name =>', name);
  return name;
}

async function getSystemName() {
  const sysName = await DeviceInfo.getSystemName();
  console.log('sysName =>', sysName);
  return sysName;
}

async function getSystemVersion() {
  const version = await DeviceInfo.getSystemVersion();
  console.log('version =>', version);
  return version;
}

async function getBatteryLevel() {
  const level = await DeviceInfo.getBatteryLevel();
  console.log('level =>', level);
  return level;
}

export {
  getConstants,
  getDeviceWidth,
  getDeviceHeight,
  getScreenWidth,
  getScreenHeight,
  getIphoneName,
  getSystemName,
  getSystemVersion,
  getBatteryLevel,
};
