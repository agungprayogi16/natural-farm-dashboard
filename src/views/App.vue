<template>
  <div class="h-screen flex flex-col md:flex-row w-full bg-gray-100">
    <header class="bg-gray-800 text-white p-4 md:fixed top-0 left-0 h-auto md:h-full w-full md:w-1/5 z-10">
      <div class="flex flex-col justify-between items-center h-full">
        <nav class="flex flex-col items-start w-full">
          <ul class="flex flex-col justify-start items-start gap-4 list-none w-full mt-8">
            <li v-for="(item, index) in menuItems" :key="index" @click="navigate(item.route)"
                class="cursor-pointer p-2 rounded-md transition-colors duration-300 w-full"
                :class="{ 'text-blue-500': $route.path === item.route, 'hover:bg-gray-700': $route.path !== item.route }">
              <div class="flex items-center pl-4">
                <i :class="`mdi mdi-${item.icon}`"></i>
                <span class="ml-2 font-bold">{{ item.title }}</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="h-screen md:ml-64 w-full p-4">
      <router-view />
    </main>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      menuItems: [
        { title: 'Dashboard', route: '/', icon: 'view-dashboard' },
        { title: 'Orders', route: '/orders', icon: 'shopping' },
        { title: 'Products', route: '/products', icon: 'package-variant' },
      ]
    }
  },
  methods: {
    navigate(route) {
      this.$router.push(route);
    }
  }
}
</script>
<style scoped>
ul {
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
}

i.mdi {
  font-size: 24px;
}

/* Media queries for responsiveness */

/* Mobile devices */
@media (max-width: 767px) {
  .h-screen {
    flex-direction: column;
  }
  header {
    width: 100%;
    height: auto;
    position: relative;
  }
  main {
    margin-left: 0;
    padding-top: 0;
  }
}

/* Tablet devices */
@media (min-width: 768px) and (max-width: 1024px) {
  header {
    width: 25%;
  }
  main {
    margin-left: 25%;
  }
}
</style>


