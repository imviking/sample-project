const { ObjectId } = require('mongodb');
const UserModel = require('../models/user.js'); // Assuming UserModel is correctly defined as a Mongoose model

async function getAll(){
    return await UserModel.find();
}
// Get data function by userId (ObjectId)
async function getUserById(userId) {
        return await UserModel.findOne({ _id: ObjectId(userId) }); // Accessing the underlying collection and using findOne
   
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
    updateUserById
};
