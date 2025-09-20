import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function Seo() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const title = t('meta.title', 'Bumblebee')
    const desc  = t('meta.description', '')

    document.title = title
    document.documentElement.setAttribute('lang', (i18n.language || 'pt').slice(0,2))

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', desc)
  }, [t, i18n.language])

  return null
}
