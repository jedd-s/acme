module.exports = {
    // Stop eslint from looking for config in parent folders
    root: true,

    parser: '@babel/eslint-parser',

    plugins: ['react', 'react-hooks', 'jest', 'import'],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },

    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        babelOptions: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            caller: {
                supportsTopLevelAwait: true,
            },
        },
    },
    settings: {
        react: {
            version: 'experimental',
        },
        'import/internal-regex': '^internal',
        'import/parsers': {
            [require.resolve('@typescript-eslint/parser')]: [
                '.ts',
                '.tsx',
                '.d.ts',
            ],
        },
        'import/resolver': {
            [require.resolve('eslint-import-resolver-node')]: {
                extensions: ['.js'],
            },
        },
        // 'eslint-import-resolver-custom-alias': {
        //     alias: {
        //         'internal': 'a',
        //     },
        // },
    },
    overrides: [
        {
            files: ['packages/**'],
            rules: {
                'no-shadow': ['off', {builtinGlobals: false}],
                'import/no-extraneous-dependencies': [
                    'warn',
                    {devDependencies: false},
                ],
            },
        },
        {
            files: ['**/__tests__/**'],
            env: {jest: true},
            extends: ['plugin:jest/recommended'],
            rules: {
                'jest/expect-expect': 'off',
                'jest/no-disabled-tests': 'off',
                'jest/no-conditional-expect': 'off',
                'jest/valid-title': 'off',
                'jest/no-interpolation-in-snapshots': 'off',
            },
        },
        {
            files: ['**/*.ts', '**/*.tsx'],
            plugins: ['@typescript-eslint'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
                warnOnUnsupportedTypeScriptVersion: false,
            },
            rules: {
                // Handled by TS
                'no-dupe-class-members': 'off',
                'no-undef': 'off',
                'no-array-constructor': 'off',
                // +TSRules -EslintRules
                '@typescript-eslint/consistent-type-assertions': 'warn',
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': [
                    'warn',
                    {args: 'none', ignoreRestSiblings: true},
                ],
                'no-use-before-define': 'off',
                '@typescript-eslint/no-use-before-define': [
                    'warn',
                    {
                        functions: false,
                        classes: false,
                        variables: false,
                        typedefs: false,
                    },
                ],
                'no-unused-expressions': 'off',
                '@typescript-eslint/no-unused-expressions': [
                    'warn',
                    {
                        allowShortCircuit: true,
                        allowTernary: true,
                        allowTaggedTemplates: true,
                    },
                ],
                'no-useless-constructor': 'off',
                '@typescript-eslint/no-useless-constructor': 'off',
            },
        },
        {
            files: ['test/**/*', 'examples/**/*'],
            rules: {
                'react/react-in-jsx-scope': 'off',
            },
        },
        {
            files: ['packages/**/*.ts', 'packages/**/*.tsx'],
            rules: {
                '@typescript-eslint/no-unused-vars': [
                    'warn',
                    {
                        args: 'all',
                        argsIgnorePattern: '^_',
                        ignoreRestSiblings: true,
                    },
                ],
            },
        },
    ],
    rules: {
        /**
         * extends: https://github.com/vercel/next.js/blob/canary/.eslintrc.json
         * custom:
         *  -
         */
        'import/newline-after-import': ['warn', {count: 1}],
        'import/no-unresolved': 'off',
        'import/no-duplicates': 'warn',
        'import/first': 'warn',
        'import/order': 'off',
        'array-callback-return': 'warn',
        'default-case': ['warn', {commentPattern: '^no default$'}],
        'dot-location': ['warn', 'property'],
        eqeqeq: ['warn', 'smart'],
        'new-parens': 'warn',
        'no-array-constructor': 'warn',
        'no-caller': 'warn',
        'no-cond-assign': ['warn', 'except-parens'],
        'no-const-assign': 'warn',
        'no-control-regex': 'warn',
        'no-delete-var': 'warn',
        'no-dupe-args': 'warn',
        'no-dupe-class-members': 'warn',
        'no-dupe-keys': 'warn',
        'no-duplicate-case': 'warn',
        'no-empty-character-class': 'warn',
        'no-empty-pattern': 'warn',
        'no-eval': 'warn',
        'no-ex-assign': 'warn',
        'no-extend-native': 'warn',
        'no-extra-bind': 'warn',
        'no-extra-label': 'warn',
        'no-fallthrough': 'warn',
        'no-func-assign': 'warn',
        'no-implied-eval': 'warn',
        'no-invalid-regexp': 'warn',
        'no-iterator': 'warn',
        'no-label-var': 'warn',
        'no-labels': ['warn', {allowLoop: true, allowSwitch: false}],
        'no-lone-blocks': 'warn',
        'no-loop-func': 'warn',
        'no-mixed-operators': [
            'warn',
            {
                groups: [
                    ['&', '|', '^', '~', '<<', '>>', '>>>'],
                    ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                    ['&&', '||'],
                    ['in', 'instanceof'],
                ],
                allowSamePrecedence: false,
            },
        ],
        'no-multi-str': 'warn',
        'no-native-reassign': 'warn',
        'no-negated-in-lhs': 'warn',
        'no-new-func': 'warn',
        'no-new-object': 'warn',
        'no-new-symbol': 'warn',
        'no-new-wrappers': 'warn',
        'no-obj-calls': 'warn',
        'no-octal': 'warn',
        'no-octal-escape': 'warn',
        'no-redeclare': ['warn', {builtinGlobals: false}],
        'no-regex-spaces': 'warn',
        'no-restricted-syntax': ['warn', 'WithStatement'],
        'no-script-url': 'warn',
        'no-self-assign': 'warn',
        'no-self-compare': 'warn',
        'no-sequences': 'warn',
        'no-shadow': 'off',
        'no-shadow-restricted-names': 'warn',
        'no-sparse-arrays': 'warn',
        'no-template-curly-in-string': 'error',
        'no-this-before-super': 'warn',
        'no-throw-literal': 'warn',
        'no-undef': 'error',
        'no-unexpected-multiline': 'warn',
        'no-unreachable': 'warn',
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true,
            },
        ],
        'no-unused-labels': 'warn',
        'no-unused-vars': [
            'warn',
            {
                args: 'none',
                ignoreRestSiblings: true,
            },
        ],
        'no-use-before-define': [
            'warn',
            {
                functions: false,
                classes: false,
                variables: false,
            },
        ],
        'no-useless-computed-key': 'warn',
        'no-useless-concat': 'warn',
        'no-useless-constructor': 'warn',
        'no-useless-escape': 'warn',
        'no-useless-rename': [
            'warn',
            {
                ignoreDestructuring: false,
                ignoreImport: false,
                ignoreExport: false,
            },
        ],
        'no-with': 'warn',
        'no-whitespace-before-property': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        'require-yield': 'warn',
        'rest-spread-spacing': ['warn', 'never'],
        strict: ['warn', 'never'],
        'unicode-bom': ['warn', 'never'],
        'use-isnan': 'warn',
        'valid-typeof': 'warn',
        'getter-return': 'warn',
        'react/forbid-foreign-prop-types': ['warn', {allowInPropTypes: true}],
        'react/jsx-no-comment-textnodes': 'warn',
        'react/jsx-no-duplicate-props': 'warn',
        'react/jsx-no-target-blank': 'warn',
        'react/jsx-no-undef': 'error',
        'react/jsx-pascal-case': [
            'warn',
            {
                allowAllCaps: true,
                ignore: [],
            },
        ],
        'react/jsx-uses-react': 'warn',
        'react/jsx-uses-vars': 'warn',
        'react/no-danger-with-children': 'warn',
        'react/no-deprecated': 'warn',
        'react/no-direct-mutation-state': 'warn',
        'react/no-is-mounted': 'warn',
        'react/no-typos': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/require-render-return': 'error',
        'react/style-prop-object': 'warn',
        'react-hooks/rules-of-hooks': 'error',
    },
}
