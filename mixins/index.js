const mixins = {
    data(){
        return {
            imageUrl:"http://localhost:7600/uploads/image/",
            avatarIcon : require("~/assets/img/actors/profile.png"),
            icons:{
                imdb:require('@/assets/icons/imdb1.png')
            }
        }
    }
}
export default mixins