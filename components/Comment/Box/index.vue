<template>
  <div class="comment-box">
    <div class="comment-box-header">
      <h2>نظرات کاربران</h2>
    </div>
    <div class="comment-box-body">
      <div class="send-comment">
        <Textfield light placeholder="دیدگاه خود را بنویسید" />
        <Button primary> ارسال </Button>
      </div>
      <div v-for="item in items" :key="item.id">
        <CommentItem :commentInfo="item"/>
      </div>
    </div>
  </div>
</template>
<script>
import "./style.scss";
export default {
  props: {
    items: {
      type: Boolean,
      default: () => [],
    },
  },
};
</script>