const axios = require('axios')
const resp = axios({
    url: 'https://api.binance.com/api/v3/ticker/price',
    params: {
      symbol: 'ETHUSDT'
    },
    method: 'get'
  }).then(res=>{
    console.log(res)
  })