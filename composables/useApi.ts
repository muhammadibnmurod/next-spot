import { useNotification } from "naive-ui";

export default function useApi<T>(url: string, options: any = {}) {
  url = url.replace("/api/v1", "");

  const config = useRuntimeConfig();
  const { getAccessToken, refreshAccessToken } = useAuth();
  const router = useRouter();
  const notification = useNotification();
  let headers: Record<string, string> = {};

  // Устанавливаем заголовок Authorization, если есть токен доступа
  const accessToken = getAccessToken();
  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  // Список URL, для которых не применяется обновление токена
  const ignoreList = ["/auth", "/auth/refresh"];

  // Базовые опции для запроса
  const fetchOptions = {
    baseURL: config.public.NUXT_PUBLIC_API_BASE_URL,
    // immediate: !['POST', 'PUT', 'PATCH', 'DELETE'].includes(options?.method),
    watch: false,
    // timeout: 100,
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
    transform: (
      response: T extends void ? unknown : T
    ): T extends void ? unknown : T =>
      (response && typeof response === "object" && "data" in response
        ? response
        : response) as T extends void ? unknown : T,
    // Обработка ошибок ответа (например, 401)
    onResponseError: async ({
      response,
      options,
    }: {
      response: any;
      options: any;
    }) => {
      const message = response?._data?.error ?? "Unknown server error";

      notification.error({
        title: "Error",
        content: message,
        duration: 3000,
      });

      if (response.status === 401 && !ignoreList.includes(url)) {
        const refreshed = await refreshAccessToken();
        if (refreshed) {
          // Обновляем заголовки с новым токеном и повторяем запрос
          options.headers = {
            ...options.headers,
            Authorization: `Bearer ${getAccessToken()}`,
          };
          // Повторно выполняем запрос
          return useFetch<T>(url, options);
        }
      } else if (url === "/auth/refresh" && response.status === 401) {
        // Обработка ошибки обновления токена
        setTimeout(() => {
          router.go(0);
        });
      }
    },
  };
  // Выполняем запрос с нативной реактивностью
  return useFetch<T>(url, fetchOptions);
}
