/**
 * watch characters
 */
import { watch } from 'vue'

export function useWatchCharacters (valueToWatch) {
    watch(valueToWatch, (newValue, oldValue) => {
        if (newValue.length > 24) {
            alert('Only 25 characters!')
        }
    })
}
