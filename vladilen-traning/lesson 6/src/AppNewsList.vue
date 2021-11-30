<template>
    <hr />
    <ul>
        <li v-for="item in news" :key="item.id">{{ item.title }}</li>
    </ul>
</template>
<script>
export default {
    props: ['news']
}

</script>

<style lang="sass">

</style>