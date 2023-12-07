const Cincy = require('../models/cincySchema')
const mongoose = require('mongoose')

// get all workouts
const getAttractions = async (req, res) => {

    const attractions = await Cincy.find()

    res.status(200).json(attractions)
}

// get a single
const getAttraction = async (req,res) => {
    const {category} = req.params
    if(!mongoose.Types.ObjectId.isValid(category)){
       return res.status(404).json({error: 'No such workout'}) 
    }
    
    const cincy = await Cincy.findById(category)

    if(!cincy){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(cincy)
}


// create new workout
const createAttraction = async(req, res) => {
    const {name, imgURL, description, address, hours, number, rating, pricing, category, website, seating, events, happyHour, onlineShop, subscription, servingOptions, kitchenHours, giftcards, travelChoice}= req.body

    let emptyFields = []

    if(!name){
        emptyFields.push('name')
    }
    if(!imgURL){
        emptyFields.push('imgURL')
    }
    if(!description){
        emptyFields.push('description')
    }
    if(!address){
        emptyFields.push('address')
    }
    if(!hours){
        emptyFields.push('hours')
    }
    if(!number){
        emptyFields.push('number')
    }
    if(!rating){
        emptyFields.push('rating')
    }
    if(!pricing){
        emptyFields.push('pricing')
    }
    if(!category){
        emptyFields.push('category')
    }
    if(!website){
        emptyFields.push('website')
    }
    if(!seating){
        emptyFields.push('seating')
    }
    if(!events){
        emptyFields.push('events')
    }
    if(!happyHour){
        emptyFields.push('happyHour')
    }
    if(!onlineShop){
        emptyFields.push('onlineShop')
    }
    if(!subscription){
        emptyFields.push('subscription')
    }
    if(!servingOptions){
        emptyFields.push('servingOptions')
    }
    if(!kitchenHours){
        emptyFields.push('kitchenHours')
    }
    if(!giftcards){
        emptyFields.push('giftcards')
    }
    if(!travelChoice){
        emptyFields.push('travelChoice')
    }
    // if(emptyFields.length > 0){
    //     return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    // }

    // add doc to db
    try{
        // const category = req.cincy.category
        const attraction = await Cincy.create({name, imgURL, description, address, hours, number, rating, pricing, category, website, seating, events, happyHour, onlineShop, subscription, servingOptions, kitchenHours, giftcards, travelChoice})
        res.status(200).json(attraction)
    }catch (error){
        res.status(400).json({error: error.message})

    }
}

module.exports = {
    createAttraction,
    getAttractions,
    getAttraction,

}