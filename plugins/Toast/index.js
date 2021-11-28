import Vue from 'vue'
import Toast from '@/components/Toast';
Vue.component("Toast",Toast);
export default (context , inject)=>{
    inject("toast",(status)=>{
        // console.log(context);
    })
}