<template>
  <div class="flex ml-16 p-4 items-center justify-start ">
    <i class="fas fa-cog mr-3 fa-2x  text-blue-500"></i>
    <h2 class="text-3xl font-bold text-gray-800">
      Settings
    </h2>

  </div>
  <div class="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
    <div class="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 space-y-6">
      
      
      <div class="space-y-4">
        <h3 class="text-2xl font-semibold text-gray-700">Profile</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex flex-col">
            <label for="username" class="text-gray-700">Username</label>
            <input type="text" id="username" v-model="profile.username" class="px-4 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div class="flex flex-col">
            <label for="email" class="text-gray-700">Email</label>
            <input type="email" id="email" v-model="profile.email" class="px-4 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div class="flex flex-col">
            <label for="phone" class="text-gray-700">Phone</label>
            <input type="tel" id="phone" v-model="profile.phone" class="px-4 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
        </div>
        <button @click="updateProfile" class="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600">
          Save Profile
        </button>
      </div>

      <!-- Password Section -->
      <div class="space-y-4">
        <h3 class="text-2xl font-semibold text-gray-700">Change Password</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex flex-col">
            <label for="currentPassword" class="text-gray-700">Current Password</label>
            <input type="password" id="currentPassword" v-model="passwords.currentPassword" class="px-4 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div class="flex flex-col">
            <label for="newPassword" class="text-gray-700">New Password</label>
            <input type="password" id="newPassword" v-model="passwords.newPassword" class="px-4 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div class="flex flex-col">
            <label for="confirmPassword" class="text-gray-700">Confirm New Password</label>
            <input type="password" id="confirmPassword" v-model="passwords.confirmPassword" class="px-4 py-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
        </div>
        <button @click="changePassword" class="bg-yellow-500 text-white px-4 py-2 rounded-md shadow hover:bg-yellow-600">
          Change Password
        </button>
      </div>

      <!-- Notifications Section -->
      <div class="space-y-4">
        <h3 class="text-2xl font-semibold text-gray-700">Notifications</h3>
        <div class="flex items-center">
          <input type="checkbox" id="emailNotifications" v-model="notifications.email" class="mr-2" />
          <label for="emailNotifications" class="text-gray-700">Email Notifications</label>
        </div>
        <div class="flex items-center">
          <input type="checkbox" id="smsNotifications" v-model="notifications.sms" class="mr-2" />
          <label for="smsNotifications" class="text-gray-700">SMS Notifications</label>
        </div>
        <div class="flex items-center">
          <input type="checkbox" id="pushNotifications" v-model="notifications.push" class="mr-2" />
          <label for="pushNotifications" class="text-gray-700">Push Notifications</label>
        </div>
        <button @click="updateNotifications" class="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600">
          Save Notifications
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const profile = ref({
      username: '',
      email: '',
      phone: '',
    });

    const passwords = ref({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });

    const notifications = ref({
      email: true,
      sms: false,
      push: true,
    });

    const updateProfile = () => {
      // Logic to update profile
      console.log('Profile updated:', profile.value);
    };

    const changePassword = () => {
      // Logic to change password
      console.log('Password changed:', passwords.value);
    };

    const updateNotifications = () => {
      // Logic to update notifications
      console.log('Notifications updated:', notifications.value);
    };

    return {
      profile,
      passwords,
      notifications,
      updateProfile,
      changePassword,
      updateNotifications,
    };
  },
});
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
