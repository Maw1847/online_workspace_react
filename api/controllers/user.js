const express = require('express');
const router = express.Router();

const { UserModel } = require('../models/userModel');

router.get('/', (req, res) => {
    UserModel.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error : ' + err);
    })
})


module.exports = router; 