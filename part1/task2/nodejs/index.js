import axios from 'axios'

async function main() {
  try {
    const response = await axios.get('https://vk.com', {
      timeout: 10000,
      maxRedirects: 5,
      validateStatus: () => true,
      headers: {
        'User-Agent': 'Mozilla/5.0 lab5-node-axios'
      }
    })

    console.log('Запрос выполнен')
    console.log('Status:', response.status)
    console.log('Status text:', response.statusText)
    console.log('Content-Type:', response.headers['content-type'])
    console.log('Server:', response.headers['server'])

    console.log('\nФрагмент ответа:')
    console.log(String(response.data).slice(0, 500))
  } catch (error) {
    console.log('Ошибка запроса')
    console.log('Name:', error.name)
    console.log('Message:', error.message)

    if (error.response) {
      console.log('Status:', error.response.status)
      console.log('Headers:', error.response.headers)
    }
  }
}

main()