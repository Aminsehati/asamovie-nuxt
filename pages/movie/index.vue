<template>
  <div class="movie_page">
    <div class="container-fluid">
      <filtersBox
        @onFilter="filterMovie"
        :filtersInfo="filters"
        :genreItem="categoryItems"
        :CountryItem="countryItems"
      />
    </div>
    <div class="container-fluid">
      <div v-if="loading">
          <Spinner/>
      </div>
      <div class="container__movie" v-else>
        <Movie
          v-for="item in movieItem"
          :key="item.id"
          :movieInfo="item"
          class="mb-20"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieItem: [],
      filters: {
        language: this.$route.query.language || "persion",
        country: this.$route.query.country || "South-Africa",
        type: this.$route.query.type || "movie",
        genre: this.$route.query.type || "Music",
        age: this.$route.query.age || "All-ages",
        isHD: this.$route.query.isHD || false,
      },
      loading:false,
      categoryItems: [],
      countryItems: [],
    };
  },
  async fetch() {
    this.getCatgeoryItems();
    this.getCountryItems();
    this.getMovieItems();
  },
  methods: {
    filterMovie(data) {
      console.log("data", data);
    },
    async getCatgeoryItems() {
      try {
        const params = {
          limit: 100,
          skip: 1,
        };
        const httpReponse = await this.$category.getCategoryItems(params);
        this.categoryItems = httpReponse.data.items.map((item) => {
          return {
            id: item._id,
            name: item.title,
            value: item._id,
          };
        });
        console.log(categoryItems);
      } catch (error) {}
    },
    async getCountryItems() {
      try {
        const httpReponse = await this.$country.getCountryItems();
        this.countryItems = httpReponse.data.country.map((item) => {
          return {
            id: item?._id,
            name: item?.name,
          };
        });
      } catch (error) {}
    },
    async getMovieItems() {
      this.loading = true ;
      try {
        const httpReponse = await this.$Movie.getMovieItems();
        console.log(httpReponse);
        this.movieItem = httpReponse.data.movie.map((item) => {
          return {
            id: item._id,
            title: item?.title,
            year: item?.year,
            imdb: item?.imdb,
            image: item?.imgUrl,
            title_original: item?.title_original,
            category: item?.category,
          };
        });
        this.loading = false ;
      } catch (error) {}
    },
  },
};
</script>

<style scoped>
@import "./style.css";
</style>
<style>
.container__movie {
  margin-left: -7px;
  margin-right: -7px;
}
.container__movie .movie__ {
  flex: 0 0 12.4%;
  padding-right: 7px;
  padding-left: 7px;
  padding-bottom: 2rem;
}
</style>