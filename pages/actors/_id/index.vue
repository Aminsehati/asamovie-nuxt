<template>
  <div class="actors_page">
    <div class="container-fluid">
        <div class="title">
            <div class="icon">
                <img :src="avatarIcon"/>
            </div>
            <div class="content">
                <h2>
                    بهاره کیان افشار
                </h2>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    import iconsMixin from '@/mixins/icons.js'
    import './style.css'
export default {
    mixins:[iconsMixin],
    data(){
        return {

        }
    },
}
</script>

<style>

</style>