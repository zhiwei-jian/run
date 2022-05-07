/*
 * Copyright © 2016-2021 Dell Inc. or its subsidiaries.
 * All Rights Reserved.
 */
const PROXY_CONFIG = [
  {
    // add your endpoint prefix(es) below
    context: [
      '/ciq',
      '/logout'
    ],
    // configure the space you want to hit there
    // target: 'https://cloud3deviiq-iiq-api-gateway.r3.pcf.dell.com/',
    target: 'https://intiiq-iiq-api-gateway.r3.pcf.dell.com/',
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    headers: {
      uid: '1242245',
      mail: 'a@a.com',
      emcidentitytype: 'E'
    }
  }
];

module.exports = PROXY_CONFIG;
