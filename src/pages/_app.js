import '@/styles/globals.css'
import Layout from './layout/Layout'
import { Provider } from 'react-redux'
import { store } from './store'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </>
  )
}
