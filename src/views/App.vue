<template>
  <div class="h-screen flex flex-col md:flex-row w-full bg-gray-100">
    <header
      :class="['bg-gray-800 text-white p-4  fixed top-0 left-0 h-auto md:h-full w-full md:w-1/5 z-10 transition-transform duration-300', { 'transform -translate-x-full md:translate-x-0': !isSidebarOpen }]"
    >
      <div class="flex flex-col justify-between items-center h-full">
        <nav class="flex flex-col items-start w-full gap-4 flex-1">
          <ul class="flex flex-col justify-start items-start gap-4 list-none w-full mt-8 flex-1">
            <li
              v-for="(item, index) in menuItems"
              :key="index"
              @click="navigate(item.route)"
              class="cursor-pointer p-2 rounded-md transition-colors duration-300 w-full"
              :class="{ 'text-blue-500': $route.path === item.route, 'hover:bg-gray-700': $route.path !== item.route }"
            >
              <div class="flex items-center pl-4">
                <i :class="`mdi mdi-${item.icon}`"></i>
                <span class="ml-2 font-bold">{{ item.title }}</span>
              </div>
            </li>
          </ul>
          <ul class="flex flex-col justify-end items-start gap-4 list-none w-full mb-8">
            <li
              @click="showLogoutModal = true"
              class="cursor-pointer p-2 rounded-md transition-colors duration-300 w-full"
              :class="{ 'text-blue-500': $route.path === '/logout', 'hover:bg-gray-700': $route.path !== '/logout' }"
            >
              <div class="flex text-red-600 items-center pl-4">
                <i class="mdi mdi-logout"></i>
                <span class="ml-2 font-bold">Logout</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="md:ml-64 lg:ml-64 w-full p-4 relative">
      <button
        class="md:hidden fixed top-4 right-4 z-20 bg-gray-800 text-white p-2 rounded-md"
        @click="toggleSidebar"
      >
        <i :class="`mdi mdi-${isSidebarOpen ? 'close' : 'menu'}`"></i>
      </button>
      <router-view />
    </main>

    <!-- Logout Modal -->
    <div v-if="showLogoutModal" class="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 class="text-xl font-semibold mb-4">Confirm Logout</h2>
        <p class="mb-4">Are you sure you want to logout?</p>
        <div class="flex justify-end space-x-2">
          <button @click="logout" class="bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600">Logout</button>
          <button @click="showLogoutModal = false" class="bg-gray-300 px-4 py-2 rounded-md shadow hover:bg-gray-400">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      isSidebarOpen: true,
      showLogoutModal: false,
      menuItems: [
        { title: 'Dashboard', route: '/', icon: 'view-dashboard' },
        { title: 'Orders', route: '/orders', icon: 'shopping' },
        { title: 'Products', route: '/products', icon: 'package-variant' },
        { title: 'Customers', route: '/customers', icon: 'account-group' },
        { title: 'Settings', route: '/settings', icon: 'cog' },
      ],
    };
  },
  methods: {
    navigate(route) {
      this.$router.push(route);
      this.isSidebarOpen = false; // Close sidebar on navigation
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    logout() {
      this.showLogoutModal = false;
      this.$router.push('/logout');
    },
  },
  watch: {
    $route() {
      this.isSidebarOpen = false; // Close sidebar on route change
    },
  },
};
</script>
