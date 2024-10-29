// index.test.js
const request = require('supertest');
const express = require('express');
const app = require('./index'); // Se precisar exportar o app

test('deve responder com Hello World!teste', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello World!');
});
