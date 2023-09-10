const UserData = require("../../models/userData");

const createUser = async (req, res) => {
  // const name = req.body.name
  const { name, email, age } = req.body;
  try {
    const userAdded = await UserData.create({
      name: name,
      email: email,
      age: age,
    });
    res.status(201).json(userAdded);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get all user
const getUser = async (req, res) => {
  try {
    const allUser = await UserData.find();
    res.status(200).json(allUser);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
};

//get a user by Id
const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await UserData.findById({ _id: id });
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//delete a user by Id
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await UserData.findByIdAndDelete({ _id: id });
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//put/patch
const updateUserData = async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    const updateUser = await UserData.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updateUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUser,
  getSingleUser,
  deleteUser,
  updateUserData,
};
