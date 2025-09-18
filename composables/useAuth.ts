export default function useAuth() {
  // base cookie options
  const base = { path: '/', sameSite: 'lax' as const, secure: process.client && location.protocol === 'https:' }

  const accessToken = useCookie<string | null>('access_token', base)
  const refreshToken = useCookie<string | null>('refresh_token', base)

  function getAccessToken(): string | null {
    return accessToken.value || null
  }

  async function refreshAccessToken(): Promise<boolean> {
    if (!refreshToken.value) return false
    try {
      if (accessToken.value && refreshToken.value) {
        const body = { refresh_token: refreshToken.value, token: accessToken.value }
        const { data, error } = await useApiService().auth.refresh_token(body)
        if (error.value || !data.value) { clearTokens(); return false }
        accessToken.value = (data.value as { access_token: string }).access_token
        const rt = (data.value as { refresh_token?: string }).refresh_token
        if (rt) refreshToken.value = rt
        return true
      } else { clearTokens(); return false }
    } catch { clearTokens(); return false }
  }

  // NEW: set tokens (remember = true → 30 days; false → session)
  function setTokens(payload: { access_token: string; refresh_token?: string }, remember = true) {
    const opts = remember ? { ...base, maxAge: 60 * 60 * 24 * 30 } : base
    useCookie('access_token', opts).value = payload.access_token
    if (payload.refresh_token) useCookie('refresh_token', opts).value = payload.refresh_token
  }

  function clearTokens() {
    useCookie('access_token', { ...base, maxAge: -1 }).value = ''
    useCookie('refresh_token', { ...base, maxAge: -1 }).value = ''
  }

  function logout() { clearTokens() }

  return { getAccessToken, refreshAccessToken, setTokens, logout }
}
