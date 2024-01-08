import { Router } from "express";
import { getSearch } from "../controller/userController.js";


const router= Router()
router.get('/search',getSearch)





export default router