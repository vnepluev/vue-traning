<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>

    <h3>{{ counterData.title }}</h3>

    <section>
      <button @click="decreaseCounter" class="btn">-</button>
        <span class="counter">{{ counterData.counter }}</span>
      <button @click="increaseCounter(1)" class="btn">+</button>
      <button @click="increaseCounter(2, $event)" class="btn">++</button>
    </section>

    <section>
      <p>This counter is {{ oddOrEven }}</p>
    </section>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input type="text" v-model="counterData.title" v-autofocus>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, watch, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onBeforeUpdate, onUpdated, nextTick } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus'

// Иногда данным не обязательно быть реактивными
const appTitle = 'My amazing title'

const counter = ref(0)
const counterTitle = ref('Counter title')
const counterData = reactive({
  counter: 0,
  title: 'My counter'
})

// this.$refs.appTitleRef
const appTitleRef = ref(null)

watch(() => counterData.counter, (newCount, oldCount) => {
  console.log(newCount, oldCount);
})

const oddOrEven = computed(() => {
  if (counterData.counter % 2 === 0) {
    return 'even'
  }
  return 'odd'
})

const decreaseCounter = () => counterData.counter--

const increaseCounter = (amount, e) => {
  counterData.counter += amount
  console.log(e); // если нужно передать $event

  // nextTick() options api
//  this.$nextTick(() => {
    // выполнить код после обновления DOM
//  })
  nextTick(() => {
    console.log('Do something when DOM has ben updated');
  })
  // или можно написать так
  // increaseCounter = async (amount, e) => {
  // await nextTick(); console.log
  // будет работать аналогично
}

// хуки
onBeforeMount(() => {
  console.log('onBeforeMount')
})

onMounted(() => {
  console.log('onMounted')
  console.log(`The app title is ${ appTitleRef.value.offsetWidth }px wide!`);
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})

onUnmounted(() => {
  console.log('onUnmounted')
})

onActivated(() => {
  console.log('onActivated')
})

onDeactivated(() => {
  console.log('onDeactivated')
})

onBeforeUpdate(() => {
  console.log('onBeforeUpdate');
})

onUpdated(() => {
  console.log('onUpdated');
})

/*
  directives
*/
// const vAutofocus = { // v-autofocus
//   mounted: (el) => {
//     el.focus()
//   }
// } 

</script>

<!-- <script>
import { ref } from 'vue';

export default {
  setup() {
    const counter = ref(0)

    const decreaseCounter = () => counter.value--

    const increaseCounter = () => counter.value++

    return {
      counter,
      decreaseCounter,
      increaseCounter
    }
  }
}
</script>  -->

<!-- 
<script>
export default {
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increaseCounter() {
      this.counter++
    },
    decreaseCounter() {
      this.counter--
    }
  },
  watch: {
   count(newCount, oldCount) {
     if (newCount == 20) alert('Alert')
   }
  },
  // mounted() { ... },
  // unmounted() { ... },
  directives: {
    autofocus: {
      mounted(el) {
        el.focus()
      }
    }
  }
}
</script>
-->

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn, .counter {
  font-size: 40px;
  margin: 10px;
}
.edit {
  margin-top: 30px;
}
</style>