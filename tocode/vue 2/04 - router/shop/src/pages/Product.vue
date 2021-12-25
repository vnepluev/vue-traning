<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="product__wrapper">

          <!-- slider -->
          <div class="product-slider">
            <!-- <img :src="product.img" :alt="product.title"> -->

            <carousel
             :items-to-show="1"
             :itemsToScroll="1"
             :wrapAround="true">
              <slide v-for="(slide, index) in product.gallery" :key="index">
                <img :src="slide.img" :alt="slide.name">
              </slide>

              <template #addons>
                <navigation />
                <pagination />
              </template>
            </carousel>

          </div>

          <!-- content -->
          <div class="product-content">
            <h1 class="title">{{ product.title }}</h1>
            <p>{{ product.descr }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  data() {
    return {
      product: null
    }
  },
  created () {
    // console.log({route: this.$route, id: this.$route.params.id})
    const id = this.$route.params.id
    this.product = this.$store.getters.getProduct(id)
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  }
}
</script>

<style lang="scss">
.product__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-slider,
.product-content {
  max-width: 48%;
  text-align: center;
}
</style>
