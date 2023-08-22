module.exports = {
    schema: [
        {
            'https://charmed-mammoth-85.hasura.app/v1/graphql': {
                headers: {},
            },
        },
    ],
    documents: ['./src/**/*.tsx', './src/**/*.ts'],
    overwrite: true,
    generates: {
        './src/generated/graphql.tsx': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
            config: {
                skipTypename: false,
                withHooks: true,
                withHOC: false,
                withComponent: false,
            },
        },
        './src/generated/graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
};