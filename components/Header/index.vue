<template>
  <header class="header">
        <div class="container-fluid">
          <!-- logo Area !-->
          <div class="logo__area">
            <nuxt-link to="/">
              <img src="logo.png"/>
            </nuxt-link>
          </div>
          <!-- logo Area !-->
          <!-- navigation !--> 
          <ul class="navigation">
              <li v-for="item in navbarItem" :key="item.id">
                  <nuxt-link :to="item.path" exact-active-class="active">
                    {{item.name}}
                  </nuxt-link>
              </li>
          </ul>
          <!-- navigation !--> 
        </div>
  </header>
</template>

<script>
export default {
  data(){
    return {
      navbarItem:[
        {
          id:1,
          name:"خانه",
          path:'/'
        },
        {
          id:2,
          name:"فیلم ها",
          path:'/movie'
        },
        {
          id:3,
          name:"سریال ها",
          path:'/Serial'
        },
        {
          id:4,
          name:"دسته بندی ها",
          path:'/category'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import './style.css';
</style>