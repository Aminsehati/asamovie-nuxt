<template>
  <div class="comment-box">
    <div class="comment-box-header">
      <h2>نظرات کاربران</h2>
    </div>
    <div class="comment-box-body">
      <div class="send-comment" v-if="userInfo.isLogin">
        <Textfield
          light
          placeholder="دیدگاه خود را بنویسید"
          v-model="commentInfo.body"
        />
        <Button primary @onClick="sendComment"> ارسال </Button>
      </div>
      <CommentItem :commentInfo="item" v-for="item in items" :key="item.id" />
    </div>
  </div>
</template>
<script>
import "./style.scss";
import { mapGetters } from "vuex";
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      commentInfo: {
        body: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      userInfo: "user/getUser",
    }),
  },
  methods: {
    async sendComment() {
      try {
        const { id } = this.$route.params;
        const params = {
          mediaId: id,
          body: this.commentInfo.body,
        };
        const httpResponse = await this.$comment.addCommnet(params);
        this.$emit("success");
        this.commentInfo.body = "";
      } catch (error) {}
    },
  },
};
</script>