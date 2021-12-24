<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="product__wrapper">

          <!-- slider -->
          <div class="product-slider">
            <img :src="product.img" :alt="product.title">
            
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
