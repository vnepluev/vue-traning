<template>
<div class="wrapper-content wrapper-content--fixed">
  <header1 />
  <section class="about">
    <div class="container">
      <h1 class="title">About my blog</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta id incidunt molestias vero iusto officiis perferendis, similique et harum earum!</p>
      <!-- используется если не поддерживается ssr плагином -->
      <client-only>
        <intro title="Lorem ipsum dolor" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta id incidunt molestias vero iusto officiis perferendis, similique et harum earum!</p>
      </client-only>
      <img src="~/assets/img/about.jpg" alt="about">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta id incidunt molestias vero iusto officiis perferendis, similique et harum earum!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta id incidunt molestias vero iusto officiis perferendis, similique et harum earum!</p>
    </div>
  </section>
</div>
</template>

<script>
import header1 from '@/components/system/Header.vue'
import intro from "~/components/UI/Intro.vue"

export default {
  components: { header1, intro },
  // SEO Block
  head() {
    const title = 'About My Blog Page'
    const descr = 'About My SSR blog! With Nuxt.js!'
    const type = 'site' // подходит для главной страницы
    return {
      title: title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'description', name: 'description', content: descr },
        { hid: 'og:description', name: 'og:description', content: descr },
        { hid: 'og:type', name: 'og:type', content: type },
      ],
    }
  },
}
</script>

<style lang="scss">
.about {
  text-align: center;
  p {
    margin-bottom: 10px;
  }
}
</style>