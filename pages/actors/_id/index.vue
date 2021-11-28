<template>
  <div class="actors_page">
    <div class="container-fluid">
      <div class="title">
        <div class="icon">
          <img :src="avatarIcon" />
        </div>
        <div class="content">
          <h2 class="font-16 font-400">بهاره کیان افشار</h2>
          <Button
            light
            @onClick="filters.isFollowed = !filters.isFollowed"
            :class="{ loading: filters.loadingButton }"
          >
            {{ filters.isFollowed ? "حذف کنید" : "دنبال کنید" }}
          </Button>
        </div>
      </div>
      <div class="actors_offer">
        <h4 v-if="$auth.loggedIn">
          yes
        </h4>
        <h4 v-else>
          No
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import iconsMixin from "@/mixins/icons.js";
import "./style.scss";
export default {
  mixins: [iconsMixin],
  data() {
    return {
      filters: {
        loadingButton: false,
        isFollowed: true,
      },
    };
  },
};
</script>

<style>
</style>