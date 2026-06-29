const express = require('express');
const router = express.Router()


router.get('/', (req, res) => {
       res.json({
        message:"All Products"
       })
    // throw new Error('Product Not found')

})

module.exports = router;

