const mongoose=require('mongoose');

const EventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        data: Buffer,
        contentType: String
    },
    information: {
        type: [String],
        required: true
    },
    coordinators: {
        type: [String]
    },
    type: {
        type: String
    },
    organiser: {
        type: String
    },
    place: {
        type: String
    },

    date:{
        type:Date,
        default:Date.now
    },
    exp: {
        type: String,
        default: false
    }

},
    {
        timestamps: true

    }
)
const Events = mongoose.model("event", EventSchema);
module.exports= Events;