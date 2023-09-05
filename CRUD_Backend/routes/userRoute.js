const express = require("express");
const app = express();
const mongoose = require("mongoose");
//create
const User = require("../models/userModal");
const router = express.Router()

router.post("/addUser", async (req, res) => {
  // const name = req.body.name
  const { name, email, age } = req.body;
  try {
    const userAdded = await User.create({
      name: name,
      email: email,
      age: age,
    });
    res.status(201).json(userAdded);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
//get all user
router.get("/getUser", async(req, res) => {
  try {
    const allUser = await User.find();    
    res.status(200).json(allUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get a user by Id
router.get("/:id", async(req, res) => {
  const {id} = req.params;
  try {
    const singleUser = await User.findById({_id:id});    
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//delete a user by Id
router.delete("/deleteuser/:id", async(req, res) => {
  const {id} = req.params;
  try {
    const singleUser = await User.findByIdAndDelete({_id:id});    
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//put/patch
router.patch("/updateuser/:id", async(req, res) => {
  const {id} = req.params;
  const {name,email,age} = req.body
  try {
    const updateUser = await User.findByIdAndUpdate(id, req.body,{
      new:true
    });   
    if (!updateUser) {
      return res.status(404).json({ error: 'User not found' });
    }
 
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;