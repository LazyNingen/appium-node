//client import
const wdio = require("webdriverio");


// 옵션 설정
const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    deviceName: "myphone",
    automationName: "UiAutomator2",
    udid: '192.168.105.85:5555' //변경
    bundleID: '	tv.twitch.android.app'
  }
};

async function main() {
  const client = await wdio.remote(opts);
  await client.deleteSession();
}

main();
