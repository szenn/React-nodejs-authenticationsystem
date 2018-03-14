const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        default:''
    },
    lastName: {
        type: String,
        default:''
    },
    email: {
        type: String,
        default:''
    },
    password: {
        type: String,
        default:''
    }


});
    userSchema.methods.generateHash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };

    userSchema.methods.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

    const User = mongoose.model('User', userSchema);

    module.exports = User;