export default {
  // Базовая составляющая (основа) для компонентов
  // По умолчанию эти блоки будут добавлены для каждого компонента
  data() {
    return {
      alert: false,
    };
  },
  methods: {
    toggleAlert() {
      this.alert = !this.alert;
    },
  },
};
