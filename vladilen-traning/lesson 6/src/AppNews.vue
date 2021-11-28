<template>
    <div class="card">
        <h3>{{ item }}</h3>
        <button class="btn">Открыть</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            item: 'test'
        }
    }
}
</script>