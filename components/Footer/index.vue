<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="footer-top">
        <div class="logo___area">
          <img src="logo.png" />
        </div>
        <div class="social_links">
          <a href="#">
            <i class="fab fa-telegram-plane"></i>
            تلگرام
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
            اینستاگرام
          </a>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="footer_wrapper">
        <div class="right___">
          <div class="footer-item">
            <h2 class="title">ژانر ها</h2>
            <ul class="footer__list">
              <li
                v-for="item in genreItems"
                :key="item.id"
                class="menu_list_footer"
              >
                <nuxt-link to="/">
                  {{ item.name }}
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="footer-item">
            <h2 class="title">
              سریال ها
            </h2>
            <ul class="footer__list">
              <li
                v-for="item in genreItems"
                :key="item.id"
                class="menu_list_footer"
              >
                <nuxt-link to="/">
                  {{ item.name }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import "./style.css";
export default {
  data() {
    return {
      genreItems: [
        {
          id: 1,
          name: "درام",
        },
        {
          id: 2,
          name: "اکشن",
        },
        {
          id: 3,
          name: "ماجراجویی",
        },
        {
          id: 4,
          name: "جنایی",
        },
        {
          id: 5,
          name: "کمدی",
        },
        {
          id: 6,
          name: "علمی تخیلی",
        },
        {
          id: 7,
          name: "بیوگرافی",
        },
        {
          id: 8,
          name: "تاریخی",
        },
        {
          id: 9,
          name: "ترسناک",
        },
        {
          id: 10,
          name: "هیجان انگیز",
        },
      ],
    };
  },
};
</script>

<style>
</style>