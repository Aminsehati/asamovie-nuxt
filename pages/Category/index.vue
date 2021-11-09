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
        },
        {
          id: 2,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/vije.jpg",
        },
        {
          id: 3,
          image: "https://asamovie.ir/wp-content/uploads/2021/01/irani.jpg",
        },
        {
          id: 4,
          image: "https://asamovie.ir/wp-content/uploads/2021/01/india.jpg",
        },
        {
          id: 5,
          image: "https://asamovie.ir/wp-content/uploads/2021/01/turk.jpg",
        },
        {
          id: 6,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/korean.jpg",
        },
        {
          id: 7,
          image: "https://asamovie.ir/wp-content/uploads/2021/01/animation.jpg",
        },
        {
          id: 8,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/social.jpg",
        },
        {
          id: 9,
          image: "https://asamovie.ir/wp-content/uploads/2021/01/action.jpg",
        },
        {
          id: 10,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/comedy.jpg",
        },
        {
          id: 11,
          image: "https://asamovie.ir/wp-content/uploads/2021/01/classic.jpg",
        },
        {
          id: 12,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/bio.jpg",
        },
        {
          id: 13,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/history.jpg",
        },
        {
          id: 14,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/honnor.jpg",
        },
        {
          id: 15,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/drama.jpg",
        },
        {
          id: 16,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/thril.jpg",
        },
        {
          id: 17,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/family.jpg",
        },
        {
          id: 18,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/fantesy.jpg",
        },
        {
          id: 19,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/elmi.jpg",
        },
        {
          id: 20,
          image: "https://asamovie.ir/wp-content/uploads/2021/03/romance.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import "./style.css";
</style>