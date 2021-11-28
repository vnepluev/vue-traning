<template>
    <div class="card">
        <h3>{{ title }}</h3>
        <button class="btn" @click="isOpen = !isOpen">Открыть</button>
        <p v-if="isOpen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet earum placeat, ex qui doloribus voluptatum! Repudiandae doloremque porro accusamus asperiores!</p>
    </div>
</template>

<script>
export default {
    props: {
        'title': String,
        required: true
    },
    data() {
        return {
            isOpen: false
        }
    }
}
</script>