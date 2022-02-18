<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Carousel',
  props: ['list'],
  watch: {
    // 监听bannerList数据的变化：因为这条数据发生过变化----由空数组变为数组里面有四个元素
    list: {
      immediate: true,
      handler() {
        // 现在咱们通过watch监听bannerList属性的属性值的变化
        // 如果执行了handler方法，代表组件实例身上这个属性的属性值已经有了【数组：四个元素】
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.cur, { // eslint-disable-line no-unused-vars
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              // 点击小球的时候也切换图片
              prevEl: '.swiper-button-prev'
            }
          })
        })
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
