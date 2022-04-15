<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goProducts()">click to products page</button>
  </div>
</template>

<script>

export default {
  methods: {
    goProducts() {
      this.$router.push('/products');
    }
  }
}
</script>

