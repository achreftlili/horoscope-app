process.env.PORT = 3001;
const request = require('supertest');
const app = require('./app');

describe('GET /horoscope', () => {
  it('should return correct sign for valid date', async () => {
    const validDates = [
      ['2000-01-20', 'Aquarius'],
      ['2000-03-21', 'Aries'],
      ['2000-07-23', 'Leo'],
      ['2000-11-22', 'Sagittarius']
    ];

    for (const [date, sign] of validDates) {
      const res = await request(app).get('/horoscope').query({ birthdate: date });
      expect(res.statusCode).toBe(200);
      expect(res.body.horoscopeSign).toBe(sign);
    }
  });

  it('should return 400 for missing birthdate', async () => {
    const res = await request(app).get('/horoscope');
    expect(res.statusCode).toBe(400);
  });

  it('should return 400 for invalid date', async () => {
    const res = await request(app).get('/horoscope').query({ birthdate: '2000-31-20' });
    expect(res.statusCode).toBe(400);
  });
});