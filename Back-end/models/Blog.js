
const mongose = require("mongoose")

const blogSchema = new mongose.Schema({
    _UserId: {
        type: mongose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title:{ type: String, required: true},
    author:{ type: String, required: true},
    excerpt:{ type: String, required: true},
    image:{type: String},
    createdAt:{ type: Date, default: Date.now }
})

module.exports = mongose.model('Blog',blogSchema,'blog');