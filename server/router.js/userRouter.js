import express from "express"
import {adduser,verifyUser} from "../controller.js/userController.js";

const router = express.Router();

router.post('/',adduser)
router.post('/login',verifyUser)

export default router;