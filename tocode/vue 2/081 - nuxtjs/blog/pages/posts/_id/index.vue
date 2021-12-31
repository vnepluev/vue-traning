<template>
<h1>POST id: {{ $route.params.id }}</h1>
</template>

<script>
export default {
  validate({params}) {
    return /^\d+$/.test(params.id)
  }
}
</script>