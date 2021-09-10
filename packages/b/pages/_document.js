import {Html, Head, Main, NextScript} from 'next/document'

const pwa = [
    {
        rel: 'preload',
        href: '/fonts/sfsymbols3.woff2',
        key: '/fonts/sfsymbols3.woff2',
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'same-origin',
        component: 'link',
    },
    {
        name: 'mobile-web-app-capable',
        key: 'mobile-web-app-capable',
        content: 'yes',
        component: 'meta',
    },
    {
        name: 'apple-touch-fullscreen',
        key: 'apple-touch-fullscreen',
        content: 'yes',
        component: 'meta',
    },
    {
        name: 'apple-mobile-web-app-capable',
        key: 'apple-mobile-web-app-capable',
        content: 'yes',
        component: 'meta',
    },
    {
        name: 'apple-mobile-web-app-title',
        key: 'apple-mobile-web-app-title',
        content: 'ReactUI',
        component: 'meta',
    },
    {
        name: 'apple-mobile-web-app-status-bar-style',
        key: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
        component: 'meta',
    },
    {
        rel: 'manifest',
        key: 'manifest',
        href: '/manifest.json',
        component: 'link',
    },
    {
        rel: 'shortcut icon',
        key: 'shortcut icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
        component: 'link',
    },
    {
        rel: 'icon',
        key: 'icon',
        type: 'image/png',
        sizes: '48x48',
        href: '/pwa/favicon-48x48.png',
        component: 'link',
    },
    {
        rel: 'mask-icon',
        key: 'mask-icon',
        color: '#000000',
        href: '/pwa/safari-pinned-tab.svg',
        component: 'link',
    },
    {
        rel: 'apple-touch-icon',
        key: 'apple-touch-icon',
        sizes: '192x192',
        href: '/pwa/apple-touch-icon.png',
        component: 'link',
    },
    {
        href: '/pwa/apple-splash-1125x2436.png',
        media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)',
        key: 'iPhone X (1125px x 2436px)',
        rel: 'apple-touch-startup-image',
        component: 'link',
    },
    {
        href: '/pwa/apple-splash-750x1334.png',
        media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)',
        key: 'iPhone 8, 7, 6s, 6 (750px x 1334px)',
        rel: 'apple-touch-startup-image',
        component: 'link',
    },
    {
        href: '/pwa/apple-splash-1242x2208.png',
        media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)',
        key: 'iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus (1242px x 2208px)',
        rel: 'apple-touch-startup-image',
        component: 'link',
    },
    {
        href: '/pwa/apple-splash-1242x2688.png',
        media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)',
        key: 'iPhone 10 Max',
        rel: 'apple-touch-startup-image',
        component: 'link',
    },
    {
        href: '/pwa/apple-splash-640x1136.png',
        media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
        key: 'iPhone 5 (640px x 1136px)',
        rel: 'apple-touch-startup-image',
        component: 'link',
    },
    {
        href: '/pwa/apple-splash-1536x2048.png',
        media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)',
        key: 'iPad Mini, Air (1536px x 2048px)',
        rel: 'apple-touch-startup-image',
        component: 'link',
    },
    {
        href: '/pwa/apple-splash-1668x2226.png',
        media: '(device-width: 834px) and (device-height: 1113px) and (-webkit-device-pixel-ratio: 2)',
        key: 'iPad Pro 10.5" (1668px x 2224px)',
        rel: 'apple-touch-startup-image',
        component: 'link',
    },
    {
        href: '/pwa/apple-splash-2048x2732.png',
        media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)',
        key: 'iPad Pro 12.9" (2048px x 2732px)',
        rel: 'apple-touch-startup-image',
        component: 'link',
    },
]

export default function Document() {
    return (
        <Html>
            <Head>
                {pwa.map(({component: Component, key, ...props}) => (
                    <Component key={key} {...props} />
                ))}
            </Head>
            <body>
                <meta
                    name="viewport"
                    content="initial-scale=1,minimum-scale=1,maximum-scale=1,viewport-fit=cover"
                />
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
