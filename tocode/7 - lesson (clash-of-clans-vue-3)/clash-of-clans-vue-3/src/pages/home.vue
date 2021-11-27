<template>
  <p>Home page</p>
  <div class="card-wrapper" v-for="item in items" :key="item.id">
    <Card
      :name="`${item.lvl} lvl`"
      :title="item.title"
      :imgUrl="item.img"
      :link="`${item.alias}`"
    >
      {{ item.descr }}
    </Card>
  </div>
</template>

<script>
import items from "@/seeders/items.js";
import Card from "@/components/UI/Card";
export default {
  data() {
    return {
      items: items,
    };
  },
  components: {
    Card,
  },
};
</script>
