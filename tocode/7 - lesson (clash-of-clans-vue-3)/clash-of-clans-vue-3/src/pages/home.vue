<template>
  <p>Home page</p>
  <div class="card-wrapper" v-for="item in items" :key="item.id">
    <Card :name="`${item.lvl} lvl`" :title="item.title" :imgUrl="item.img">
      {{ item.descr }}
    </Card>
  </div>
</template>

<script>
import Card from "@/components/UI/Card";
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Archer",
          descr: "Archer desc Archer desc Archer desc",
          img: require("@/assets/img/archer.png"),
          lvl: 4,
        },
        {
          id: 2,
          title: "Wizzard",
          descr: "Wizzard desc Wizzard desc Wizzard desc",
          img: require("@/assets/img/wizard.png"),
          lvl: 8,
        },
      ],
    };
  },
  components: {
    Card,
  },
};
</script>
