// const pool = require('../lib/utils/pool');
// const setup = require('../data/setup');

const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../lib/app');

describe('Bookings API routes', () => {
  beforeEach(() => {
    const url = process.env.MONGODB_URI;
    mongoose.connect(url, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
  });

  test('updates a user email and username', async () => {

    const user = await request(app)
      .put('/api/v1/users/update')
      .send({
        username:"theTestUserFromTheTest",
        email:"testUserFromTest@gmail.com"
      })
      .set('Cookie','session=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGE4MmE3MzAzMTk0OWFjNzE0ODBkMzMiLCJ1c2VybmFtZSI6InRoZVRlc3RVc2VyRnJvbVRoZVRlc3QiLCJlbWFpbCI6InRlc3RVc2VyRnJvbVRlc3RAZ21haWwuY29tIiwiY3JlYXRlZEF0IjoiMjAyMS0wNS0yMVQyMTo0NzozMS41MTRaIiwidXBkYXRlZEF0IjoiMjAyMS0wNS0yOFQwMTo0MjozMi4yMjJaIiwiX192IjowLCJpYXQiOjE2MjIxNjYzNjEsImV4cCI6MTYyMjI1Mjc2MX0.j6qSgYSpnIKrcVncHv66g4R9Lseh_-iHJHOAAUAzqHY')
      

      expect(user.body).toEqual({
        "__v": 0, 
        "_id": "60a82a73031949ac71480d33",
        "createdAt": "2021-05-21T21:47:31.514Z", 
        "email": "testUserFromTest@gmail.com", 
        "updatedAt": expect.any(String), 
        "username": "theTestUserFromTheTest"
      })
  });
});
