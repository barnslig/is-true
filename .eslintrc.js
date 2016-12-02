module.exports = {
  'env': {
    'node': 'true',
    'browser': true,
  },
  'extends': [
    'eslint:recommended',
  ],
  'parserOptions': {
    'sourceType': 'module'
  },
  'rules': {
    // additional rules
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1
      },
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],

    // enforced serious stylistic rules
    'curly': 'error',
    'no-multi-spaces': 'error',
    'no-nested-ternary': 'error',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-extend-native': 'error',
    'no-param-reassign': 'error',
    'no-return-assign': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'wrap-iife': ['error', 'inside'],
    'array-bracket-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-mixed-operators': 'error',
    'no-multiple-empty-lines': 'error',
    'no-spaced-func': 'error',
    'no-trailing-spaces': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'keyword-spacing': 'error',
    'quote-props': ['error', 'consistent'],

    'arrow-spacing': 'error',
    'no-duplicate-imports': 'error',
    'no-var': 'error',

    // reminders on good style
    'no-unneeded-ternary': 'warn',
    'no-console': 'warn',
    'no-lonely-if': 'warn',
    'no-self-compare': 'warn',
    'no-unused-expressions': 'warn',
    'vars-on-top': 'warn',
    'no-negated-condition': 'warn',

    'no-useless-constructor': 'warn',
    'prefer-const': 'warn',
  }
};
