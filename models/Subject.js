const { model, Schema } = require('mongoose');

const subjectSchema = new Schema({
    picture: String,
    subjectName: String,
    username: String,
    createdAt: String,
    votes: [
        {
            voterName: String,
            createdAt: String,
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }

});

module.exports = model('Subject', subjectSchema);