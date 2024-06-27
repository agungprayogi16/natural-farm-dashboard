module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    extends: [
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',
        '@vue/typescript/recommended',
    ],
    rules: {
        // Add or modify any rules you need here
    },
};
