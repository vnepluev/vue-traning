<template>
  <p>Home page</p>

  <carousel :settings="settings" :breakpoints="breakpoints">
    <slide class="card-wrapper" v-for="item in items" :key="item.id">
      <Card
        :name="`${item.lvl} lvl`"
        :title="item.title"
        :imgUrl="item.img"
        :link="`${item.alias}`"
      >
        <template v-slot:body>
          {{ item.descr }}
        </template>
        <template v-slot:footer>
          <card-stats :item="item.info"></card-stats>
        </template>
      </Card>
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import items from "@/seeders/items.js";
import Card from "@/components/UI/Card";
import CardStats from "@/components/UI/CardStats";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  data() {
    return {
      items: items,
      settings: {
        itemsToShow: 2,
        wrapAround: true,
      },
      breakpoints: {
        300: {
          itemsToShow: 1,
        },
        769: {
          itemsToShow: 2,
        },
      },
    };
  },
  components: {
    Card,
    CardStats,
    Carousel,
    Slide,
    Navigation,
  },
};
</script>
