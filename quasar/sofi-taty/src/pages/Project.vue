<template>
  <q-page padding>
    <div class="p-4">
      <div class="text-2xl font-bold text-center pb-4">Наши работы</div>
    </div>
    <div class="project-widget-list space-y-5">
      <project-widget />
    </div>
  </q-page>
</template>

<script>
import ProjectWidget from "src/components/ProjectWidget.vue"

export default {
  // name: 'PageName',
  components: { ProjectWidget }
}
</script>
