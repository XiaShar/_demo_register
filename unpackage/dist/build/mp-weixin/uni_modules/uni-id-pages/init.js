<<<<<<< HEAD
"use strict";require("../../common/vendor.js").Ls.importObject("uni-id-co",{customUI:!0});
=======
"use strict";const e=require("../../common/vendor.js"),o=require("./config.js"),i=e.Ls.importObject("uni-id-co",{customUI:!0}),{loginTypes:n,debug:s}=o.config;exports.uniIdPageInit=async function(){if(s){const{supportedLoginType:e}=await i.getSupportedLoginType();console.log("supportedLoginType: "+JSON.stringify(e));const o={smsCode:"mobile-code",univerify:"univerify",username:"username-password",weixin:"weixin",qq:"qq",xiaomi:"xiaomi",sinaweibo:"sinaweibo",taobao:"taobao",facebook:"facebook",google:"google",alipay:"alipay",apple:"apple",weixinMobile:"weixin"},s=n.filter((i=>!e.includes(o[i])));s.length&&console.error(`错误：前端启用的登录方式:${s.join("，")};没有在服务端完成配置。配置文件路径："/uni_modules/uni-config-center/uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json"`)}e.Ls.database().on("error",(function({code:e,message:o}){})),e.Ls.onRefreshToken&&e.Ls.onRefreshToken((()=>{e.index.getPushClientId&&e.index.getPushClientId({success:async function(e){const o=e.cid;await i.setPushCid({pushClientId:o})},fail(e){}})}))};
>>>>>>> d53ff959617b4b38dfdf7df7be52bcac881d5660
