<template>
  <div class="comment-item">
    <div class="icon">
      <img :src="`${imageUrl}${commentInfo.profileImage}`" />
    </div>
    <div class="content">
      <div class="head mb-15">
        <p class="text-grey2 text-12 font-500">
          {{ commentInfo.profileCaption }}
        </p>
        <p class="text-grey2 text-12 font-500 mr-10">
          {{ convertDate(commentInfo.createdAt) }}
        </p>
      </div>
      <div class="body">
        <p class="text-12 font-700">
          {{ commentInfo.body }}
        </p>
      </div>
      <div class="actions-comment mt-20 flex">
        <div class="like-content flex items-center">
          <img :src="icons.like" class="ml-10" />
          <span>
            {{ commentInfo.likeCount }}
          </span>
        </div>
        <div class="dislike-comment flex items-center mr-30">
          <img :src="icons.disLike"/>
          <span>
            {{
              commentInfo.dislikeCount
            }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "./style.scss";
export default {
  props: {
    commentInfo: {
      type: Object,
      default: () => {},
    },
  },
};
</script>