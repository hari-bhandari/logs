const express=require('express');
const router=express.Router();
const {addTech,removeTech,updateTech,getTech}=require('../controllers/tech')
router.route('/techs').get(getTech).post(addTech)
router.route('/techs/:id').delete(removeTech).put(updateTech)
module.exports=router
