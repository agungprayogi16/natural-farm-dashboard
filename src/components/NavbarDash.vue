<template>
  <header class="bg-gray-900 text-white shadow">
    <div class="container mx-auto px-4 py-2 flex justify-between items-center">
      <div class="text-xl font-bold">
        <a href="/">MyLogo</a>
      </div>
      <nav class="space-x-4 hidden md:flex">
        <a href="/" class="hover:bg-gray-700 px-3 py-2 rounded">Home</a>
        <a href="/orders" class="hover:bg-gray-700 px-3 py-2 rounded">Orders</a>
        <a href="/products" class="hover:bg-gray-700 px-3 py-2 rounded">Products</a>
        <a href="/customers" class="hover:bg-gray-700 px-3 py-2 rounded">Customers</a>
        <a href="/reports" class="hover:bg-gray-700 px-3 py-2 rounded">Reports</a>
      </nav>
      <button class="md:hidden text-white focus:outline-none" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <div :class="{'block': menuOpen, 'hidden': !menuOpen}" class="md:hidden bg-gray-900 absolute top-16 left-0 w-full">
        <a href="/" class="block px-4 py-2 hover:bg-gray-700">Home</a>
        <a href="/orders" class="block px-4 py-2 hover:bg-gray-700">Orders</a>
        <a href="/products" class="block px-4 py-2 hover:bg-gray-700">Products</a>
        <a href="/customers" class="block px-4 py-2 hover:bg-gray-700">Customers</a>
        <a href="/reports" class="block px-4 py-2 hover:bg-gray-700">Reports</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavbarDash',
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
}

</script>

<style scoped>
/* Additional styles can go here */
</style>
