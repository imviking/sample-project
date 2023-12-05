const homePageTemplate=`
<h1>welcome to home page this is the home page component</h1>
<table v-if="userList.length>0">
    <th>
        <td>Name</td>
        <td>User Name</td>
        <td>Password</td>
    </th>
    <tbody>
        <tr v-for="(user,index)in userList">
            <td>{{user.fullName.firstName}}{{user.fullName.middleName}}{{user.fullName.lastName}}</td>
            <td>{{user.userName}}</td>
            <td>{{user.password}}</td>
        </tr>
    </tbody>
    <div v-else> Opps! No Data Found</div>
</table>
`
export default homePageTemplate