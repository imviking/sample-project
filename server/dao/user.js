const { ObjectId } = require('mongodb');
const UserModel = require('../models/user.js'); // Assuming UserModel is correctly defined as a Mongoose model

async function getAll(querySelector){
    return await UserModel.find({},querySelector?querySelector:{});
}
// Get data function by userId (ObjectId)
async function getUserById(userId,querySelector) {
        return await UserModel.findOne({ _id: ObjectId(userId) }, querySelector?querySelector:{}); // Accessing the underlying collection and using findOne
   
}
// Get data function by email (emailId)
async function getUserByEmail(emailId,querySelector) {
    return await UserModel.findOne({ email: emailId },querySelector?querySelector:{}); // Accessing the underlying collection and using findOne

}
// Insert data function
async function addUser(userData) {
       return await UserModel.create(userData); // Accessing the underlying collection and using insertOne
}

// Update data function by userId (ObjectId)
async function updateUserById(userId, newData) {

      return await UserModel.updateOne({ _id: ObjectId(userId) }, { $set: newData }); // Accessing the underlying collection and using updateOne
}

module.exports = {
    getAll,
    getUserById,
    addUser,
    updateUserById,
    getUserByEmail
};
