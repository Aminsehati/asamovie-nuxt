<template>
  <div class="comment-item">
    <div class="icon">
      <img :src="commentInfo.profileImage" />
    </div>
    <div class="content">
        <p>
            {{
                commentInfo.profileCaption
            }}
        </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    commentInfo: {
      type: Object,
      default: () => {},
    },
  },
};
</script>