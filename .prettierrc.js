module.exports = {
    jsxBracketSameLine: true,
    printWidth: 80,
    semi: false,
    bracketSpacing: false,
    tabWidth: 4,
    singleQuote: true,
    overrides: [
        {
            files: ['*.js', 'packages/*/*.js'],
            options: {
                trailingComma: 'all',
                parser: 'babel',
            },
        },
        {
            files: ['*.ts', '*.tsx', 'packages/*/*.ts', 'packages/*/*.tsx'],
            options: {
                trailingComma: 'all',
                parser: 'babel-ts',
            },
        },
        {
            files: ['*.json', 'packages/*.json'],
            options: {
                singleQuote: false,
                trailingComma: 'none',
                tabWidth: 2,
                parser: 'json',
            },
        },
        {
            files: ['*.md', 'packages/*.md'],
            options: {
                parser: 'markdown',
                printWidth: 0,
            },
        },
    ],
}
