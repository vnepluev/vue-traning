<template>
  <div class="md-body">
    <h1>Hello home</h1>
    <p>edit me</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import DataService from "@/services/DataService";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  setup() {
    onMounted(() => getPeople());

    const getPeople = () => {
      DataService.getAll()
        .then((res: ResponseData) => console.log(res.data))
        .catch((e: Error) => console.log(e))
    };
  },
});
</script>
