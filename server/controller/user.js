const userDao = require('../dao/user.js');

const getUserList = async (request,response) => {
  try {
    console.log('hits')
    const userList = await userDao.getAll(); 

    return response.status(200).send({userList}); 
  } catch (error) {
    console.log('Error fetching user list from the database',error);
  }
};

module.exports = {
    getUserList
};
