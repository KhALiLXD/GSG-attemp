const express = require('express')

const router = express.Router()
const {getAllItems,addItem} = require('./itemController')

router.get('/',getAllItems)
router.post('/',addItem)

module.exports = router