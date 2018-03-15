const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const userSession = require('../../models/UserSession');


//mongoose connection
const db = mongoose.connection;
mongoose.connect("mongodb://username:password@ds235328.mlab.com:35328/users");
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));




//create a User
router.post('/register', (req, res, next) => {

        const { body } = req;
        const {
            firstname,
            lastname,
            email,
            password
        } = body;
        
        if(!firstname) {
            return res.send({ message: 'Error: Enter a firstname' })
        }
        if(!lastname) {
            return res.send({ message: 'Error: Enter a lastname' })
        }
        if(!email) {
            return res.send({ message: 'Error: Enter an email' })
        }
        if(!password) {
            return res.send({ message: 'Error: Enter a password' })
        }
        // email verification
        User.find({

            email: email
            
        }, (err, existingUser) => {
            if (err) {
                console.log('here');
                return res.send({ message: 'Error: something went wrong' });

            } else if (existingUser.length > 0) {

                return res.send({ message: 'Error: Email is already taken' });
            }
            // store user in DB
            const newUser = new User();
            newUser.firstName = firstname;
            newUser.lastName = lastname;
            newUser.email = email;
            newUser.password = newUser.generateHash(password);
            
            newUser.save(()=>{

                if(err) {
                    return res.send({ message: 'Error: something went wrong' });
                }
                return res.send({ message: 'You are now signed up!' });
            })
        })
})  

router.post('/login', (req, res, next) =>{
    const { body } = req;
    const { password } = body;
    const { email } = body;

    User.find({
        email: email
    }, (err, users) => {
        if (err) {
            return res.send({ message: 'Error: Login failed' })
        }
        if (users.length !=1 ) {
            return res.send({ message: 'error' });
        }
        const user = users[0];
        if(!user.validPassword(password)) {
            return res.send({ message: 'wrong username or password' })
        }
        const UserSession = new userSession();
        UserSession.Id = user._id;
        UserSession.save((err, doc) => {
            if (err) {
                return res.send({ message: 'session broke' })
            }
            return res.send({ 
                message: 'signed in',
                token: doc._id })
        })
    })
}) 



module.exports = router;

