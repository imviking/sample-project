const userDao = require('../dao/user.js');
const { encryptPassword} = require('../helpers/common.js');
const getUserList = async (request,response) => {
  try {
    console.log('hits')
    let querySelector={email:1,fullName:1}
    let userList = await userDao.getAll(querySelector); 
    return response.status(200).send({userList:userList}); 
  } catch (error) {
    console.log('Error fetching user list from the database',error);
  }
};
const saveUser = async (request,response) =>{
  try {
   let userData = request.body.userData
   userData.password = await encryptPassword(userData.password)
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
