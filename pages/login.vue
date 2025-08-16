<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="flex justify-center">
        <NuxtLink to="/" class="text-3xl font-bold text-indigo-600">
          Welkesa
        </NuxtLink>
      </div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        AI-powered medical documentation platform
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow-lg rounded-xl sm:px-10">
        <form class="space-y-6" @submit.prevent="handleLogin">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="mt-1">
              <input
                id="email"
                v-model="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="your@email.com"
              >
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div class="mt-1">
              <input
                id="password"
                v-model="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="••••••••"
              >
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                v-model="rememberMe"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              >
              <label for="remember-me" class="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <NuxtLink to="/forgot-password" class="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </NuxtLink>
            </div>
          </div>

          <div>
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
              :class="{'opacity-75 cursor-not-allowed': isLoading}"
            >
              <span v-if="!isLoading">Sign in</span>
              <svg v-else class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </button>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">
                Or try demo accounts
              </span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-1 gap-3">
            <button
              v-for="account in demoAccounts"
              :key="account.email"
              @click="fillDemoAccount(account)"
              class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
            >
              <UserCircleIcon class="h-5 w-5 mr-2 text-indigo-500" />
              Login as {{ account.role }}
            </button>
          </div>
        </div>
      </div>

      <div class="mt-6 text-center text-sm text-gray-600">
        <p>
          Don't have an account?
          <NuxtLink to="/register" class="font-medium text-indigo-600 hover:text-indigo-500">
            Request access
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { UserCircleIcon } from '@heroicons/vue/24/outline';

const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const isLoading = ref(false);
const auth = useAuth();

const demoAccounts = [
  { 
    email: 'happyeth@gmail.com', 
    password: 'User123', 
    role: 'Doctor', 
    name: 'Dr. Happy Patient',
    specialty: 'General Practice'
  },
  { 
    email: 'edelawit77@gmail.com', 
    password: 'Doctor123', 
    role: 'Worker', 
    name: 'Dr. Edelawit Scribe',
    specialty: 'Medical Scribe'
  },
  { 
    email: 'abel2211@gmail.com', 
    password: 'Admin123', 
    role: 'Admin', 
    name: 'Admin Abel',
    specialty: 'System Administrator'
  }
];

const fillDemoAccount = (account) => {
  email.value = account.email;
  password.value = account.password;
  rememberMe.value = true;
};

const handleLogin = async () => {
  isLoading.value = true;
  
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const account = demoAccounts.find(
      acc => acc.email === email.value && acc.password === password.value
    );

    if (account) {
      auth.value.isAuthenticated = true;
      auth.value.user = {
        email: account.email,
        name: account.name,
        role: account.role,
        specialty: account.specialty,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(account.name)}&background=6366f1&color=fff`
      };
      
      // Store in localStorage if remember me is checked
      if (rememberMe.value) {
        localStorage.setItem('welkesa_remembered_email', account.email);
      } else {
        localStorage.removeItem('welkesa_remembered_email');
      }
      
      // Redirect based on role
      switch(account.role) {
        case 'Admin':
          await navigateTo('/admin/dashboard');
          break;
        case 'Doctor':
          await navigateTo('/doctor/dashboard');
          break;
        case 'Worker':
          await navigateTo('/worker/dashboard');
          break;
        default:
          await navigateTo('/dashboard');
      }
    } else {
      throw new Error('Invalid credentials. Try one of the demo accounts.');
    }
  } catch (error) {
    alert(error.message);
  } finally {
    isLoading.value = false;
  }
};

// Check for remembered email on component mount
onMounted(() => {
  const rememberedEmail = localStorage.getItem('welkesa_remembered_email');
  if (rememberedEmail) {
    email.value = rememberedEmail;
    rememberMe.value = true;
  }
});
</script>

<style scoped>
/* Custom styling for the login form */
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, #f0f4ff, #ffffff);
}

.shadow-lg {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

input:focus {
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
  transition: box-shadow 0.2s ease-in-out;
}
</style>
