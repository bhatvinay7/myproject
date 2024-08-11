const { genSalt, hash, compare } = require('bcrypt');
const User = require('../models/Sign.model.js');

const saltRounds = 10;

const getSignin = async (req, res) => {
  const useremailid = req.body.email;
  const userpassword = req.body.password;
  try {
    const existingUser = await User.find({ emailId: useremailid });
    if (existingUser.length === 0) {
      genSalt(saltRounds, (err, salt) => {
        if (err) {
          return res.status(500).json({ message: 'Try again, unable to sign in' });
        }
        hash(userpassword, salt, async (err, hashedPassword) => {
          if (err) {
            return res.status(500).json({ message: 'Try again, unable to sign in' });
          }
          const newUser = new User({ emailId: useremailid, password: hashedPassword });
          try {
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
          } catch (saveErr) {
            res.status(500).json({ message: 'Error saving user' });
          }
        });
      });
    } else {
      res.status(409).json({ message: 'Email ID already exists' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Try again, unable to sign in' });
  }
};

const login = async (req, res) => {
  const userpassword = req.body.password;
  const useremailid = req.body.email;
  try {
    const user = await User.find({ emailId: useremailid });
    if (user.length === 0) {
      res.status(404).json({ message: 'User not found, please sign in' });
    } else {
      compare(userpassword, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({ message: 'Incorrect password' });
        }
        if (result) {
          res.status(200).json(user);
        } else {
          res.status(401).json({ message: 'Incorrect password' });
        }
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getSignin, login };
