const express=require('express');
const router=express.Router();
const controller=require('../controller/controller');
router.get('/getcustomer',controller.getCustomer);
router.get("/transactions/:id",controller.getTransactions);
router.get("/transactions/:id",controller.getTransactions);
router.get('/accounts',controller.getAccountId);
router.get('/products',controller.getDistinctProduct);
module.exports=router;