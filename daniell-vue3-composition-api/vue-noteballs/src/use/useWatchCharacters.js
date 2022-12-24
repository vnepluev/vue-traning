/**
 * watch characters
 */
import { watch } from 'vue'

export function useWatchCharacters (valueToWatch, maxChars = 19) {
    watch(valueToWatch, (newValue, oldValue) => {
        if (newValue.length > maxChars) {
            alert(`Only ${ maxChars + 1 } characters!`)
        }
    })
}
