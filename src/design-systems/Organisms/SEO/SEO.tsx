import Head from 'next/head'
import { useTheme } from 'next-themes'

export interface AppConfigProps {
  name: string
  title: string
  description: string
  url: string
  keywords?: string
  image?: string
  favicon?: string
  twitter?: string
  themeColor?: string
  themeColorDark?: string
}

export interface SeoProps {
  config: AppConfigProps
}

export const SEO: React.FC<SeoProps> = ({ config }) => {
  const { resolvedTheme } = useTheme()

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        name="viewport"
      />

      <meta content={config.name} name="apple-mobile-web-app-title" />
      <meta content="yes" name="apple-mobile-web-app-capable" />
      <meta content={config.name} name="application-name" />
      <meta content="default" name="apple-mobile-web-app-status-bar-style" />

      <meta content="yes" name="mobile-web-app-capable" />
      <meta content={resolvedTheme === 'dark' ? config.themeColorDark : config.themeColor} name="theme-color" />

      <link href={config.image} rel="apple-touch-icon" />
      <link href={config.image} rel="icon" sizes="512x512" type="image/png" />

      <link href={config.favicon} rel="icon" />

      <meta content="website" name="og:type" property="og:type" />
      <meta content={config.title} name="og:title" property="og:title" />
      <meta content={config.description} name="og:description" property="og:description" />
      <meta content={config.name} name="og:site_name" property="og:site_name" />
      <meta content={config.url} name="og:url" property="og:url" />
      <meta content={`${config?.image}?d=l`} name="og:image" property="og:image" />
      <meta content="summary_large_image" name="twitter:card" />

      <meta content={config.description} name="description" />
      <meta content={config.keywords} name="keywords" />

      <title>{config.title}</title>
    </Head>
  )
}
