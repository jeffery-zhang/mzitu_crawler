const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

const requestUrl = 'http://mzitu.com/xinggan/'

function getPage(path, url) {
  const promise = axios.get(url).then(res => {
    const $ = cheerio.load(res);
    console.log($('.postlist li').find('img').attr('src'));
  })
}

getPage('', requestUrl)
