const express = require('express')
const {
    createAttraction,
    // getAttraction,
    getAttractions,
} = require('../controller/attractionsController.js')


const router = express.Router()


// GET all attractions
router.get('/', getAttractions)

// GET a single attraction
// router.get('/:category', getAttraction)

// Post a attraction
router.post('/', createAttraction)


module.exports = router