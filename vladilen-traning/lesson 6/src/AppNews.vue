<template>
    <div class="card">
        <h3>{{ title }}</h3>
        <button class="btn" @click="open">
            {{ isNewsOpen ? 'Закрыть' : 'Открыть' }}
        </button>
        <div v-if="isNewsOpen">
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet earum placeat, ex qui doloribus voluptatum! Repudiandae doloremque porro accusamus asperiores!</p>
            <button v-if="!wasRead" class="btn primary" @click="mark">Прочесть новость</button>
        </div>
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
        },
        'wasRead': {
            type: Boolean,
            required: false,
            default: false
        }
    },
    // emits: ['open-news'],
    emits: {
        // Если валидация не требуется - 'open-news': null
        // если требуется, то превращаем в метод
        'open-news'(num) {
            if (num) {
                // если передано значение
                return true
            }
            console.warn('No data in open-news emit');
            return false
        },
        'read-news'(id) {
            if (id) return true
            console.warn('Нет параметра id для emit read-news')
            return false
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
        },
        mark() {
            this.isNewsOpen = false
            this.$emit('read-news', this.id)
        }
    }
}
</script>