<template>
    <div class="card">
        <h3>Заголовок компонента AppBlock.vue</h3>
        <slot name="header"></slot>
        <slot name="default">
            <p>Это значение по умолчанию, если текст не передали</p>
        </slot>
        <slot name="footer"></slot>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log(this.$slots);
    }
}
</script>

<style lang="sass">

</style>