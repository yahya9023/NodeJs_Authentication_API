const router = require("express").Router();
const usersController = require("../controllers/userController");

router.post('/', usersController.createUser );
router.post('/login', usersController.signIn );




module.exports = router;