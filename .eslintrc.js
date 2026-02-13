// .eslintrc.js - Production-Ready for ERP
module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  
  extends: [
    // React & JSX
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict',
    
    // Import/Export
    'plugin:import/recommended',
    'plugin:import/typescript', // Works with JS too
    
    // Testing
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    
    // Performance & Best Practices
    'plugin:react-perf/recommended',
    'plugin:sonarjs/recommended',
    
    // Security
    'plugin:security/recommended',
    'plugin:no-unsanitized/recommended',
    
    // Prettier integration (must be last)
    'prettier',
  ],
  
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    'testing-library',
    'jest-dom',
    'react-perf',
    'sonarjs',
    'security',
    'no-unsanitized',
    'unicorn',
    'promise',
    'tailwindcss',
    'simple-import-sort',
    'perfectionist',
    'deprecation',
    'eslint-comments',
    'prettier',
    
    // Custom plugins (to be created)
    '@trusoft/module-boundaries',
    '@trusoft/rbac',
    '@trusoft/react-query',
    '@trusoft/security',
    '@trusoft/design-tokens',
    '@trusoft/performance',
  ],
  
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
        moduleDirectory: ['node_modules', 'src', 'packages'],
      },
      alias: {
        map: [
          ['@', './src'],
          ['@packages', './packages'],
          ['@modules', './src/modules'],
          ['@ui', './packages/ui'],
          ['@api', './packages/api'],
          ['@auth', './packages/auth'],
          ['@events', './packages/events'],
          ['@utils', './packages/utils'],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
    tailwindcss: {
      config: './tailwind.config.js',
    },
  },
  
  // Global rules - applied to all files
  rules: {
    // ============================================
    // ERROR PREVENTION & BEST PRACTICES
    // ============================================
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-debugger': 'error',
    'no-alert': 'error',
    'no-var': 'error',
    'prefer-const': ['error', { destructuring: 'all' }],
    'prefer-template': 'error',
    'object-shorthand': ['error', 'always'],
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-await-in-loop': 'error',
    'require-atomic-updates': 'error',
    'no-self-compare': 'error',
    'no-throw-literal': 'error',
    'no-return-await': 'error',
    'require-await': 'error',
    
    // ============================================
    // SECURITY RULES
    // ============================================
    'security/detect-object-injection': 'error',
    'security/detect-non-literal-fs-filename': 'off', // Browser only
    'security/detect-unsafe-regex': 'error',
    'security/detect-bidi-characters': 'error',
    'security/detect-disable-mustache-escape': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-no-csrf-before-method-override': 'error',
    'security/detect-pseudoRandomBytes': 'error',
    'security/detect-possible-timing-attacks': 'error',
    
    'no-unsanitized/property': 'error',
    'no-unsanitized/method': 'error',
    
    // ============================================
    // REACT SPECIFIC
    // ============================================
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    'react/prop-types': 'off', // We use Zod instead
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'error',
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/no-typos': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-string-refs': 'error',
    'react/no-render-return-value': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-access-state-in-setstate': 'error',
    
    // React Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': ['error', {
      additionalHooks: '(useMemoWithDeepCompare|useDeepCompareEffect)',
    }],
    
    // ============================================
    // PERFORMANCE RULES
    // ============================================
    'react-perf/jsx-no-new-object-as-prop': 'error',
    'react-perf/jsx-no-new-array-as-prop': 'error',
    'react-perf/jsx-no-new-function-as-prop': 'error',
    'sonarjs/no-nested-template-literals': 'error',
    'sonarjs/no-redundant-jump': 'error',
    'sonarjs/no-identical-functions': 'error',
    'sonarjs/no-duplicate-string': ['error', { threshold: 3 }],
    'sonarjs/no-small-switch': 'error',
    'sonarjs/cognitive-complexity': ['error', 15],
    
    // ============================================
    // ACCESSIBILITY (WCAG 2.1 AA)
    // ============================================
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
      aspects: ['noHref', 'invalidHref', 'preferButton'],
    }],
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/heading-has-content': 'error',
    'jsx-a11y/html-has-lang': 'error',
    'jsx-a11y/iframe-has-title': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/label-has-associated-control': 'error',
    'jsx-a11y/media-has-caption': 'error',
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/no-autofocus': 'error',
    'jsx-a11y/no-distracting-elements': 'error',
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',
    'jsx-a11y/no-noninteractive-element-interactions': ['error', {
      handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
    }],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'error',
    'jsx-a11y/no-noninteractive-tabindex': 'error',
    'jsx-a11y/no-onchange': 'error',
    'jsx-a11y/no-redundant-roles': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/scope': 'error',
    'jsx-a11y/tabindex-no-positive': 'error',
    
    // ============================================
    // IMPORT/EXPORT RULES
    // ============================================
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': ['error', { maxDepth: 10 }],
    'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
    'import/no-deprecated': 'warn',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '**/*.test.{js,jsx}',
        '**/*.spec.{js,jsx}',
        '**/test/**',
        '**/__tests__/**',
        '**/__mocks__/**',
        'vite.config.js',
        'vitest.config.js',
        'playwright.config.js',
        'eslint.config.js',
        'tailwind.config.js',
      ],
      optionalDependencies: false,
    }],
    'import/no-mutable-exports': 'error',
    'import/no-commonjs': 'error',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'error',
    'import/first': 'error',
    'import/exports-last': 'error',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      json: 'never',
    }],
    'import/order': 'off', // Using simple-import-sort instead
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-anonymous-default-export': ['error', {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowCallExpression: false,
      allowNew: false,
      allowLiteral: false,
      allowObject: true,
    }],
    
    // ============================================
    // TAILWIND CSS RULES
    // ============================================
    'tailwindcss/classnames-order': 'error',
    'tailwindcss/enforces-negative-arbitrary-values': 'error',
    'tailwindcss/enforces-shorthand': 'error',
    'tailwindcss/migration-from-tailwind-2': 'error',
    'tailwindcss/no-arbitrary-value': 'off', // We allow arbitrary values for spacing
    'tailwindcss/no-custom-classname': 'error',
    'tailwindcss/no-contradicting-classname': 'error',
    
    // ============================================
    // UNICORN (MODERN JS) RULES
    // ============================================
    'unicorn/better-regex': 'error',
    'unicorn/catch-error-name': ['error', { name: 'err' }],
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/expiring-todo-comments': ['error', { terms: ['todo', 'fixme'] }],
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-for-each': 'error',
    'unicorn/no-array-method-this-argument': 'error',
    'unicorn/no-array-push-push': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-keyword-prefix': 'off',
    'unicorn/no-lonely-if': 'error',
    'unicorn/no-nested-ternary': 'error',
    'unicorn/no-new-array': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-null': 'off',
    'unicorn/no-object-as-default-parameter': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-static-only-class': 'error',
    'unicorn/no-thenable': 'error',
    'unicorn/no-this-assignment': 'error',
    'unicorn/no-unnecessary-await': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unreadable-iife': 'error',
    'unicorn/no-useless-fallback-in-spread': 'error',
    'unicorn/no-useless-length-check': 'error',
    'unicorn/no-useless-promise-resolve': 'error',
    'unicorn/no-useless-spread': 'error',
    'unicorn/no-useless-switch-case': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/numeric-separators-style': ['error', { onlyIfContainsSeparator: true }],
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-at': 'error',
    'unicorn/prefer-code-point': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-default-parameters': 'error',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',
    'unicorn/prefer-export-from': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-logical-operator-over-ternary': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-modern-math-apis': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-object-from-entries': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-prototype-methods': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-regexp-test': 'error',
    'unicorn/prefer-set-has': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-switch': ['error', { minimumCases: 3 }],
    'unicorn/prefer-ternary': 'error',
    'unicorn/prefer-top-level-await': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/relative-url-style': ['error', 'always'],
    'unicorn/require-array-join-separator': 'error',
    'unicorn/require-number-to-fixed-digits-argument': 'error',
    'unicorn/switch-case-braces': ['error', 'avoid'],
    'unicorn/text-encoding-identifier-case': 'error',
    'unicorn/throw-new-error': 'error',
    
    // ============================================
    // PROMISE RULES
    // ============================================
    'promise/always-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'error',
    'promise/no-promise-in-callback': 'error',
    'promise/no-callback-in-promise': 'error',
    'promise/avoid-new': 'off',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/valid-params': 'error',
    
    // ============================================
    // SIMPLE IMPORT SORT (Better than import/order)
    // ============================================
    'simple-import-sort/imports': ['error', {
      groups: [
        // React imports
        ['^react', '^@?\\w'],
        // Absolute imports (aliases)
        ['^(@|@packages|@modules|@ui|@api|@auth|@events|@utils)(/.*|$)'],
        // Parent imports
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        // Same folder imports
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        // Style imports
        ['^.+\\.?(css|scss|less)$'],
        // Side effect imports
        ['^\\u0000'],
      ],
    }],
    'simple-import-sort/exports': 'error',
    
    // ============================================
    // PERFECTIONIST (Code Organization)
    // ============================================
    'perfectionist/sort-imports': 'off', // Using simple-import-sort
    'perfectionist/sort-exports': 'off',
    'perfectionist/sort-named-imports': 'off',
    'perfectionist/sort-named-exports': 'off',
    'perfectionist/sort-jsx-props': ['error', {
      type: 'alphabetical',
      groups: [
        'multiline',
        'unknown',
        ['className', 'id'],
        'shorthand',
        'event',
        'ref',
        'key',
      ],
      customGroups: {
        event: ['on[A-Z].*'],
        ref: ['ref'],
        key: ['key'],
      },
    }],
    'perfectionist/sort-object-types': 'off',
    'perfectionist/sort-interfaces': 'off',
    'perfectionist/sort-union-types': 'off',
    'perfectionist/sort-enums': 'off',
    'perfectionist/sort-classes': 'off',
    
    // ============================================
    // DEPRECATION
    // ============================================
    'deprecation/deprecation': 'warn',
    
    // ============================================
    // ESLINT COMMENTS
    // ============================================
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'eslint-comments/no-aggregating-enable': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
    'eslint-comments/require-description': ['error', { ignore: ['eslint-env'] }],
    
    // ============================================
    // PRETTIER INTEGRATION
    // ============================================
    'prettier/prettier': 'error',
    
    // ============================================
    // CUSTOM ERP PLUGINS (To be implemented)
    // ============================================
    '@trusoft/module-boundaries/no-cross-imports': 'error',
    '@trusoft/module-boundaries/public-api-only': 'error',
    '@trusoft/rbac/require-permission-gate': 'error',
    '@trusoft/rbac/permission-naming': 'error',
    '@trusoft/react-query/query-key-format': 'error',
    '@trusoft/react-query/no-manual-fetching': 'error',
    '@trusoft/security/no-sensitive-logging': 'error',
    '@trusoft/security/xss-prevention': 'error',
    '@trusoft/design-tokens/no-hardcoded-colors': 'error',
    '@trusoft/design-tokens/no-hardcoded-spacing': 'warn',
    '@trusoft/performance/require-virtualization': 'error',
    '@trusoft/performance/bundle-size': 'warn',
  },
  
  // ============================================
  // OVERRIDES FOR SPECIFIC FILE TYPES
  // ============================================
  overrides: [
    // Test files
    {
      files: ['**/*.test.{js,jsx}', '**/*.spec.{js,jsx}', '**/__tests__/**'],
      env: {
        jest: true,
        'jest/globals': true,
      },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'jest/no-mocks-import': 'error',
        'jest/no-conditional-expect': 'error',
        'jest/no-export': 'error',
        'jest/no-standalone-expect': 'error',
        'jest/prefer-called-with': 'error',
        'jest/prefer-spy-on': 'error',
        'jest/prefer-strict-equal': 'error',
        'jest/prefer-to-be': 'error',
        'jest/prefer-to-contain': 'error',
        'jest/require-to-throw-message': 'error',
        'jest/require-top-level-describe': 'error',
        'security/detect-object-injection': 'off', // Common in tests
        '@trusoft/security/no-sensitive-logging': 'off', // Tests need logging
      },
    },
    
    // Configuration files
    {
      files: [
        '*.config.js',
        '*.config.*.js',
        'vite.config.js',
        'vitest.config.js',
        'tailwind.config.js',
        'playwright.config.js',
      ],
      env: {
        node: true,
      },
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'no-console': 'off',
        '@trusoft/security/no-sensitive-logging': 'off',
      },
    },
    
    // Script files
    {
      files: ['scripts/**', 'tools/**'],
      env: {
        node: true,
      },
      rules: {
        'no-console': 'off',
        '@trusoft/security/no-sensitive-logging': 'off',
      },
    },
    
    // E2E test files
    {
      files: ['**/*.e2e.{js,jsx}', '**/e2e/**'],
      env: {
        node: true,
      },
      rules: {
        'security/detect-object-injection': 'off',
        'no-console': 'off',
      },
    },
    
    // Module-specific overrides
    {
      files: ['src/modules/dam/**/*.{js,jsx}'],
      rules: {
        '@trusoft/security/xss-prevention': 'error',
        '@trusoft/performance/require-virtualization': 'error',
      },
    },
    
    {
      files: ['src/modules/rbac/**/*.{js,jsx}'],
      rules: {
        '@trusoft/rbac/require-permission-gate': 'error',
        '@trusoft/rbac/permission-naming': 'error',
      },
    },
    
    {
      files: ['src/modules/finance/**/*.{js,jsx}'],
      rules: {
        'unicorn/numeric-separators-style': ['error', { onlyIfContainsSeparator: false }],
      },
    },
    
    // Vendor/third-party code
    {
      files: ['**/vendor/**', '**/third-party/**'],
      rules: {
        'eslint-comments/require-description': 'off',
        'import/no-extraneous-dependencies': 'off',
        'security/detect-object-injection': 'off',
      },
    },
  ],
  
  // ============================================
  // IGNORE PATTERNS
  // ============================================
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    '.next/',
    'coverage/',
    '.vscode/',
    '.idea/',
    '*.min.js',
    '*.d.ts',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '*.log',
    '*.cache',
    '.env*',
    '!.env.example',
    'public/',
    'temp/',
    '*.tmp',
    '*.temp',
    'Dockerfile*',
    'docker-compose*',
    '*.md',
    '*.txt',
    '*.json',
    '*.yaml',
    '*.yml',
    '*.xml',
    '*.svg',
    '*.png',
    '*.jpg',
    '*.jpeg',
    '*.gif',
    '*.ico',
    '*.woff',
    '*.woff2',
    '*.ttf',
    '*.eot',
  ],
};