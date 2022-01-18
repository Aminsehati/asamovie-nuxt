<template>
  <div class="wish__list">
    <div class="container-fluid">
      <div class="wish-list-wrapper">
        <div v-for="item in bookMarkList" :key="item.id" class="wish-list-item">
          <Movie :movieInfo="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "./style.scss";
export default {
  middleware({ redirect }) {
    if (process.client) {
      const token = localStorage["token"] || "";
      if (!token) {
        return redirect("/");
      }
    }
  },
  data() {
    return {
      bookMarkList: [],
      filters: {
        loading: false,
      },
    };
  },
  mounted() {
    this.getbookMarkItems();
  },
  methods: {
    async getbookMarkItems() {
      this.filters.loading = true;
      try {
        const httpResponse = await this.$bookmark.getBookMarkItems();
        if (httpResponse?.isSuccess) {
          this.bookMarkList = httpResponse.bookMarkItems.bookMark.map(
            (item) => {
              return {
                ...item,
                image: item?.imgUrl,
                id: item?._id,
              };
            }
          );
          console.log(this.bookMarkList);
          this.filters.loading = false;
        }
      } catch (error) {}
    },
  },
};
</script>