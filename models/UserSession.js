const mongoose = require('mongoose');

const userSessionSchema = new mongoose.Schema({
    Id: {
        type: String,
        default:''
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
})
const userSession = mongoose.model('userSession', userSessionSchema);

module.exports = userSession;