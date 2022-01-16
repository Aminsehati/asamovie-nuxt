<template>
  <div class="movie-slider">
    <div class="title">
      <h5 class="text-12">
        اکشن
      </h5>
      <hr />
      <nuxt-link to="/" class="text-12"> مشاهده همه </nuxt-link>
    </div>
    <swiper class="swiper" :options="swiperOption" ref="mySwiperRef">
      <swiper-slide v-for="item in items" :key="item.id">
        <Movie :movieInfo="item" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import "./style.scss";
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "test",
          title_original: "test",
        },
        {
          id: 2,
          title: "test",
          title_original: "test",
        },
        {
          id: 3,
          title: "test",
          title_original: "test",
        },
        {
          id: 4,
          title: "test",
          title_original: "test",
        },
        {
          id: 5,
          title: "test",
          title_original: "test",
        },
        {
          id: 6,
          title: "test",
          title_original: "test",
        },
        {
          id: 7,
          title: "test",
          title_original: "test",
        },
        {
          id: 8,
          title: "test",
          title_original: "test",
        },
        {
          id: 9,
          title: "test",
          title_original: "test",
        },
      ],
      swiperOption: {
        slidesPerView: 7.4,
        loop: false,
        spaceBetween: 15
      },
    };
  },
};
</script>