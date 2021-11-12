<template>
    <div class="">
        <div v-if="error.statusCode  === 404 ">
            <div class="page-404">
                <div class="image">
                    <img :src="vector404"/>
                </div>
                <h4>    
                    صفحه مورد نظر یافت نشد
                </h4>
                <h6>
                    برای دیدن هزار فیلم و سریال به صفحه اصلی بروید
                </h6>
                <Button secondary>
                    صفحه اصلی آسامووی
                </Button>
            </div>
        </div>
    </div> 
</template>
<script>
    export default {
        props: ['error'],
        layout:'error',
        data(){
            return {
                vector404: require('~/assets/img/404/logo_green-1.png')
            }
        }
    }
</script>
<style >
.page-404{
    text-align: center;
    padding-top: 154px;
    padding-bottom: 50px;
}
.page-404 .image{
    max-width: 600px;
    margin: 0 auto;
}
.page-404 h4{
    padding-top: 70px;
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 0.5rem;
    line-height: 1.2;
}
.page-404 h6{
    font-size: 14px;
    color: #ffffff7d;
    font-weight: 500;
    padding-bottom: 32px;
}
</style>