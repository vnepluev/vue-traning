<template>
    <div class="card">
        <h3>{{ title }}</h3>
        <button class="btn" @click="open">
            {{ isNewsOpen ? 'Закрыть' : 'Открыть' }}
        </button>
        <p v-if="isNewsOpen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet earum placeat, ex qui doloribus voluptatum! Repudiandae doloremque porro accusamus asperiores!</p>
    </div>
</template>

<script>
export default {
    props: {
        'title': {
            type: String,
            required: true
        },
        'id': {
            type: Number,
            required: true,
        },
        'isOpen': {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            // напрямую нельзя менять значение isOpen в дочернем
            // компоненте, иначе компонент App не будет знать, что
            // мы что-то изменили - могут быть баги
            // Для решения - мы вводим новую переменную
            isNewsOpen: this.isOpen
        }
    },
    methods: {
        open() {
            this.isNewsOpen = !this.isNewsOpen
            // в компоненте App мы @open-news слушаем это событие
            // синтаксис как v-on
            // 06 Vladilen 00:46:02
            if (this.isNewsOpen) {
                this.$emit('open-news', 42)
            }
        }
    }
}
</script>