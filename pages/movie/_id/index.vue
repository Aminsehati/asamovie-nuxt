<template>
  <div class="movie-single-page">
    <div class="movie-single-banner-sec"></div>
    <div class="container-fluid pb-50">
      <div class="movie-sigle-content">
        <div class="logo_movie">
          <img :src="singleMovieInfo.imgUrlLogoMovie" />
        </div>
        <div class="title_movie flex items-center">
          <h2 class="text-20 font-500 ml-10">
            {{ singleMovieInfo.title }}
          </h2>
          <span class="text-grey text-18"> ({{ singleMovieInfo.year }}) </span>
        </div>
        <div class="movie-feature mt-20 flex items-center mb-30">
          <div class="catgeories">
            <span
              v-for="(category, index) in singleMovieInfo.categories"
              :key="category.id"
              class="text-12"
            >
              {{ category.title }}
              {{ singleMovieInfo.categories.length !== index + 1 ? "،" : "" }}
            </span>
          </div>
          <div class="languages mx-10">
            <span class="text-12"> محصول </span>
            <span
              v-for="(countries, index) in singleMovieInfo.countries"
              :key="countries.id"
              class="text-12"
            >
              {{ countries.name }}
              {{ singleMovieInfo.countries.length !== index + 1 ? "و" : "" }}
            </span>
          </div>
          <div class="imdb mr-15 flex items-center">
            <img :src="icons.imdb" />
            <span class="mr-10">
              {{ singleMovieInfo.imdb }}
            </span>
          </div>
        </div>
        <div class="summery-movie">
          <p class="text-13 leading-25">
            یک هندی انقلابی به نام اودهام سینگ که به خاطر ترور مایکل او دوایر در
            13 آوریل 1919 در لندن مشهور است، داستان روایت این است که چطور اودهام
            سینگ از قتل عام روز بایساخی جان سالم به در می برد، زمانی که…
          </p>
        </div>
        <div class="Director-movie mt-30 mb-10">
          <span class="text-12"> کارگردان : </span>
          <span v-for="director in singleMovieInfo.director" :key="director.id">
            <span class="font-12">
              {{ director.name }}
            </span>
          </span>
        </div>
        <div class="author-movie flex mb-10">
          <span class="text-12"> نویسنده : </span>
          <span
            v-for="author in singleMovieInfo.author"
            :key="author.id"
            class="text-12"
          >
            {{ author.name }}
          </span>
        </div>
        <div class="actor-movie mb-30">
          <span class="text-12"> بازیگران : </span>
          <span
            v-for="(actor, index) in singleMovieInfo.actors"
            :key="actor.id"
            class="text-12 leading-25"
          >
            {{ actor.name }}
            {{ singleMovieInfo.actors.length !== index + 1 ? "،" : "" }}
          </span>
        </div>
        <div class="action_movie flex items-center">
          <Button secondary large> تماشای آنلاین </Button>
          <span class="item-box mr-15">
            <i class="fas fa-plus text-18"></i>
          </span>
          <span class="item-box mr-10">
            <i class="fas fa-thumbs-up text-18"></i>
          </span>
          <span class="item-box mr-10">
            <i class="fas fa-thumbs-down text-18"></i>
          </span>
        </div>
      </div>
      <div class="description-movie relative pt-220">
        <h4 class="text-grey1 text-12 mb-15 font-600">توضیحات :</h4>
        <p class="text-12 leading-25">
          {{ singleMovieInfo.description }}
        </p>
      </div>
      <div class="actors-movie mt-50">
        <h5>عوامل :</h5>
      </div>
    </div>
  </div>
</template>

<script>
import "./style.scss";
export default {
  data() {
    return {
      singleMovieInfo: {
        imgUrlLogoMovie:
          "https://asamovie.ir/wp-content/uploads/2021/12/png-clipart-sniper-elite-v2-sniper-elite-nazi-zombie-army-sniper-elite-iii-zombie-army-trilogy-sniper-elite-game-emblem.png",
        title: "",
        year: null,
        categories: [],
        countries: [
          {
            id: 1,
            name: "هند",
          },
        ],
        director: [
          {
            id: 1,
            name: "Tang JieChao",
          },
        ],
        author: [
          {
            id: 1,
            name: "Sun Jun",
          },
        ],
        actors: [
          {
            id: 1,
            name: "Huang Meng",
          },
          {
            id: 2,
            name: "Huang YiXuan",
          },
          {
            id: 3,
            name: "Li Meng Meng",
          },
          {
            id: 4,
            name: "Li Shu",
          },
          {
            id: 5,
            name: "Shi Yan Neng",
          },
          {
            id: 6,
            name: "Wang Wen Jie",
          },
          {
            id: 7,
            name: "Zhu Yi",
          },
          {
            id: 8,
            name: "Tang JieChao",
          },
          {
            id: 9,
            name: "Sun Jun",
          },
        ],
        description: "",
        imdb: null,
      },
    };
  },
  mounted() {
    this.getMovieItem();
  },
  methods: {
    async getMovieItem() {
      try {
        const { id } = this.$route.params;
        console.log(id);
        const httpReponse = await this.$Movie.getMovieItem(id);

        const { movie } = httpReponse.data;
        console.log(movie.countries);
        this.singleMovieInfo = {
          ...this.singleMovieInfo,
          title: movie?.title,
          year: movie?.year,
          description: movie?.description,
          imdb: movie?.imdb,
          categories:movie.category || [],
          countries:movie?.countries || []
        };
      } catch (error) {
        return this.$nuxt.error({ statusCode: 404 });
      }
    },
  },
};
</script>

<style>
</style>