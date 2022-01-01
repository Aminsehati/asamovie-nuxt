<template>
  <div class="movie__">
    <nuxt-link :to="`/movie/${movieInfo.id}`">
      <figure class="movie__cover">
        <img :src="`${imageUrl}${movieInfo.image}`" />
        <div class="movie-item_overlay">
          <div class="movie_info_box flex flex-col justify-between min-h-full">
            <div class="imdb-content flex items-center">
              <img :src="icons.imdb" />
              <span>
                {{ movieInfo.imdb }}
              </span>
            </div>
            <div>
              <p class="mb-8 text-12 title_original">
                {{ movieInfo.title_original }}
              </p>
              <div class="flex items-center">
                <p class="ml-10 font-12">
                  {{ movieInfo.year }}
                </p>
                <div class="category-movie">
                  <span
                    v-for="(category, index) in movieInfo.category"
                    :key="category.id"
                    class="text-12 "
                  >
                    {{ category.title }}
                    {{ movieInfo.category.length !== index + 1 ? "،" : "" }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </figure>
      <p class="movie__title">
        {{ movieInfo.title }}
      </p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    movieInfo: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style >
@import "./style.css";
</style>