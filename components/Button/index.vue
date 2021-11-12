<template>
  <button @click="$emit('onClick')" :class="buttonClasses">
      <slot/>
  </button>
</template>

<script>
export default {
    props:{
        primary:{
            type:Boolean,
            default:false,
        },
        secondary:{
            type:Boolean,
            default:false,
        },
        block:{
            type:Boolean,
            default:false,
        },
    },
    computed:{
        buttonClasses(){
            return [
                'btn',
                {
                    'btn-block':this.block,
                    'btn-primary':this.primary,
                    'btn-secondary' : this.secondary
                }
            ]
        }
    }
}
</script>

<style scoped>
@import './style.css'
</style>