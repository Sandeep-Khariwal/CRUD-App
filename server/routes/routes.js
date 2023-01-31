// here we give routes like /addUsers
const express = require("express");
const {addUsers,getUsers,getUserById,editUser,deleteUser} = require("../userController/userControl.js")

const router = express.Router();

 router.route("/addUsers").post(addUsers);
 router.route("/allUsers").get(getUsers);
 router.route("/:id").get(getUserById);
 router.route("/:id").put(editUser)
 router.route("/:id").delete(deleteUser)

module.exports = router;
