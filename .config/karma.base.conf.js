module.exports = {
  basePath: '..',

  frameworks: [
    'mocha',
    'karma-typescript',
  ],

  files: [
    // { pattern: '.config/node_modules/fast-text-encoding/text.min.js', watched: false },
    { pattern: '.config/node_modules/text-encoding/lib/encoding-indexes.js', watched: false },
    { pattern: '.config/node_modules/text-encoding/lib/encoding.js', watched: false },
    { pattern: '.config/node_modules/es6-shim/es6-shim.min.js', watched: false },
    // { pattern: '.config/node_modules/es7-shim/dist/es7-shim.min.js', watched: false },
    'src/**/*.ts',
    'test_browser/**/*.ts',
  ],

  exclude: [
    "src/shared/**/*"
  ],

  preprocessors: {
    'src/**/*.ts': ['karma-typescript'],
    'test_browser/**/*.ts': ['karma-typescript'],
  },


  client: {
    mocha: {
      timeout : 60 * 1000,
    }
  },

  karmaTypescriptConfig: {
    coverageOptions: {
      // tsconfig: './test/tsconfig.json',
      // coverage is on by default in karma-typescript
      instrumentation: true,
    },
    compilerOptions: {
      allowJs: false,
      declaration: false,
      lib: ['es2017', 'dom'],
      module: 'commonjs',
      moduleResolution: 'node',
      noUnusedLocals: false,
      strict: true,
      target: 'es5',
    },
    include: [
      'src/**/*.ts',
      'test_browser/**/*.ts',
    ],
    "exclude": [
      "asset/",
      "dist/",
      "test/",
      "node_modules*",
      "**/*.d.ts",
      "src/shared/",
    ]

  },

  reporters: [
    'karma-typescript',
  ],

  // web server port
  // port: 9876,
  // runnerPort: 9100,

  colors: true,


  // level of logging
  // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
  // logLevel: config.LOG_INFO,

  autoWatch: false,

  mime: {
    'text/x-typescript': ['ts', 'tsx'],
  },

  // Continuous Integration mode
  // if true, Karma captures browsers, runs the tests and exits
  singleRun: true,

  // concurrency: Infinity,
}
