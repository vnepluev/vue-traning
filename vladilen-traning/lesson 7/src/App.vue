<template>
  <div class="container">
    <form
     class="card"
     @submit.prevent="submitHandler"
    >
      <h1>Анкета на Vue разработчика!</h1>
      <!-- <div class="form-control" :class="{invalid: errors.name}">
        <label for="name">Как тебя зовут?</label>
        <input type="text" id="name" v-model.trim="name" placeholder="Введи имя">
        <small v-if="errors.name">{{ errors.name }}</small>
      </div> -->

      <!-- По умолчанию vue видит эту строку так: v-model:modelValue="name"
        Мы можем v-model:своеЗначение="name"
        В этом случае, в компоненте меняются все упоминания на emits: ['update:своеЗначение']
       -->
      <app-input
        placeholder="Введи имя"
        :error="errors.name"
        label="Как тебя зовут?"
        v-model="name"
      >
      ></app-input>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input
         type="number"
         id="age"
         min="20"
         max="70"
         v-model.number="age"
        >
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option selected value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input type="radio" v-model="relocate" name="trip" value="yes"/> Да</label>
        </div>

        <div class="checkbox">
          <label><input type="radio" v-model="relocate" name="trip" value="no"/> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" value="vuex" name="skills"/> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" value="cli" name="skills"/> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" value="router" name="skills"/> Vue Router</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Правила компании</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="agree" /> C правилами ознакомлен</label>
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
  import AppInput from './AppInput.vue';

  export default {
    data() {
      return {
        name: '',
        age: 23,
        city: 'kzn',
        relocate: null,
        // skills: null - будут выделены все флажки
        skills: [],
        agree: false,
        errors: {
          name: null,
        }
      }
    },
    methods: {
      formIsValid() {
        let isValid = true;
        if (this.name.length === 0) {
          isValid = false
          this.errors.name = 'Введите ваше имя';
        } else {
          this.errors.name = null;
        }
        return isValid;
      },
      submitHandler() {
        // Если данные ведены верно
        if (this.formIsValid()) {
          console.group('Form data');
            console.log('name: ', this.name);
            console.log('age:', this.age);
            console.log('city:', this.city);
            console.log('relocate:', this.relocate);
            console.log('skills:', this.skills);
            console.log('agree:', this.agree);
          console.groupEnd();
        }
      }
    },
    components: { AppInput }
  }
</script>

<style>
.form-control small {
  color: blueviolet;
}
.form-control.invalid input {
  border-color: blueviolet;
}
</style>
