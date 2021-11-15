<template>
  <div class="category___page">
    <div class="container-fluid">
      <div class="category__wrapper">
        <CategoryItems
          :categoryInfo="item"
          v-for="item in categoryItems"
          :key="item.id"
        ></CategoryItems
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoryItems: [
        {
          id: 1,
          image: "https://asamovie.ir/wp-content/uploads/2021/01/dubbed.jpg",
          path:"/movie?genre=social"
        },
        {
          id: 2,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/vije.jpg",
          path:"/movie?genre=social"
        },
        {
          id: 3,
          image: "https://asamovie.ir/wp-content/uploads/2021/01/irani.jpg",
          path:"/movie?genre=social"
        },
        {
          id: 4,
          image: "https://asamovie.ir/wp-content/uploads/2021/01/india.jpg",
          path:"/movie?genre=social"
        },
        {
          id: 5,
          image: "https://asamovie.ir/wp-content/uploads/2021/01/turk.jpg",
          path:"/movie?genre=social"
        },
        {
          id: 6,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/korean.jpg",
          path:"/movie?genre=social"
        },
        {
          id: 7,
          image: "https://asamovie.ir/wp-content/uploads/2021/01/animation.jpg",
          path:"/movie?genre=social"
        },
        {
          id: 8,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/social.jpg",
          path:"/movie?genre=social"
        },
        {
          id: 9,
          image: "https://asamovie.ir/wp-content/uploads/2021/01/action.jpg",
          path:"/movie?genre=social"
        },
        {
          id: 10,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/comedy.jpg",
          path:"/movie?genre=social"
        },
        {
          id: 11,
          image: "https://asamovie.ir/wp-content/uploads/2021/01/classic.jpg",
          path:"/movie?genre=social"
        },
        {
          id: 12,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/bio.jpg",
          path:"/movie?genre=social"
        },
        {
          id: 13,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/history.jpg",
          path:"/movie?genre=social"
        },
        {
          id: 14,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/honnor.jpg",
          path:"/movie?genre=social"
        },
        {
          id: 15,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/drama.jpg",
          path:"/movie"
        },
        {
          id: 16,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/thril.jpg",
          path:"/movie"
        },
        {
          id: 17,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/family.jpg",
          path:"/movie"
        },
        {
          id: 18,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/fantesy.jpg",
          path:"/movie"
        },
        {
          id: 19,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/elmi.jpg",
          path:"/movie"
        },
        {
          id: 20,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/romance.jpg",
          path:"/movie"
        },
      ],
    };
  },
};
</script>

<style scoped>
@import "./style.css";
</style>