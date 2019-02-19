const capitalize = require('lodash.capitalize')

const signupChannels =  ['WEB', 'ZINIAO', 'KANKAN', 'AMZ123', 'SELLERGROWTH', 'SEO1', 'SEM1', 'WECHAT1', 'WECHAT2', 'AMAZON', 'EBAY']

module.exports = signupChannels.map(item => ({ key: item, value: capitalize(item)} ))