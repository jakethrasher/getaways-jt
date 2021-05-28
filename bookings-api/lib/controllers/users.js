const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Router } = require('express');
const User = require('../models/User');
const verifyToken = require('../utils/verify-token');

const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;

module.exports = Router()
  .post('/create', async (req, res, next) => {
   
    const password = bcrypt.hashSync(req.body.password, 10);
    try {
      const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password,
      });
      console.log(user);
      res.send(user);
    } catch (err) {
      next(err);
    }
  })
  .post('/login', async (req, res, next) => {
    try {
      const { token, user } = await User.authorize(req.body);

      res.cookie('session', token, {
        httpOnly: true,
        maxAge: 10000,
        // sameSite: 'Lax' | 'None' | 'Strict',
        // secure: true
      });

      res.send(user);
    } catch (err) {
      err.status = 401;
      next(err);
    }
  })
  .get('/logout', async (req, res, next) => {
    res.clearCookie('session');
    res
      .status(200)
      .json({ success: true, message: 'Logged out succcessfully!' });
  })
  .get('/:id', async (req, res, next) => {
    try {
      const user = await User.findOne({ _id: req.params.id });
      res.send(user);
    } catch (err) {
      next(err);
    }
  })
  .put('/update',verifyToken, async (req, res, next) => {
    const { username, email} = req.body
    
    try {
      const user = await User.findOneAndUpdate({
        _id:req.user.id
      },{
        username,
        email,
      },{
        new: true,
      })
  
      res.send(user);
    } catch (err) {
      next(err)
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const users = await User.find({});
      res.send(users);
    } catch (err) {
      next(err);
    }
  });
