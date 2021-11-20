Vue.createApp({
    data() {
        return {
            title: 'Hello Vue!',
            isTrue: true,
            style: ''
        }
    },
    methods: {
        changeText() {
            this.title = 'Смена текста через функцию'
        }
    }
}).mount('#app');

// 2 часть, метод computed
Vue.createApp({
    data() {
        return {
            first_num: 1,
        }
    },
    methods: {
        increment(inputValue) {
            this.first_num = inputValue;
        }
    },
    computed: {
        second_num() {
            return +this.first_num + 10;
        }
    }
}).mount('#second');