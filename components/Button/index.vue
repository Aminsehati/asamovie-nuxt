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
        light:{
            type:Boolean,
            default:false
        },
        block:{
            type:Boolean,
            default:false,
        },
        blue:{
            type:Boolean,
            default:false
        },
        red:{
            type:Boolean,
            default:false,
        },
        green:{
            type:Boolean,
            default:false,
        }
    },
    computed:{
        buttonClasses(){
            return [
                'btn',
                {
                    'btn-block':this.block,
                    'btn-primary':this.primary,
                    'btn-secondary' : this.secondary,
                    'btn-light':this.light,
                    'btn-blue':this.blue,
                    'btn-red':this.red,
                    'btn-green':this.green
                }
            ]
        }
    }
}
</script>

<style scoped>
@import './style.css'
</style>