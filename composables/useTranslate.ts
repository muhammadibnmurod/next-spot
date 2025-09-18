
export function useTranslation(names?: any) {
  const { locale } = useI18n()
  if (names)
    return names.find((item: any) => item.lang === locale.value)?.data
  else return null
}