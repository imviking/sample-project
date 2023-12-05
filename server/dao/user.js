const { ObjectId } = require('mongodb');
const UserModel = require('../models/user.js'); // Assuming UserModel is correctly defined as a Mongoose model

async function getAll(){
    console.log('getting user list')
    return await UserModel.collection.find();
}
// Get data function by userId (ObjectId)
async function getUserById(userId) {
        return await UserModel.collection.findOne({ _id: ObjectId(userId) }); // Accessing the underlying collection and using findOne
   
}

// Insert data function
async function addUser(userData) {
       return await UserModel.collection.insertOne(userData); // Accessing the underlying collection and using insertOne
}

// Update data function by userId (ObjectId)
async function updateUserById(userId, newData) {

      return await UserModel.collection.updateOne({ _id: ObjectId(userId) }, { $set: newData }); // Accessing the underlying collection and using updateOne
}

module.exports = {
    getAll,
    getUserById,
    addUser,
    updateUserById
};
