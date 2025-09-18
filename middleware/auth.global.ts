export default defineNuxtRouteMiddleware((to, from) => {
  // useCookie('access_token').value = 'test'
  const token = useCookie('access_token')
  const authPaths = [
    '/auth',
  ]

  // User is NOT logged in but trying to access a protected route
  if (!token.value && !authPaths.includes(to.path)) {
    return navigateTo('/auth')
  }

  // User IS logged in but trying to access an auth page
  if (token.value && authPaths.includes(to.path)) {
    return navigateTo('/example')
  }
})
