module.exports = {
    experimental: {
        reactRoot: true,
        concurrentFeatures: true,
        esmExternals: true,
    },
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
        const {babel} = defaultLoaders

        config.plugins.push(
            new webpack.DefinePlugin({
                __DEV__: process.env.NODE_ENV != 'production',
            }),
        )

        config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

        config.resolve.fallback = {
            ...config.resolve.fallback,
            // http: require.resolve('stream-http'),
            // https: require.resolve('https-browserify'),
            // buffer: require.resolve('buffer/'),
            // process: require.resolve('process/browser'),
            // events: require.resolve('events/'),
        }

        config.resolve.alias = {
            ...config.resolve.alias,
            'react/jsx-dev-runtime': require.resolve(
                'react/jsx-dev-runtime.js',
            ),
            'react/jsx-runtime': require.resolve('react/jsx-runtime.js'),
        }

        config.experiments = {
            ...config.experiments,
        }

        return config
    },
}
