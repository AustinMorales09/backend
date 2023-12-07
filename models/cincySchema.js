//Schema
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cincySchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    imgURL:{
        type: String,
      
    },
    description: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    hours: {
        type: String,
        required: false
    },

    number: {
        type: String,
        required: false
    },

    rating: {
        type: Number,
        required: true
    },

    pricing: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: true
    },
    website: {
        type: String,
    },
    seating: {
        type: String,
    },
    events: {
        type: String,
    },
    happyHour: {
        type: String,
        required: false
    },
    onlineShop: {
        type: String
    },
    subscription: {
        type: String
    },
    servingOptions: {
        type: String
    },
    kitchenHours: {
        type: String
    },
    giftcards: {
        type: String
    },
    travelChoice: {
        type: String
    },
});


module.exports = mongoose.model('Cincy', cincySchema);