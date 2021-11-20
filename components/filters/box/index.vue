<template>
  <div class="filters_box">
    <div class="filter_wrapper">
      <SelectBox
        :selectboxInfo="typeMovieItem"
        v-model="filters.type"
        class="flex-grow-1 filters_item"
      />
      <SelectBox
        :selectboxInfo="genreItem"
        class="flex-grow-1 filters_item"
        v-model="filters.genre"
      />
      <SelectBox
        :selectboxInfo="CountryItem"
        class="flex-grow-1 filters_item"
        v-model="filters.country"
      />
      <SelectBox
        :selectboxInfo="languagesItem"
        class="flex-grow-1 filters_item"
        v-model="filters.language"
      />
      <SelectBox
        :selectboxInfo="AgesItem"
        class="flex-grow-1 filters_item"
        v-model="filters.age"
      />
      <div :class="['checkbox__wrapper',{'active':filters.isHD}]" @click="showCheckbox">
        <p>HD</p>
        <span>
            <i class="fas fa-check"></i>
        </span>
      </div>
      <Button class="btn__filters" primary @onClick="onFilter">
            اعمال فیلتر
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeMovieItem: [
        {
          id: 1,
          name: "فیلم ",
          value: "movie",
          selected:true
        },
        {
          id: 2,
          name: "سریال",
          value: "Serial",
        },
      ],
      genreItem: [
        {
          id: 1,
          name: "Music",
          value: "Music",
        },
        {
          id: 2,
          name: "اجتماعی",
          value: "social",
        },
        {
          id: 3,
          name: "آسکار",
          value: "oscar",
        },
        {
          id: 4,
          name: "اکشن",
          value: "action",
        },
        {
          id: 5,
          name: "انیمه",
          value: "anime",
        },
        {
          id: 6,
          name: "انیمیشن",
          value: "animation",
        },
      ],
      CountryItem: [
        {
          id: 22,
          name: "آفریقای جنوبی",
          value: "South-Africa",
        },
        {
          id: 32,
          name: "آلمان",
          value: "Germany",
        },
        {
          id: 42,
          name: "آمریکا",
          value: "america",
        },
      ],
      languagesItem: [
        {
          id: 1,
          name: "فارسی",
          value: "persion",
        },
        {
          id: 2,
          name: "انگلیسی",
          value: "English",
        },
        {
          id: 3,
          name: "آلمانی",
          value: "German",
        },
        {
          id: 4,
          name: "فرانسوی",
          value: "French",
        },
      ],
      AgesItem: [
        {
          id: 111,
          name: "همه سنین",
          value: "All-ages",
        },
        {
          id: 222,
          name: "بالای 13 سال",
          value: "over-13",
        },
        {
          id: 333,
          name: "بالای 15 سال",
          value: "over-15",
        },
        {
          id: 444,
          name: "بالای 18 سال",
          value: "over-18",
        },
      ],
      filters:{
          language:this.$route.query.language ||'persion',
          country: this.$route.query.language  || 'South-Africa',
          type: this.$route.query.type  || 'movie',
          genre: this.$route.query.type  || 'Music',
          age: this.$route.query.age  || 'All-ages',
          isHD: this.$route.query.isHD  || false,
      },
    };
  },
  methods: {
    showCheckbox(){
        this.filters.isHD = !this.filters.isHD
    },
    onFilter(){
      this.$emit('onFilter',this.filters)
    }
  },
  mounted(){
  }
};
</script>

<style scoped>
@import "./style.css";
</style>