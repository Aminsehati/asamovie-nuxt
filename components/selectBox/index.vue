<template>
  <div class="selectbox_group " :value="value " @change="updatevalue($event.target.value)">
    <select class="selectbox_control" >
        <option v-for="item in selectboxInfo " :key="item.id" :value="item.value"  :selected="item.value === value"
        >
                {{item.name }}
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