import { computed, watch } from 'vue'
import * as yup from 'yup'
import {useField, useForm} from 'vee-validate'

export function useLoginForm() {
      // submitCount - количество попыток входа
      const {handleSubmit, isSubmitting, submitCount} = useForm()

      const {value: email, errorMessage: eError, handleBlur: eBlur} = useField(
        'email',
        yup
          .string()
          .trim()
          .required('Пожалуйста введите email')
          .email('Введите корректный адрес')
      )
      const {value: password, errorMessage: pError, handleBlur: pBlur} = useField(
        'password',
        yup
          .string()
          .trim()
          .required('Пожалуйста введите password')
          .min(6, 'Пароль должен быть минимум 6 символов')
      )
  
      // values - набор значений всех полей
      const onSubmit = handleSubmit((values) => {
  
      })
  
      // количество попыток входа
      const isTooManyAttempts = computed(() => submitCount.value >= 3)
  
      // следим за переменной isTooManyAttempts и как только она станет true - блокируем кнопку
      watch(isTooManyAttempts, (val) => {
        if (val) {
          setTimeout(()=> {
            submitCount.value = 0
          }, 3000)
        }
      })
  
      return {
        email,
        password,
        eError,
        pError,
        eBlur,
        pBlur,
        onSubmit,
        isSubmitting,
        isTooManyAttempts,
      }
}