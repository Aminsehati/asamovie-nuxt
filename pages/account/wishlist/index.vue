<template>
  <div class="wish__list">
    <div class="container-fluid">
      <div class="wish-wrapper">
        <div class="box-wish-list">
          <div class="title">
            <h2>
              پنل کاربری - لیست پخش
            </h2>
          </div>
          <div class="body">
            <div class="wishList" v-if="wishList.length > 0 ">
            </div>
              <div v-else class="is-empty">
                  <p>
                    سبد خرید شما خالی است
                  </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "./style.css";
export default {
  data(){
    return {
      wishList:[]
    }
  }
};
</script>