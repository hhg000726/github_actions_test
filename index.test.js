const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('Hello Node.js!');
});

describe('GET /', () => {
    it('should return "Hello Node.js!"', async () => {
        const res = await request(app).get('/');
        expect(res.status).toBe(200);
        expect(res.text).toBe('Hello Node.js!');
    });
});
