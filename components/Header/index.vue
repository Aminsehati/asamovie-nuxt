<template>
  <header class="header">
    <div class="container-fluid">
      <div class="right__">
        <!-- logo Area !-->
        <div class="logo__area">
          <nuxt-link to="/">
            <img src="/logo.png" />
          </nuxt-link>
        </div>
        <!-- logo Area !-->
        <!-- navigation !-->
        <ul class="navigation">
          <li v-for="item in navbarItem" :key="item.id">
            <nuxt-link :to="item.path" exact-active-class="active">
              {{ item.name }}
            </nuxt-link>
          </li>
        </ul>
        <!-- navigation !-->
      </div>
      <div class="left__">
        <!--wishlist area-->
        <div class="wishlist-area" v-if="userInfo.isLogin">
          <nuxt-link to="/account/wishlist">
            <i class="fa fa-bookmark"></i>
          </nuxt-link>
        </div>
        <!--wishlist area-->
        <!--user profile-->
        <div class="user-profile" v-if="userInfo.isLogin">
          <span class="profile-button" @click="showDropdown = !showDropdown">
            <img :src="icons.profile" />
          </span>
          <div class="dropdown-content" v-if="showDropdown">
            <div class="phone-number">
              {{
                phoneNumber
              }}
            </div>
            <ul class="list-menu">
              <li @click="showDropdown = !showDropdown">
                <nuxt-link to="/account/user" class="font-12 font-500">
                  حساب کاربری
                </nuxt-link>
              </li>
              <li @click="showDropdown = !showDropdown">
                <nuxt-link to="/account/wishlist" class="font-12 font-500">
                  لیست پخش من
                </nuxt-link>
              </li>
              <li @click="showDropdown = !showDropdown">
                <nuxt-link to="/faq" class="font-12 font-500">
                  سوالات متداول
                </nuxt-link>
              </li>
              <li>
                <span class="font-12 font-500" @click="logout">
                  خروج از حساب کاربری
                </span>
              </li>
            </ul>
            <div class="notif-box">
              <p>ترافیک استفاده از سایت برای شما نیم بها استفاده میشود</p>
            </div>
          </div>
        </div>
        <!--user profile-->
        <!-- auth area -->
        <div class="auth-area" v-if="!userInfo.isLogin">
          <nuxt-link to="/register"> ورود / ثبت نام </nuxt-link>
        </div>
        <!-- auth area -->
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props:{
    phoneNumber:{
      type:String,
      default:""
    }
  },
  data() {
    return {
      navbarItem: [
        {
          id: 1,
          name: "خانه",
          path: "/",
        },
        {
          id: 2,
          name: "فیلم ها",
          path: "/movie",
        },
        {
          id: 3,
          name: "سریال ها",
          path: "/Serial",
        },
        {
          id: 4,
          name: "دسته بندی ها",
          path: "/category",
        },
      ],
      icons: {
        profile: require("@/assets/img/profile/default-avatar.png"),
      },
      showDropdown: false,
    };
  },
  computed: {
    ...mapGetters({
      userInfo: "user/getUser",
    }),
  },
  methods:{
    logout(){
      // localStorage.removeItem("token");
      // this.$router.push("/")
    }
  }
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>