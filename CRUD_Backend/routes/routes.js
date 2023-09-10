const express = require("express");
const router = express.Router();
const auth = require("../routes/Authentication/auth")
const crud = require("../routes/CRUD/crud")
// router.post("/adduser", createUser);
// router.get("/getuser", getUser);
// router.get("/:id", getSingleUser);
// router.delete("/deleteuser/:id", deleteUser);
// router.patch("/updateuser/:id", updateUserData);
router.use("/auth",auth)
router.use("/crud",crud) 

module.exports = router;
 