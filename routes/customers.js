const express = require('express');
const router = express.Router();
const controller = require('../controllers/customers');

router.get('/christransactions/', async (req,res) =>{
    res.json(await controller.getAllChrisTransactions())
})

router.get('/', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllCustomers(pageSize, page));
});

router.get('/customerswithlimit', async (req,res)=> {
    res.json(await controller.getCustomersWithLimit())
});

router.get('/fouraccounts', async (req,res)=>{
    res.json(await controller.getClientWithFourAccounts())
});

router.get('/:id', async (req, res) => {
    res.json(await controller.getCustomer(req.params.id));
});

router.get('/email/:email', async (req,res)=>{
    res.json(await controller.getCustomerByEmail(req.params.email))
});






module.exports = router;