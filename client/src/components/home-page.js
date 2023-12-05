import api from "../services/api.js";
import homePageTemplate from "./home-page-template.js"
const {ref,onMounted}=Vue;
const homePage ={
    components:{

    },
    setup(){
     let userList =ref({});
     const getUserList = async()=>{
        console.log('hitting api')
        let response = await api.get('/api/user/userList')
        console.log(response.data)
     }
        onMounted(async()=>{
            await getUserList()
        })

        return {
            userList,
        }
    },
    template:homePageTemplate
}
export default homePage