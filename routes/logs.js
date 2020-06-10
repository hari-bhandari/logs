const express=require('express');
const router=express.Router();
const{updateLog,addLog,removeLog,getAllLogs} =require('../controllers/logs')

router.route('/logs').get(getAllLogs).post(addLog)
router.route('/logs/:id').put(updateLog).delete(removeLog)
module.exports=router
