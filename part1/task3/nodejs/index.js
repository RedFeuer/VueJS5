import axios from 'axios'
import dns from 'node:dns'

dns.setDefaultResultOrder('ipv4first')

async function main() {
  try {
    const response = await axios.get('https://json.geoiplookup.io/', {
      timeout: 30000,
      validateStatus: () => true,
      headers: {
        Accept: 'application/json',
        'User-Agent': 'Mozilla/5.0 lab5-node-axios'
      }
    })

    console.log('Запрос выполнен')
    console.log('Status:', response.status)
    console.log('Status text:', response.statusText)
    console.log('Content-Type:', response.headers['content-type'])

    console.log('\nResponse data:')
    console.log(response.data)
  } catch (error) {
    console.log('Ошибка запроса')
    console.log('Name:', error.name)
    console.log('Message:', error.message)

    if (error.code) {
      console.log('Code:', error.code)
    }

    if (error.response) {
      console.log('Status:', error.response.status)
      console.log('Headers:', error.response.headers)
      console.log('Data:', error.response.data)
    }
  }
}

main()