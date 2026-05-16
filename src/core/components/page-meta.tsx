import { Helmet } from 'react-helmet-async'

interface PageMetaProps {
  title: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  robots?: string
  author?: string
  twitterCard?: 'summary' | 'summary_large_image'
}

export function PageMeta({
  title,
  description = 'Fast, secure, and modern gaming top up platform.',
  keywords = [],
  image = '/og/image.png',
  url,
  type = 'website',
  robots = 'index, follow',
  author = 'Sanz Store',
  twitterCard = 'summary_large_image',
}: PageMetaProps) {
  const siteName = import.meta.env.VITE_APP_NAME || 'Sanz Store'

  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://sanzstore-ind.vercel.app'

  const fullTitle = `${title} - ${siteName}`

  const canonicalUrl = url ? `${siteUrl}${url}` : siteUrl

  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`

  const keywordContent = keywords.join(', ')

  return (
    <Helmet prioritizeSeoTags>
      {/* Basic SEO */}
      <title>{fullTitle}</title>

      <meta name="title" content={fullTitle} />

      <meta name="description" content={description} />

      <meta name="robots" content={robots} />

      <meta name="author" content={author} />

      {keywordContent && <meta name="keywords" content={keywordContent} />}

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />

      <meta property="og:site_name" content={siteName} />

      <meta property="og:title" content={fullTitle} />

      <meta property="og:description" content={description} />

      <meta property="og:url" content={canonicalUrl} />

      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />

      <meta name="twitter:title" content={fullTitle} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={imageUrl} />

      {/* Mobile */}
      <meta name="theme-color" content="#000000" />
    </Helmet>
  )
}
