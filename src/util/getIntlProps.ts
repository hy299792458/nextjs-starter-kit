import pick from 'lodash/pick'
import intl from '../intl'

export async function getIntlProps(namespaces: Array<string>, locale?: string) {
  const messages = pick(intl.get(locale ?? 'en'), namespaces)
  return {
    messages,
    now: new Date().getTime()
  }
}
