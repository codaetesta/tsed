/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "agenda.svg",
    "revision": "1cdb3ee54460e1b37b1a23fae0ffdb49"
  },
  {
    "url": "ajv_logo.png",
    "revision": "0eea34da468eeeeacb1203d940e9956d"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "ef32096f0356bcc24fbb05923de934a8"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "3a696e8f3f93851050d8cf718dcbab79"
  },
  {
    "url": "apollo-graphql-1.svg",
    "revision": "9086960b926427485f6647fa421c677d"
  },
  {
    "url": "apollo-graphql-compact.svg",
    "revision": "393e9a672ee8cc3d6c93dcee8aa29e33"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "2bd360921c440880ed011e5ce177d7b1"
  },
  {
    "url": "assets/fonts/boxicons.afbad0fa.eot",
    "revision": "afbad0fa2cbbb785e034ae3e3bb328ff"
  },
  {
    "url": "assets/fonts/boxicons.deea39cb.woff",
    "revision": "deea39cb9dc8b17f9d640014ca2f87af"
  },
  {
    "url": "assets/fonts/boxicons.f46ca69e.ttf",
    "revision": "f46ca69e63f9c5f080203c3f510b4110"
  },
  {
    "url": "assets/img/boxicons.ac68c5be.svg",
    "revision": "ac68c5bee58c439e4c2851555d41be8b"
  },
  {
    "url": "assets/img/client-controllers.6d7f6640.png",
    "revision": "6d7f6640fb5f9de3911e71b7634caecd"
  },
  {
    "url": "assets/img/hooks-in-sequence.c4f287f6.png",
    "revision": "c4f287f6e61aca7297cf49a55116100b"
  },
  {
    "url": "assets/img/invalid.41be58de.svg",
    "revision": "41be58deae51feff0d52b23ba55267bb"
  },
  {
    "url": "assets/img/middleware-in-sequence.b2978130.svg",
    "revision": "b2978130bdc2fbb8c92f888dcbe8bfc5"
  },
  {
    "url": "assets/img/middleware.0ddb812b.png",
    "revision": "0ddb812b6c3d3083902afed18cb4146b"
  },
  {
    "url": "assets/img/npm.68b58fb3.svg",
    "revision": "68b58fb3ec9c563fa1202fb343d3ba7e"
  },
  {
    "url": "assets/img/official.be85e546.svg",
    "revision": "be85e546a3f076756c6671ddfac0b43c"
  },
  {
    "url": "assets/img/providers.3d1881c2.png",
    "revision": "3d1881c2ed84ba491696de4958c386bf"
  },
  {
    "url": "assets/img/signin-page.e5cb5f7e.png",
    "revision": "e5cb5f7e90677a8f1f5633b737a1e740"
  },
  {
    "url": "assets/img/socketio.f76a6256.png",
    "revision": "f76a6256e475dd5e50524a65f64d87ce"
  },
  {
    "url": "assets/img/star.e7194b5b.svg",
    "revision": "e7194b5b7057b26406a5d0c9fc9707a8"
  },
  {
    "url": "assets/img/templating-engine.041778e2.png",
    "revision": "041778e2d51bbcd3b5ec1dcff0c6f955"
  },
  {
    "url": "assets/img/valid.36052327.svg",
    "revision": "360523273738006fb14d43ef3cc082ea"
  },
  {
    "url": "assets/js/10.89acdd8a.js",
    "revision": "45c3847f549eea913e11a0df4817aefa"
  },
  {
    "url": "assets/js/11.38e29daf.js",
    "revision": "2416a95c4f61325d4843b609a2be6e21"
  },
  {
    "url": "assets/js/12.b377fd5d.js",
    "revision": "445ad0ec702884678c06e82961191ace"
  },
  {
    "url": "assets/js/13.418a4808.js",
    "revision": "0310cd8b6b16d544fd421d9af606c440"
  },
  {
    "url": "assets/js/14.bc73c7eb.js",
    "revision": "07cbee8cf8171da06abbc2a45f870c0a"
  },
  {
    "url": "assets/js/15.b5189716.js",
    "revision": "a0ee12ba5ffb57598788b8c323aaea21"
  },
  {
    "url": "assets/js/16.e2d0e567.js",
    "revision": "0b244f990d32f1af78aba4fd6bd62b16"
  },
  {
    "url": "assets/js/17.eb042110.js",
    "revision": "392f4165121b5067363e633682d9583a"
  },
  {
    "url": "assets/js/18.c528e82c.js",
    "revision": "df5e3eb5b6a69b905b28f9309a9299fd"
  },
  {
    "url": "assets/js/19.5b083b4d.js",
    "revision": "1a3b2351d68fa4f9e6425368874dbb53"
  },
  {
    "url": "assets/js/20.84f5323b.js",
    "revision": "e8104c34eb5e9d5a73248c59ebb8a31a"
  },
  {
    "url": "assets/js/21.68fbb39a.js",
    "revision": "9a82fb800ee735756f201d617faf3273"
  },
  {
    "url": "assets/js/22.c83726af.js",
    "revision": "f8c08a9e007e5e003aaf1d7e6e36b2ef"
  },
  {
    "url": "assets/js/23.6a708bc9.js",
    "revision": "b0803d84d1c2be4ebb843e92497000ea"
  },
  {
    "url": "assets/js/24.934a7424.js",
    "revision": "af58b6cd85e81f029ebac227d14434c5"
  },
  {
    "url": "assets/js/25.b3e28879.js",
    "revision": "895b1e485ae3d10fa472d8cf213337f5"
  },
  {
    "url": "assets/js/26.d5812cf3.js",
    "revision": "fab2c24113db94fc3d26e4216482ef08"
  },
  {
    "url": "assets/js/27.c1718a6f.js",
    "revision": "d343444948ced53e40418739ba68e581"
  },
  {
    "url": "assets/js/28.204bd45b.js",
    "revision": "6a7899690d70f6eb29d15f0684492aa9"
  },
  {
    "url": "assets/js/29.46f39ac6.js",
    "revision": "fcc6db4785bde09f6c30381f49069ce3"
  },
  {
    "url": "assets/js/3.fd9e0ddd.js",
    "revision": "ad6b5aef20c0837393c8b0275956a023"
  },
  {
    "url": "assets/js/30.3a7502fb.js",
    "revision": "ff9fc2bcc5462a87d8e316e83952d47b"
  },
  {
    "url": "assets/js/31.3efc63bc.js",
    "revision": "8e117909132965e540c4f9de39545571"
  },
  {
    "url": "assets/js/32.f73221c2.js",
    "revision": "39b6ae0e22a82c5b3b169e29bef6dbff"
  },
  {
    "url": "assets/js/33.0cd67fb6.js",
    "revision": "ec07bb1cdaaefdbc9ed360962bd66f82"
  },
  {
    "url": "assets/js/34.95940ca0.js",
    "revision": "2780eac8d856e3f9bc18d608f28909f8"
  },
  {
    "url": "assets/js/35.ae87681d.js",
    "revision": "9c37afd4284bc0fc517f4a00a9ff7da2"
  },
  {
    "url": "assets/js/36.330a84ee.js",
    "revision": "05acda0f1ef16a96f72f99fc5230e050"
  },
  {
    "url": "assets/js/37.d50674b5.js",
    "revision": "84b3a28a8d5114f0f4ff9c3401d8d1ca"
  },
  {
    "url": "assets/js/38.6adf02ae.js",
    "revision": "a3d65d7ac5dc23883ee7c4410c66d090"
  },
  {
    "url": "assets/js/39.5972b109.js",
    "revision": "e6f1d2446f00d72baaf26d56204387e7"
  },
  {
    "url": "assets/js/4.b1d855eb.js",
    "revision": "408e300a7acb61b36d18a3b4db66b9fd"
  },
  {
    "url": "assets/js/40.7e6e9af7.js",
    "revision": "9b3f468516e1bab1764b04f547b788e1"
  },
  {
    "url": "assets/js/41.653f2a21.js",
    "revision": "8c983ca08b0426d543b4303fc64e07ed"
  },
  {
    "url": "assets/js/42.e35200fa.js",
    "revision": "f3f7a3753dddcb5c35f7122d8b7657fc"
  },
  {
    "url": "assets/js/43.4b2dd54a.js",
    "revision": "a2b3a8fde8fa67ac6a140daf746902ca"
  },
  {
    "url": "assets/js/44.abbe5153.js",
    "revision": "a2449c77b3c72886e4c0d103af6e7f9c"
  },
  {
    "url": "assets/js/45.22f8fe55.js",
    "revision": "a3dc6d3265cd6b30ac2c67ded47297d7"
  },
  {
    "url": "assets/js/46.c28bd0ca.js",
    "revision": "e791f3094c7a59eadb1b311295b1b663"
  },
  {
    "url": "assets/js/47.b95bbf92.js",
    "revision": "aad7da4422c4ccdcdf16b945e78a53ad"
  },
  {
    "url": "assets/js/48.4418ec41.js",
    "revision": "7c62ad33356c2f8c75c3127211fb65e8"
  },
  {
    "url": "assets/js/49.dda61fdb.js",
    "revision": "971c92abeeb009b49d77c46c631aefb2"
  },
  {
    "url": "assets/js/5.a91297fe.js",
    "revision": "98f738202815bfcc3041c21aefdb0b4e"
  },
  {
    "url": "assets/js/50.4f4df2d1.js",
    "revision": "2d0eb3f6afd5e160e9f27e6e1803c324"
  },
  {
    "url": "assets/js/51.bd733669.js",
    "revision": "b652b570a2a1c618582c874a8f55f358"
  },
  {
    "url": "assets/js/52.922f159b.js",
    "revision": "2a034b82d57f22ac8e6c5d8baa1a0f90"
  },
  {
    "url": "assets/js/53.1d99e4bd.js",
    "revision": "1b1ac0416269250c84116a15caf8aca3"
  },
  {
    "url": "assets/js/54.2b596361.js",
    "revision": "04118da342498656e33f8ff3e1092a45"
  },
  {
    "url": "assets/js/55.fd4f85a7.js",
    "revision": "ee4c41ca5d26874247b5b2fbe8e527d7"
  },
  {
    "url": "assets/js/56.313792c8.js",
    "revision": "1373475d19192d2f04f6989fd16d7233"
  },
  {
    "url": "assets/js/57.79925fb9.js",
    "revision": "676d73e0d9ac88d207ec5245e5038032"
  },
  {
    "url": "assets/js/58.ff81f0e4.js",
    "revision": "2f29b23838faa4a3a75b2ed2a02d466d"
  },
  {
    "url": "assets/js/59.e20b26a0.js",
    "revision": "8c38e93a5f27ee58f39674e10bcd9d2f"
  },
  {
    "url": "assets/js/6.bfeabb6a.js",
    "revision": "01d402fcf6fdecf11d051362474294dc"
  },
  {
    "url": "assets/js/60.62063f32.js",
    "revision": "86d32f67827b00362ec3ce73d5b11dc0"
  },
  {
    "url": "assets/js/61.2aa172b8.js",
    "revision": "4000d78a4cdb6a59356524e938a78f44"
  },
  {
    "url": "assets/js/62.0b01b130.js",
    "revision": "6b8c3fe8f7177ac7f47384e3d7a3adbe"
  },
  {
    "url": "assets/js/63.d78bc64e.js",
    "revision": "b690b7414d0372029b96e257c12a27a1"
  },
  {
    "url": "assets/js/64.3a1da26a.js",
    "revision": "5697c7c6e87a5ae7d7e62f0ee2f2b046"
  },
  {
    "url": "assets/js/65.288c5944.js",
    "revision": "eefe6c510d7089d327788cc35c4b4c5c"
  },
  {
    "url": "assets/js/66.365506e5.js",
    "revision": "b2b4a7f3a48b3150786f26a6a8558e5b"
  },
  {
    "url": "assets/js/67.f919ea54.js",
    "revision": "72b49d911f6c096e5fa3824ac8d6aded"
  },
  {
    "url": "assets/js/68.a6ff5fe8.js",
    "revision": "f85d241b70ee07c5e84df042210e1b05"
  },
  {
    "url": "assets/js/69.7fbf6372.js",
    "revision": "985c2a22eec124647e292758391c6881"
  },
  {
    "url": "assets/js/7.88f63684.js",
    "revision": "3171df84a6429dfd201b3b601b1bcf3a"
  },
  {
    "url": "assets/js/70.e9dec90f.js",
    "revision": "84d87cc35bcce6f256589eda39586470"
  },
  {
    "url": "assets/js/71.ae333b71.js",
    "revision": "71cda950869c86e55316ebc3f55f1538"
  },
  {
    "url": "assets/js/72.5ed1d957.js",
    "revision": "4949ccb8cbae6ffd84a429e450ff3141"
  },
  {
    "url": "assets/js/73.9f30420e.js",
    "revision": "21b7811e08acbd6329b4ac005391ac91"
  },
  {
    "url": "assets/js/74.b933aaf8.js",
    "revision": "4fcf903839f2652649ba04d7c9308008"
  },
  {
    "url": "assets/js/75.9233bf93.js",
    "revision": "e5c0d2020c03793f049db78ca906863b"
  },
  {
    "url": "assets/js/76.07169d50.js",
    "revision": "c2a16fecc38182295bd741fe1d604b10"
  },
  {
    "url": "assets/js/77.4f6e8f14.js",
    "revision": "272666e0c4ed198ddd6b6973d47a1d6f"
  },
  {
    "url": "assets/js/8.a8d9172b.js",
    "revision": "46535dd7c9f0c3fba56b057dcacb21b3"
  },
  {
    "url": "assets/js/9.c899666b.js",
    "revision": "44d8ebed9335f377dc7184897c74732f"
  },
  {
    "url": "assets/js/app.16ed0c60.js",
    "revision": "e546b7970b7aad8fb5825d0bd6660c33"
  },
  {
    "url": "assets/js/vendors~docsearch.28354384.js",
    "revision": "572f8b14b7568d974a010bc0441d7041"
  },
  {
    "url": "aws.png",
    "revision": "0c234b5d57f00ca68dfb3b3cfc5e8f51"
  },
  {
    "url": "azure.png",
    "revision": "2ab4ccd7a23e22b54e90ddbda5f7e480"
  },
  {
    "url": "babel.svg",
    "revision": "1441142edc8c8eb20f1a38bf22fb26e8"
  },
  {
    "url": "bg.svg",
    "revision": "627266770d0e7f34fa0a178513013a52"
  },
  {
    "url": "codesanbox.svg",
    "revision": "4b5fd814b19006c77a916e84ddea5732"
  },
  {
    "url": "codesandbox.svg",
    "revision": "7aaaef45844803b13cab0883c05d09b1"
  },
  {
    "url": "configuration.html",
    "revision": "144a25e45ba88136c2e2342a2af978b0"
  },
  {
    "url": "contributing.html",
    "revision": "42fdeedc79eb462c471384c6e3dbc0e4"
  },
  {
    "url": "docs/authentication.html",
    "revision": "66478d0236ad061e2696ec36b4cf4a67"
  },
  {
    "url": "docs/cache.html",
    "revision": "412412db91a3d24d544c340680d0970e"
  },
  {
    "url": "docs/command.html",
    "revision": "1c987048d37df34cd49b41754fe0c959"
  },
  {
    "url": "docs/configuration.html",
    "revision": "69e10b9e462a8c200262438d6a678ef7"
  },
  {
    "url": "docs/controllers.html",
    "revision": "c40689b1404261f2adab5c4c48ab61fa"
  },
  {
    "url": "docs/converter.html",
    "revision": "f604d03504a9f93d2f91c1dd562e3306"
  },
  {
    "url": "docs/custom-endpoint-decorators.html",
    "revision": "2db7036c0f70af119c79ed73342c9f94"
  },
  {
    "url": "docs/custom-providers.html",
    "revision": "ce8b2a2344521a6c715329b4a1baae3d"
  },
  {
    "url": "docs/exceptions.html",
    "revision": "60530529d217093026fb2e427da0abe6"
  },
  {
    "url": "docs/factory.html",
    "revision": "e18526233ef66187c08b9bf31aff233b"
  },
  {
    "url": "docs/hooks.html",
    "revision": "aa1c18884f27157bad3d84407b7554c5"
  },
  {
    "url": "docs/injection-scopes.html",
    "revision": "062dab121558632bd87b306299e4164c"
  },
  {
    "url": "docs/interceptors.html",
    "revision": "22f65c5db104e717819f6b1ceda76b02"
  },
  {
    "url": "docs/migration.html",
    "revision": "2c942fd2b8d52b05e853ca9389d80952"
  },
  {
    "url": "docs/not-found-page.html",
    "revision": "fc75cc1c096abb528ed92f58e3c77802"
  },
  {
    "url": "docs/request-context.html",
    "revision": "1362e5a8d014f4290a4217515e5279fd"
  },
  {
    "url": "elastic-logstash.svg",
    "revision": "39e646a7f5e6fc7cf9e57502a11e77b1"
  },
  {
    "url": "express.png",
    "revision": "177bb6f67c4d179bc2145b206f751fd7"
  },
  {
    "url": "expressjs.svg",
    "revision": "91157328ea3140cff26e66386d673998"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "4cf47eff0c0d0d7c1a1eca0593bd4508"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "67207fa4b833919cd8e16af9d1e62733"
  },
  {
    "url": "getting-started/cli-selected-features.png",
    "revision": "4606aca078eaa020e89aa7b204ff51db"
  },
  {
    "url": "getting-started/migration-workflow.png",
    "revision": "f5b2334a39cac925d999570f210446a9"
  },
  {
    "url": "getting-started/server-start.png",
    "revision": "6e8f62a51aec9106afd4c316fb496e3e"
  },
  {
    "url": "graphql.svg",
    "revision": "6270a2d4757a839d4653c02f3db32e2f"
  },
  {
    "url": "hero-bg.svg",
    "revision": "86a81d807a0434005e193f16ecab9298"
  },
  {
    "url": "ioredis.svg",
    "revision": "0460cb8db3e30ae96d00f9d4f82dd029"
  },
  {
    "url": "jest.svg",
    "revision": "131690707f4bef04f0fda37cf3ec6ef5"
  },
  {
    "url": "keycloak_icon.svg",
    "revision": "551d4a112f4544564b7b5d0ad652b5c2"
  },
  {
    "url": "keycloak.svg",
    "revision": "f50bd48e8aaf5f7f9d4578c0054e5160"
  },
  {
    "url": "koa.svg",
    "revision": "62af385028c883ad8d31da5aae232ac7"
  },
  {
    "url": "logentries.svg",
    "revision": "c2b01b56058d4d8642d6bc1ac2d445ac"
  },
  {
    "url": "loggly.svg",
    "revision": "e714a8ff3baf7e366246769e6b727b3e"
  },
  {
    "url": "meetup.png",
    "revision": "4a524099d42afcea50615302d9877c6b"
  },
  {
    "url": "mochajs.svg",
    "revision": "0493ae31c60109eadf99e902b2711bf7"
  },
  {
    "url": "mongoose.png",
    "revision": "baad9b475e92ad28a84e1c40a38fd551"
  },
  {
    "url": "nexus.png",
    "revision": "37d830678140b080ad13a1e997b0c0c5"
  },
  {
    "url": "our-team.png",
    "revision": "18ee30a2e0dd427260def769f7961225"
  },
  {
    "url": "package.svg",
    "revision": "2b5870d739dfe062a4e4ebb8061e102e"
  },
  {
    "url": "partners/artips.png",
    "revision": "60e537b48744da2822063020756a95da"
  },
  {
    "url": "partners/schnell.svg",
    "revision": "da6070c91af67360f90bb1f004e0e461"
  },
  {
    "url": "passportjs.png",
    "revision": "3c4e380e6c0da1da329b6d780f543125"
  },
  {
    "url": "prisma-2.png",
    "revision": "722446ffb492c2e357a12c78f07ff0bc"
  },
  {
    "url": "prisma-2.svg",
    "revision": "ece734638af321cb392e377d43a632e3"
  },
  {
    "url": "prisma-3.svg",
    "revision": "973b701601ce879e4880a88d218a7248"
  },
  {
    "url": "rabbitmq.svg",
    "revision": "0e43817b743528cfac9f67ad36fb0b35"
  },
  {
    "url": "rapid7.svg",
    "revision": "268047f0fbe17dac944e5648544d8134"
  },
  {
    "url": "react.png",
    "revision": "1e9d10a77c464d818e7c6cd3c5a3f259"
  },
  {
    "url": "screens/opencollective-tiers.png",
    "revision": "55d24c1bd8b74a097c7e2f67619cd17b"
  },
  {
    "url": "serverless.png",
    "revision": "52572b708bd3c2e46a221e157e9debdb"
  },
  {
    "url": "serverless.svg",
    "revision": "832bb3164714db34fc2480a09ed8b0f6"
  },
  {
    "url": "slack.svg",
    "revision": "4db20049c6e466d3d4b34bbc7b6edc3e"
  },
  {
    "url": "socket-io.png",
    "revision": "4cb9ecf17526b09e164702939c0018d0"
  },
  {
    "url": "socketio.png",
    "revision": "fba517c4c075d458b826f2bac55c41e8"
  },
  {
    "url": "socketio.svg",
    "revision": "5dc4ade3acf6b3836ab45becc3d07fef"
  },
  {
    "url": "sponsors.svg",
    "revision": "3cd1255c162104e46a0f046a301554b6"
  },
  {
    "url": "stripe.svg",
    "revision": "2d7f562527f8630a7f0eb4a9fbd71324"
  },
  {
    "url": "swagger.svg",
    "revision": "ee5300f60d0ba789478ec58a5349d10d"
  },
  {
    "url": "tsed-og.png",
    "revision": "04d5349862d2a9c8325ab2c330aa9c86"
  },
  {
    "url": "tsed.png",
    "revision": "bcd670cd3906e592683e60465feab493"
  },
  {
    "url": "typegraphql.png",
    "revision": "bec26ca21b76b18a76253d8df2ca1db3"
  },
  {
    "url": "typeorm.png",
    "revision": "c3f8c53e67ffb9100ddc47f14adb5b10"
  },
  {
    "url": "typescript.png",
    "revision": "dcb5077d586b4dc51b40a03d760c18af"
  },
  {
    "url": "vuejs.png",
    "revision": "1906510af222740d24066f8f02ec8909"
  },
  {
    "url": "webpack.svg",
    "revision": "9cf70b1acb9c5a67d656085ec29fbf3f"
  },
  {
    "url": "zenika.png",
    "revision": "f7aa5b93b25d17094b972ee05c366825"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
