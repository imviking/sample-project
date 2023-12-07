const userDao = require('../dao/user.js');

const getUserList = async (request,response) => {
  try {
    console.log('hits')
    const userList = await userDao.getAll(); 

    return response.status(200).send({userList:userList}); 
  } catch (error) {
    console.log('Error fetching user list from the database',error);
  }
};
const saveUser = async (request,response) =>{


  try {
   const userData = request.body.userData
   const user = await userDao.addUser(userData)
   if(user){
    return response.status(201).send({success:true,message:'User Added Successfully'})
   }else{
    return response.status(201).send({success :false,message:'Some thing went wrong'})
   }
  } catch (error) {
    console.log(error)
  }
   

}

module.exports = {
    getUserList,
    saveUser
};
