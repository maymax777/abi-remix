import 'styles/style.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Providers } from 'contexts/providers'
import { AppConfigProps, SEO } from 'design-systems/Organisms/SEO/SEO'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const metadata = pageProps?.metadata as AppConfigProps

  return (
    <>
      {metadata && <SEO config={metadata} />}
      <Providers>
        <Component key={router.asPath} {...pageProps} />
      </Providers>
    </>
  )
}
export default App
