<template>
  <div class="video__player">
    <video
      controls
      id="myVideo"
      src="https://hajifirouz5.cdn.asset.aparat.com/aparat-video/59f136ada1379566563526fbe40464cc39464485-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjQxZDc2ZjJhNzNhZGI2NmJiM2RjZjUwNzI3ZTI2NGQ4IiwiZXhwIjoxNjM3OTM0NjQzLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.Kg_HYZVgcYMrIP3TsnFl2j8JXeIEWog79yYzKXlwloE"
      ref="video"
    ></video>
    <div id="controller">
        sss
        <div class="progress-bar">
            <progress id="progress"  value="0" max="100">Progress</progress>
        </div>
        <div>
            <div class="left">
                <span @click="playVideo">
                    <i class="fas fa-play"></i>
                </span>
                <span @click="pauseVideo">
                    <i class="fas fa-pause"></i>
                </span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import "./style.css";
export default {
  layout: "player",
  methods:{
    progressVideo(){

    },
    playVideo(){
        this.$refs.video.play();
    },
    pauseVideo(){
        this.$refs.video.pause();
    }
  },
  mounted(){
      this.progressVideo();
  }
};
</script>

<style>
</style>