module.exports = {
    presets: [
        [
            'next/babel',
            {
                'preset-env': {
                    // targets: {
                    //     node: 'current',
                    //     browsers: 'last 2 versions',
                    // },
                },
                'preset-react': {runtime: 'automatic'},
            },
        ],
    ],
    plugins: [
        // 'syntax-trailing-function-commas',
        // '@babel/plugin-syntax-jsx',
        // '@babel/plugin-transform-react-jsx',
        // '@babel/plugin-transform-flow-strip-types',
        // [
        //     '@babel/plugin-proposal-object-rest-spread',
        //     {loose: true, useBuiltIns: true},
        // ],
        // '@babel/plugin-transform-arrow-functions',
        // '@babel/plugin-transform-for-of',
        // '@babel/plugin-transform-computed-properties',
        // '@babel/plugin-transform-shorthand-properties',
        // ['@babel/plugin-transform-spread', {loose: true, useBuiltIns: true}],
        // '@babel/plugin-transform-literals',
        // ['@babel/plugin-transform-template-literals', {loose: true}],
        // '@babel/plugin-transform-parameters',
        // [
        //     '@babel/plugin-transform-block-scoping',
        //     {throwIfClosureRequired: true},
        // ],
        // [
        //     '@babel/plugin-transform-destructuring',
        //     {loose: true, useBuiltIns: true},
        // ],
    ],
}
