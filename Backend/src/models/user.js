// const mongoose = require("mongoose");
// const { Schema } = mongoose;
// const bcrypt = require("bcrypt-nodejs");

// const userSchema =  new Schema({
//     usuario: String,
//     email: String,
//     password: String
// }, 
// {
//     timestamps: true
// });

// userSchema.methods.encryptPassword = function (password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
//   };  

// userSchema.methods.comparePassword = function (password){
//     return bcrypt.compareSync(password, this.password);
// };

// module.exports = mongoose.model("User", userSchema);














// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const { Schema } = mongoose;

// const userSchema = new Schema({
//     usuario: String,
//     email: String,
//     password: String
// });


// userSchema.methods.encryptPassword = (password) => {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
// };

// userSchema.methods.comparePassword = function (password) {
//     return bcrypt.compareSync(password, this.password);
// };


// module.exports = mongoose.model('user', userSchema);
