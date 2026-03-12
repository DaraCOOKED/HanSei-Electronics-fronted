<script setup>
const form = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const isLoading = ref(false)

const handleRegister = async () => {
  if (form.value.password !== form.value.confirmPassword) {
    alert("Passwords do not match!")
    return
  }

  isLoading.value = true
  try {
 
definePageMeta({
  layout: 'blank' // This switches the layout ONLY for this page
})

    console.log('Registering user:', form.value)

  } catch (err) {
    console.error('Registration error:', err)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 tracking-tight">
          Create Account
        </h2>
        <p class="mt-2 text-sm text-gray-500">
          Join Human Develop and start your journey.
        </p>
      </div>

      <form class="mt-8 space-y-5" @submit.prevent="handleRegister">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-semibold text-gray-700">Full Name</label>
            <input 
              v-model="form.name"
              type="text" 
              required 
              placeholder="John Doe"
              class="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700">Email Address</label>
            <input 
              v-model="form.email"
              type="email" 
              required 
              placeholder="name@company.com"
              class="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700">Password</label>
            <input 
              v-model="form.password"
              type="password" 
              required 
              placeholder="••••••••"
              class="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700">Confirm Password</label>
            <input 
              v-model="form.confirmPassword"
              type="password" 
              required 
              placeholder="••••••••"
              class="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
        </div>

        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input id="terms" type="checkbox" required class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
          </div>
          <label for="terms" class="ml-2 text-sm text-gray-600">
            I agree to the <a href="#" class="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" class="text-blue-600 hover:underline">Privacy Policy</a>.
          </label>
        </div>

        <button 
          type="submit" 
          :disabled="isLoading"
          class="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-[0.98] disabled:opacity-50"
        >
          {{ isLoading ? 'Creating account...' : 'Create Account' }}
        </button>
      </form>

      <div class="pt-6 border-t border-gray-100 text-center">
        <p class="text-sm text-gray-600">
          Already have an account? 
          <NuxtLink to="/login" class="font-bold text-blue-600 hover:text-blue-500">Sign in</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>