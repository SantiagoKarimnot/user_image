const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user_id: {
        type: String,
    },
    profileImg: {
        type: String
    }
},{
    collection: 'images'
})

module.exports = mongoose.model('Images', imageSchema);