<template>
  <div class="selectbox_group " :value="value " @input="updatevalue($event.target.value)">
    <select class="selectbox_control" >
        <option v-for="item in selectboxInfo " :key="item.id" :value="item.value"  :selected="item.selected" :hidden="item.hidden"
        >
                {{item.name}}
        </option>
    </select>
  </div>
</template>

<script>
export default {
    props:{
        selectboxInfo:{
            type:Array,
            default:()=>[]
        },
        value:{
            type:String,
            default:''
        }
    },
    data(){
        return {
            selected:''
        }
    },
    methods:{
        updatevalue(value){
           this.$emit('onChnage',value);
           this.$emit('input',value);
        }
    }
}
</script>

<style>
@import './style.css'
</style>