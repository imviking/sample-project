const express = require('express')
const router = express.Router()
const userController = require("../controller/user.js")
console.log('user routes')
router.get('/userList',userController.getUserList)


module.exports = router