const homePageTemplate=`
<div>
    <button @click="showPopUp('AddUser')" class="btn btn-primary mb-3">Add User</button>
  
    <div class="container" v-if="popUp.name == 'AddUser'||popUp.name == 'EditUser'">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form @submit.prevent="addUser">
            <div class="mb-3">
              <label for="firstName" class="form-label">First Name</label>
              <input type="text" class="form-control" id="firstName" v-model="userData.fullName.firstName">
            </div>
            <div class="mb-3">
                <label for="middleName" class="form-label">Middle Name</label>
                <input type="text" class="form-control" id="middleName" v-model="userData.fullName.middleName">
              </div>
            <div class="mb-3">
              <label for="lastName" class="form-label">Last Name</label>
              <input type="text" class="form-control" id="lastName" v-model="userData.fullName.lastName">
            </div>
            <div class="mb-3">
              <label for="userName" class="form-label">User Name/Email</label>
              <input type="text" class="form-control" id="userName" v-model="userData.email">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" v-model="userData.password">
            </div>
            <div class="d-flex row" >
                <div class ="col text-start" >
                    <button type="button" class="btn btn-secondary" @click = "popUp.name =''">Cancel</button>
                </div>
                <div class="col text-end">
                    <button type="submit" class="btn btn-primary ">{{popUp.name == 'AddUser' ? 'Save User' :'Update User'}}</button>
                </div>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  
    <table v-if="userList.length > 0" class="table mt-4">
      <thead>
        <tr>
          <th>Name</th>
          <th>User Name</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in userList" :key="index">
          <td>{{ user.fullName.firstName }} {{ user.fullName.middleName }} {{ user.fullName.lastName }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.password }}</td>
        </tr>
      </tbody>
    </table>
    <div v-else class="mt-4 justify-content-center">Oops! No User Added Yet</div>
</div>
  
`
export default homePageTemplate