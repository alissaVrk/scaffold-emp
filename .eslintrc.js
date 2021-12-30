// eslint-disable-next-line no-undef
module.exports = {
  //"prettier", 
  extends: ["react-app", "react-app/jest", "plugin:storybook/recommended"],
  plugins: ["import"],
  settings: {
    "import/ignore": [".*TestUtils.ts"],
    "import/extensions": [".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true, 
      }
    }
  },
  rules: {
    "import/no-internal-modules": [ "error", {
      "forbid": [
        "core/**", 
        "?(modules)/account/!(accountTestUtils)", "?(modules)/account/!(accountTestUtils)/**",
        "?(modules)/all-paths/!(all-pathsTestUtils)", "?(modules)/all-paths/!(all-pathsTestUtils)/**",
        "?(modules)/auth/!(authTestUtils)", "?(modules)/auth/!(authTestUtils)/**",
        "?(modules)/static/!(staticTestUtils)", "?(modules)/static/!(staticTestUtils)/**", 
      ]
    } ],
    
    "@typescript-eslint/no-unused-vars": 1,
    "import/no-useless-path-segments": ["error", {
      noUselessIndex: true
    }],
    "import/no-cycle": 2,

    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default-member": 0
  }
};