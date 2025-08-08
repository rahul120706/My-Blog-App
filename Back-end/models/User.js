const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  address: {
    street: String,
    city: String,
    postalCode: String
  },
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, minlength: 6 },
  // role:     { type: String, enum: ['user', 'admin'], default: 'user' },
  createdAt:{ type: Date, default: Date.now }
});
module.exports = mongoose.model('Users',userSchema);