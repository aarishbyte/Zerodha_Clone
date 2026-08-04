const { Schema } = require("mongoose");

const HoldingsSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    
});

HoldingsSchema.index(
        {user: 1, name: 1},
        {unique: true}
    );



module.exports = {HoldingsSchema};