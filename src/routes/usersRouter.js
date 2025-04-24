import express from 'express';
import User from '../models/userModel.js';
import { nanoid } from 'nanoid';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import checkAuthentication from '../middleware/checkAuthentication.js';

const router = express.Router();

router.get('/', checkAuthentication, async (req, res) => {
  const users = await User.find().exec();
  console.log(users);
  res.send({ users: users});
});

router.post('/', async (req, res) => {
  
  const oid = nanoid();
  
  try {
    const check = await User.findOne({ emailAddress });
    if (!check) {
      const user = new User({ oid , ...req.body});
      user.save();
      res.status(201).json(user);
    } else {
      res.status(403).json({ status: 403, message: 'User already exists.'})
    }
  } catch(err) {
    throw(err);
  }

});

router.post('/auth', async (req, res) => {
  try {
    const { emailAddress, password } = req.body;
    const user = await User.findOne({ emailAddress });
    if (!user) {
      res.status(401).json({ error: 'Authentication failed. Email not found.' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Authentication failed. Password incorrect.' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: '12h',
    });
    res.status(200).json({ token });
  } catch (e) {
    res.status(500).json({ error: 'Login failed' });
  }
});

router.get('/:userId', checkAuthentication, async (req, res) => {});

router.put('/:userId', checkAuthentication, async (req, res) => {});

router.delete('/:userId', checkAuthentication, async (req, res) => {});

export default router;