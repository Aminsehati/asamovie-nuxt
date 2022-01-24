<template>
  <div class="wish__list">
    <div class="container-fluid">
      <div class="wish-list-loading" v-if="filters.loading">
        <Spinner />
      </div>
      <div v-else>
        <div class="empty-bookMark" v-if="bookMarkList.length === 0">
          <div class="icon-empty-bookMark">
            <img :src="emptyBookMark" />
          </div>
          <div class="empty-bookMark-content">
            <h2 class="text-center mb-10">لیست شما خالی است</h2>
            <p class="text-center text-12">برای افزودن فیلم یا سریال، دکمه + آن را انتخاب کنید.</p>
          </div>
        </div>
        <div v-else>
          <div class="title mb-20">
            <h2 class="text-16 font-700">لیست من</h2>
          </div>
          <div class="wish-list-wrapper">
            <div
              v-for="item in bookMarkList"
              :key="item.id"
              class="wish-list-item"
            >
              <Movie :movieInfo="item" />
            </div>
          </div>
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
          this.bookMarkList = httpResponse.bookMarkItems.map((item) => {
            return {
              ...item,
              image: item?.imgUrl,
              id: item?._id,
            };
          });
          console.log(this.bookMarkList);
          this.filters.loading = false;
        }
      } catch (error) {}
    },
  },
};
</script>