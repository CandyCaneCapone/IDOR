const express = require("express")
const router = express.Router()

const controller = require("../controllers/user")

router.patch("/edit/:id" , controller.editProfile)


module.exports = router ; 