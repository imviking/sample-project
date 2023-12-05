const {onMounted} = Vue
import router from './routes/index.js';
export default {
    name:"App",
    components:{

    },
    setup(){
       onMounted(()=>{
        console.log('mounting home page')
       }) 
    },
    template:`
    <div>
         <router-view :key="$route.path" ></router-view>
    </div>`
}
