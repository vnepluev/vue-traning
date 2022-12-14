import { reactive, watch, computed } from "vue";

// тогда изменение счетчика в любом компоненте,
// будет актуально и в других компонентах
// const counterData = reactive({
//     counter: 0,
//     title: 'My counter'
// })

export function useCounter() {
    // чтобы сделать counterData.counter глобальным для
    // всех компонентов его нужно вынести выше функции
    const counterData = reactive({
        counter: 0,
        title: 'My counter'
    })

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

    return {
        counterData,
        oddOrEven,
        decreaseCounter
    }
}