import axios from 'axios'

function ajax (url, data={}, method='GET') {
  let promise = new Promise((resolve, reject) => {
    if (method === 'GET') {
      let dataStr = ''
      for (let n in data) {
        dataStr += n + '=' + data[n] + '&'
      }
      dataStr = dataStr.slice(0, -1)
      if (dataStr !== '') {
        url = url + '?' + dataStr
      }
      axios.get(url)
          .then(res => {
            resolve(res.data)
          })
          .catch(res => {
            reject(res)
          })
    } else if (method === 'POST') {
      axios.post(url, data)
          .then(res => {
            resolve(res.data)
          })
          .catch(res => {
            reject(res)
          })
    }
  })
  return promise
}

export default ajax

