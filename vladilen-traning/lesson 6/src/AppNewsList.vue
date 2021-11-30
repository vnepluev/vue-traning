<template>
    <hr />
    <h4>{{ title }}:</h4>
    <ul>
        <li v-for="item in news" :key="item.id">
            {{ item.title }}
            <span v-if="item.wasRead"><i>(прочитано)</i></span>
        </li>
    </ul>
</template>
<script>
export default {
    inject: ['title', 'news']
}

</script>

<style lang="sass">

</style>