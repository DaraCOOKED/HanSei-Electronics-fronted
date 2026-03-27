<script setup>
import axios from 'axios'
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const isLoading = ref(false)
const error = ref('')

useHead({
  bodyAttrs: {
    class: 'bg-blue-500'
  }
})

definePageMeta({
  layout: false
})

const handleLogin = async () => {
  isLoading.value = true
  error.value = ''

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/login', {
  email: email.value,
  password: password.value
}, {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

    // Save token to cookie
    const cookie = useCookie('token')
    cookie.value = response.data.token

    // Go to dashboard
    navigateTo('/dashboard')

  } catch (err) {
    error.value = 'Wrong email or password!'
    console.error('Login error:', err)
  } finally {
    isLoading.value = false
  }
}
</script>

    <template class="bg-grey-100">
    <div class="min-h-screen flex items-center justify-center bg-gray-200 px-4">

        <div class="w-full max-w-md bg-gray-100 p-10 rounded-2xl   border-gray-400 space-y-8">

        
        <div class="text-center">
            <h1 class="text-3xl justify-center flex  font-bold text-gray-900">
                HanSei
            </h1>
        </div>

        
        <form class="space-y-5" @submit.prevent="handleLogin">

            <div>
            <label class="block text-sm font-semibold text-gray-700">
                Username or Email Address
            </label>

            <input
                v-model="email"
                type="email"
                required
                placeholder="example@email.com"
                class="mt-1 w-full px-4 py-3 bg-gray-50 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            </div>

            <div>
            <label class="block text-sm font-semibold text-gray-700">
                Password
            </label>

            <input
                v-model="password"
                type="password"
                required
                placeholder="Password"
                class="mt-1 w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            </div>

    
            <div class="flex items-center justify-between text-sm">
            <label class="flex items-center text-gray-600">
                <input type="checkbox" class="mr-2">
                Remember me
            </label>

            <NuxtLink to="/forgot-password" class="text-blue-600 hover:underline">
                Lost Your password?
            </NuxtLink>
            </div>

          <!-- Error message -->
<p v-if="error" class="text-red-500 text-sm text-center">{{ error }}</p>

<button 
  type="submit" 
  :disabled="isLoading" 
  class="w-full py-3 bg-[#0077b6] hover:bg-blue-600 text-white font-semibold rounded-lg transition disabled:opacity-50"
>
  {{ isLoading ? 'Signing in...' : 'Log In' }}
</button>
        </form>
      
<p class="text-center text-sm text-gray-600 mt-4">
  Don't have an account?
  <NuxtLink to="/register" class="text-blue-600 hover:underline font-semibold">
    Register
  </NuxtLink>
</p>

        </div>

    </div>
    </template>