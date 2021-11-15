<template>
  <div class="movie_page">
    <div class="container-fluid">
      <filtersBox @onFilter="filterMovie"/>
    </div>
    <div class="container-fluid">
      <div class="container__movie ">
        <Movie v-for="item in movieItem" :key="item.id" :movieInfo="item" class="mb-20"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieItem: [
        {
          id: 1,
          title:'تک تیرنداز',
          image:'https://asamovie.ir/wp-content/uploads/2021/11/poster-1-270x390.jpg',
          description:'The Sniper',
          year:'2021'
        },
        {
          id: 2,
          title:'اپکس',
          image:'https://asamovie.ir/wp-content/uploads/2021/11/bGiFwqFTrx9hLS1kdwKJxQHZtvd-1-270x390.jpg',
          year:'2021'
        },
        {
          id: 3,
          title:'آتش خشم',
          image:'https://asamovie.ir/wp-content/uploads/2021/11/9a93ecdd6d6d0d2b-2-270x390.jpg',
          year:'2021'
        },
        {
          id: 4,
          title:'ارتش دزدان',
          image:'https://asamovie.ir/wp-content/uploads/2021/11/j04Oepj3LGTWSb1ltXm0pcy50Xq-2-1-270x390.jpg',
          year:'2021'
        },
        {
          id: 5,
          title:'چهره',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/MV5BNGFlOTVkMmMtOWE1OC00Y2Q1LThmNTctM2IxMWVkY2EyYjBlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_-2-1-270x390.jpg',
          year:'2021'
        },
        {
          id: 6,
          title:'ویچر : کابوس مرگ',
          image: "https://asamovie.ir/wp-content/uploads/2021/10/the-witcher-nightmare-of-the-wolf-6118a7f67f244-2-1-270x390.jpg",
          year:'2021'
        },
        {
          id: 7,
          title:'دزدان مقبره',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/image_6025221611c824.36498386-4-270x390.jpg',
          year:'2021'
        },
        {
          id: 8,
          title:'مامور مخفی دینگلدورف و سگ مورد اعتمادش اسپلت',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/dm2x4nqi4rq51-1-270x390.jpg',
          year:'2021'
        },
        {
          id: 9,
          title:'دلداده',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/p12397294_v_v10_ac-270x390.jpg',
          year:'2021'
        },
        {
          id: 10,
          title:'گلوله را بگیر',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/7PoomidF9HlMKXcAyOJ87lGkhSp-270x390.jpg',
          year:'2021'
        },
        {
          id: 11,
          title:'جوی و الا',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/Joey-and-Ella-A-Kangaroo-Tail-2021-270x390.jpg',
          year:'2021'
        },
        {
          id: 12,
          title:'شب آمریکایی',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/wdIDoA18nbTO8Dux8LgsGLnwlvZ-1568x2352-3-270x390.jpg',
          year:'2021'
        },
        {
          id: 13,
          title:'تل ماسه',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/dune-611fc9d216b97-1-7-270x390.jpg',
          year:'2021'
        },
        {
          id: 14,
          title:'هالووین می کشد',
          image: "https://asamovie.ir/wp-content/uploads/2021/10/HAK_Dolby_DiscoverIt_RGB_1-scaled-1-2-270x390.jpg",
          year:'2021'
        },
        {
          id: 15,
          title:'سار',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/gPkaPGNbjZCeRurSYGi0JD63DBa-3-270x390.jpg'
        },
        {
          id: 16,
          title:'پسر من',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/1632133066_hearts-270x390.jpg'
        },
        {
          id: 17,
          title:'دلداده',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/p12397294_v_v10_ac-270x390.jpg'
        },
        {
          id: 18,
          title:'گلوله را بگیر',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/7PoomidF9HlMKXcAyOJ87lGkhSp-270x390.jpg'
        },
        {
          id: 19,
          title:'جوی و الا',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/Joey-and-Ella-A-Kangaroo-Tail-2021-270x390.jpg'
        },
        {
          id: 20,
          title:'شب آمریکایی',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/wdIDoA18nbTO8Dux8LgsGLnwlvZ-1568x2352-3-270x390.jpg'
        },
        {
          id: 21,
          title:'تل ماسه',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/dune-611fc9d216b97-1-7-270x390.jpg'
        },
        {
          id: 21222,
          title:'هالووین می کشد',
          image: "https://asamovie.ir/wp-content/uploads/2021/10/HAK_Dolby_DiscoverIt_RGB_1-scaled-1-2-270x390.jpg"
        },
        {
          id: 22,
          title:'سار',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/gPkaPGNbjZCeRurSYGi0JD63DBa-3-270x390.jpg'
        },
        {
          id: 23,
          title:'پسر من',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/1632133066_hearts-270x390.jpg'
        },
        {
          id: 24,
          title:'دلداده',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/p12397294_v_v10_ac-270x390.jpg'
        },
        {
          id: 25,
          title:'گلوله را بگیر',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/7PoomidF9HlMKXcAyOJ87lGkhSp-270x390.jpg'
        },
        {
          id: 26,
          title:'جوی و الا',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/Joey-and-Ella-A-Kangaroo-Tail-2021-270x390.jpg'
        },
        {
          id: 27,
          title:'شب آمریکایی',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/wdIDoA18nbTO8Dux8LgsGLnwlvZ-1568x2352-3-270x390.jpg'
        },
        {
          id: 28,
          title:'تل ماسه',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/dune-611fc9d216b97-1-7-270x390.jpg'
        },
        {
          id: 29,
          title:'هالووین می کشد',
          image: "https://asamovie.ir/wp-content/uploads/2021/10/HAK_Dolby_DiscoverIt_RGB_1-scaled-1-2-270x390.jpg"
        },
        {
          id: 30,
          title:'سار',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/gPkaPGNbjZCeRurSYGi0JD63DBa-3-270x390.jpg'
        },
        {
          id: 31,
          title:'پسر من',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/1632133066_hearts-270x390.jpg'
        },
        {
          id: 32,
          title:'دلداده',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/p12397294_v_v10_ac-270x390.jpg'
        },
        {
          id: 33,
          title:'گلوله را بگیر',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/7PoomidF9HlMKXcAyOJ87lGkhSp-270x390.jpg'
        },
        {
          id: 34,
          title:'جوی و الا',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/Joey-and-Ella-A-Kangaroo-Tail-2021-270x390.jpg'
        },
        {
          id: 35,
          title:'شب آمریکایی',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/wdIDoA18nbTO8Dux8LgsGLnwlvZ-1568x2352-3-270x390.jpg'
        },
        {
          id: 36,
          title:'تل ماسه',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/dune-611fc9d216b97-1-7-270x390.jpg'
        },
        {
          id: 37,
          title:'هالووین می کشد',
          image: "https://asamovie.ir/wp-content/uploads/2021/10/HAK_Dolby_DiscoverIt_RGB_1-scaled-1-2-270x390.jpg"
        },
        {
          id: 38,
          title:'سار',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/gPkaPGNbjZCeRurSYGi0JD63DBa-3-270x390.jpg'
        },
        {
          id: 39,
          title:'پسر من',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/1632133066_hearts-270x390.jpg'
        },
        {
          id: 40,
          title:'دلداده',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/p12397294_v_v10_ac-270x390.jpg'
        },
        {
          id: 41,
          title:'گلوله را بگیر',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/7PoomidF9HlMKXcAyOJ87lGkhSp-270x390.jpg'
        },
        {
          id: 42,
          title:'جوی و الا',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/Joey-and-Ella-A-Kangaroo-Tail-2021-270x390.jpg'
        },
        {
          id: 43,
          title:'شب آمریکایی',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/wdIDoA18nbTO8Dux8LgsGLnwlvZ-1568x2352-3-270x390.jpg'
        },
        {
          id: 44,
          title:'تل ماسه',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/dune-611fc9d216b97-1-7-270x390.jpg'
        },
        {
          id: 45,
          title:'هالووین می کشد',
          image: "https://asamovie.ir/wp-content/uploads/2021/10/HAK_Dolby_DiscoverIt_RGB_1-scaled-1-2-270x390.jpg"
        },
        {
          id: 46,
          title:'سار',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/gPkaPGNbjZCeRurSYGi0JD63DBa-3-270x390.jpg'
        },
        {
          id: 47,
          title:'پسر من',
          image:'https://asamovie.ir/wp-content/uploads/2021/10/1632133066_hearts-270x390.jpg'
        },
        
      ],
    };
  },
  methods:{
    filterMovie(data){
      this.$router.push({
       query : {
        ...data
       }
      })
    }
  }
};
</script>

<style scoped>
@import "./style.css";
</style>
<style>
  .container__movie{
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