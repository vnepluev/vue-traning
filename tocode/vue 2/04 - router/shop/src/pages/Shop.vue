<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1>Shop page</h1>
        <div class="item__wrapper">
         <shop-item
          v-for="product in getShopList"
          :key="product.id"
          :product="product"
         />
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import ShopItem from "../components/ShopItem.vue"

export default {
  components: { ShopItem },
  data () {
    return {
      shopList: null
    }
  },
  created() {
    this.shopList = this.getShopList
  },
  computed: {
    // чтобы отслеживать изменения в данных нам нужны computed
    // при глобальном подключении vuex, в модулях становится
    // доступна глобальная переменная хранилища $store
    // если нам нужно обратиться к стейте - делаем это обращаясь
    // к getters
    getShopList() {
      return this.$store.getters.getShopList
    }
  }
}
</script>
