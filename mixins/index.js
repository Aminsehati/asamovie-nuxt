import moment from 'jalali-moment'
const persionCalender = [{
    id: 1,
    name: "فروردین"
  },
  {
    id: 2,
    name: "اردیبهشت"
  },
  {
    id: 3,
    name: "خرداد"
  },
  {
    id: 4,
    name: "تیر"
  },
  {
    id: 5,
    name: "مرداد"
  },
  {
    id: 6,
    name: "شهریور"
  },
  {
    id: 7,
    name: "مهر"
  },
  {
    id: 8,
    name: "آبان"
  },
  {
    id: 9,
    name: "آذر"
  },
  {
    id: 10,
    name: "دی"
  },
  {
    id: 11,
    name: "بهمن"
  },
  {
    id: 12,
    name: "اسفند"
  }
]
const mixins = {
  data() {
    return {
      imageUrl: "http://localhost:7600/uploads/image/",
      avatarIcon: require("~/assets/img/actors/profile.png"),
      icons: {
        imdb: require('@/assets/icons/imdb.png'),
        like:require('@/assets/icons/like.svg'),
        disLike:require('@/assets/icons/dislike.svg')
      }
    }
  },
  methods: {
    convertDate(date) {
      const month = moment.from(date, 'YYYY/MM/DD').locale('fa').format('MM');
      const monthName = persionCalender[month - 1] ?.name || "";
      const day = moment.from(date, 'YYYY/MM/DD').locale('fa').format('D');
      const hour = moment.from(date, 'YYYY/MM/DD HH:mm').locale('fa').format('HH:mm');
      return ` ${day} ${monthName} ساعت ${hour}`
    }
  },
}
export default mixins
