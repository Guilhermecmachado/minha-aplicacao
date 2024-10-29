// index.test.js
const request = require('supertest');
const app = require('./index'); // Agora o app pode ser importado diretamente

test('deve responder com Hello World!teste', async () => {
  const response = await request(app).get('/');
  expect(response.text).toBe('Hello World!');
});
