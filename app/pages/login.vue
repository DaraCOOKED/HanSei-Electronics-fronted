    <script setup>
    import { ref } from 'vue'

    const email = ref('')
    const password = ref('')
    const isLoading = ref(false)


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

    try {

    
        console.log("Login attempt:", {
        email: email.value,
        password: password.value
        })


    } catch (error) {
        alert("Login failed. Please check your email and password.")
        console.error("Login error:", error)
    } finally {
        isLoading.value = false
    }
    }
    </script>

    <template class="bg-grey-100">
    <div class="min-h-screen flex items-center justify-center bg-gray-200 px-4">

        <div class="w-full max-w-md bg-gray-100 p-10 rounded-2xl  border border-gray-400 space-y-8">

        
        <div class="text-center">
            <h1 class="text-3xl justify-center flex  font-bold text-gray-900">
                <img src="" class=" absolute bottom-135 w-90">
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
                placeholder="*********"
                class="mt-1 w-full items-center align-center px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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

            <button
            type="submit"
            :disabled="isLoading"
            class="w-full py-3 bg-[#0077b6] hover:bg-blue-600 text-white font-semibold rounded-lg transition disabled:opacity-50"
            >
            {{ isLoading ? 'Signing in...' : 'Log In' }}
            </button>

        </form>

        </div>

    </div>
    </template>