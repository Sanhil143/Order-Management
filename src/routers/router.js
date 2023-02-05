const { createUser, createProduct, createOrder } = require('../controllers/commnController')

const router = require('express')()


router.post('/createCustomer',createUser)
router.post('/createProduct',createProduct)
router.post('/createOrder',createOrder)


module.exports = router