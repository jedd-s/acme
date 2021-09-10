import React from 'react'
import {PromiseCacheProvider} from '../components/promise-cache'

const cache = new Map()

export default function App({Component, pageProps}) {
    return (
        <PromiseCacheProvider value={cache}>
            <Component {...pageProps} />
        </PromiseCacheProvider>
    )
}
