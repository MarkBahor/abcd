const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    body: {
            type: String,
            require: true
        },
    image: {
                type: String,
                require: true
            }
});



const Profile = mongoose.model('profile', profileSchema);
module.exports = Profile;
