const user = require("../../models/user");
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv");
const signup = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  try {
    const authuser = await user.create({
      name: name,
      email: email,
      password: password,
    });
        // Generate a JWT token for the newly created user
        // const token = jwt.sign(
        //   { userId: newUser._id, email: newUser.email },
        //   "your-secret-key", // Replace with your own secret key
        //   { expiresIn: "1h" } // Token expiration time (optional)
        // );

        const token = jwt.sign({
          userId:authuser._id , email:authuser.email
        },process.env.SECRET_KEY,{expiresIn:"24h"})
    
    res.status(201).json({ message: "Signup successful", token });
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if a user with the provided email exists in the database
    const existingUser = await user.findOne({ email: email });

    if (!existingUser) {
      // If the user does not exist, return an error
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the provided password matches the user's password
    if (existingUser.password !== password) {
      // If the password is incorrect, return an error
      return res.status(401).json({ error: "Invalid password" });
    }

    // If both email and password are correct, you can consider the user as logged in
    const token = jwt.sign(
      { userId: existingUser._id, email: existingUser.email },
      process.env.SECRET_KEY,
      { expiresIn: "24h" }
    );
    res.status(200).json({ message: "Login successful", user: existingUser , token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { login, signup };
