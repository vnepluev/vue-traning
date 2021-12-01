<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Динамические и ассинхронные компоненты</h2>
      <!-- Vladilen 06 - 02.07.00 -->
      <async-component></async-component>
      <!-- Vladilen 06 - 01.49.00 -->
      <app-button
       ref="myBtn"
       :color="oneColor"
       @action="active = 'one'"
      >One</app-button>
      <app-button
       :color="twoColor"
       @action="active='two'"
      >Two</app-button>
    </div>
    <!-- Для того, чтобы компонент каждый раз не отрисовывался заного
        и его значения введенные в input не пропадали служит <keep-alive>
    -->
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script>
import AppButton from "./AppButton";
import AppTextOne from "./AppTextOne"
import AppTextTwo from "./AppTextTwo"

export default {
  data() {
    return {
      active: 'two' // One
    }
  },
  computed: {
    // componentName() {
    //   // if (this.active === 'one') return 'AppTextOne'
    //   // return 'AppTextTwo'
    //   return 'app-text-' + this.active
    // },
    // ниже пример, показывает что вычисляемые свойства могут быть и объектами
    // для которых можно использовать getters и setters
    // по умолчанию все вычисляемые поля во vue являются геттерами
    componentName: {
      get() {
        return 'app-text-' + this.active
      },
      set(value) {
        console.log(value);
      }
    },
    oneColor() {
      return (this.active === 'one') ? 'primary' : ''
    },
    twoColor() {
      return (this.active === 'two') ? 'primary' : ''
    }
  },
  components: { AppButton, AppTextOne, AppTextTwo }
}
</script>

<style lang="sass">

</style>