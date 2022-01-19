import pick from 'lodash/pick'

export async function getIntlProps(namespaces: Array<string>, locale?: string) {
  const messages = pick(
    (await import(`../intl/${locale ?? 'en'}.json`)).default,
    namespaces
  )
  return {
    messages,
    now: new Date().getTime()
  }
}
