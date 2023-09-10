const express = require("express");
const { getUser,getSingleUser, deleteUser, updateUserData, createUser } = require("../../controllers/CRUD/functionality");
const router = express.Router()

router.post("/adduser", createUser);
router.get("/getuser", getUser);
router.get("/:id", getSingleUser);
router.delete("/deleteuser/:id", deleteUser);
router.patch("/updateuser/:id", updateUserData);

module.exports = router;