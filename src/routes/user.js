const express = require("express");
const user = require("../models/user");
const userSchema = require("../models/user");
const router = express.Router();

//create User
router.post('/users', (req, res) => {
    const newUser = userSchema(req.body);
    newUser
        .save()
        .then((data) => res.json(data))
        .catch((error)=>console.log(error));
});

//get all users
router.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error)=>console.log(error));
});

//get user by id
router.get('/users/:id', (req, res) => {
    const {id} = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error)=>console.log(error));
});

//update user by id
router.put('/users/:id', (req, res) => {
    const {id} = req.params;
    const {name, age, email} = req.body;
    userSchema
        .updateOne({_id:id},{ $set: {name, age, email} })
        .then((data) => res.json(data))
        .catch((error)=>console.log(error));
});

//delete user by id
router.delete('/users/:id', (req, res) => {
    const {id} = req.params;
    userSchema
        .remove({_id:id})
        .then((data) => res.json(data))
        .catch((error)=>console.log(error));
});



module.exports = router;

