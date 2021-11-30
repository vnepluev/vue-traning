<template>
  <div>
    <div class="container pt-1">
      <div class="card">
        <h2>Slots</h2>
      </div>

      <app-list>
        <!--
        <template #default="slotProps">
          <strong>{{ slotProps.index + 1 }} </strong>
          <span style="color: orange;">Item: {{ slotProps.iter }}</span>
        </template> -->

        <!-- ES 6 синтаксис -->
        <template #default="{iter, index}">
          <strong>{{ index + 1 }} &nbsp;</strong>
          <span style="color: orange;">Item: {{ iter }}</span>
        </template>

      </app-list>

      <app-block>
        <p>Это текст для блока AppBlock</p>
        <template v-slot:header>
          <h3>Это заголовок H3</h3>
        </template>
        <!-- # служит для сокращения v-slot -->
        <template #footer>
          <small>Это footer</small>
        </template>
      </app-block>
    </div>
  </div>
</template>

<script>
import AppBlock from './AppBlock.vue'
import AppList from './AppList.vue'

export default {
  data() {
  },
  methods: {
  },
  components: {
    AppBlock, AppList
  }
}
</script>

<style scoped>

</style>
