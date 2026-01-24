const express = require('express');
const authController = require('../controller/auth.controller');


const router = express.Router();

// api/auth
router.post('/register', authController.registerController)

router.post('/login', authController.loginController)

router.patch('/updateuser/:id', authController.updateUserController)

router.delete('/deleteuser/:id', authController.deleteUserController)

router.post("/logout", authController.logoutController);

router.get("/currentuser", authController.currentUserController);

module.exports = router;
