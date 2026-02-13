#!/bin/bash
# setup-eslint.sh - Production ESLint Setup for ERP Frontend

set -e

echo "🚀 Setting up state-of-the-art ESLint configuration for ERP..."

# Check if running in correct directory
if [ ! -f "package.json" ]; then
  echo "❌ Error: Must run in project root with package.json"
  exit 1
fi

# Check package manager
if [ -f "pnpm-lock.yaml" ]; then
  PACKAGE_MANAGER="pnpm"
  INSTALL_CMD="pnpm add -D"
elif [ -f "yarn.lock" ]; then
  PACKAGE_MANAGER="yarn"
  INSTALL_CMD="yarn add -D"
else
  PACKAGE_MANAGER="npm"
  INSTALL_CMD="npm install --save-dev"
fi

echo "📦 Detected package manager: $PACKAGE_MANAGER"

# Install ESLint core dependencies
echo "📦 Installing ESLint core dependencies..."
$INSTALL_CMD eslint @eslint/js

# Install parsers
echo "📦 Installing parsers..."
$INSTALL_CMD @babel/eslint-parser @babel/core @babel/preset-react

# Install React plugins
echo "📦 Installing React plugins..."
$INSTALL_CMD eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y

# Install import/export plugins
echo "📦 Installing import/export plugins..."
$INSTALL_CMD eslint-plugin-import @typescript-eslint/parser @typescript-eslint/eslint-plugin

# Install testing plugins
echo "📦 Installing testing plugins..."
$INSTALL_CMD eslint-plugin-testing-library eslint-plugin-jest-dom

# Install performance plugins
echo "📦 Installing performance plugins..."
$INSTALL_CMD eslint-plugin-react-perf eslint-plugin-sonarjs

# Install security plugins
echo "📦 Installing security plugins..."
$INSTALL_CMD eslint-plugin-security eslint-plugin-no-unsanitized

# Install modern JS plugins
echo "📦 Installing modern JS plugins..."
$INSTALL_CMD eslint-plugin-unicorn eslint-plugin-promise

# Install Tailwind plugin
echo "📦 Installing Tailwind plugin..."
$INSTALL_CMD eslint-plugin-tailwindcss

# Install sorting plugins
echo "📦 Installing sorting plugins..."
$INSTALL_CMD eslint-plugin-simple-import-sort eslint-plugin-perfectionist

# Install utility plugins
echo "📦 Installing utility plugins..."
$INSTALL_CMD eslint-plugin-deprecation eslint-plugin-eslint-comments

# Install Prettier integration
echo "📦 Installing Prettier integration..."
$INSTALL_CMD eslint-config-prettier eslint-plugin-prettier prettier

# Install custom ERP plugins (placeholder - create these)
echo "📦 Setting up custom ERP plugins..."
mkdir -p packages/eslint-plugin-trusoft
cat > packages/eslint-plugin-trusoft/package.json << 'EOF'
{
  "name": "@trusoft/eslint-plugin",
  "version": "1.0.0",
  "private": true,
  "main": "index.js"
}
EOF

# Create ESLint configuration
echo "📝 Creating ESLint configuration..."
curl -s https://raw.githubusercontent.com/your-org/eslint-config/main/.eslintrc.js > .eslintrc.js

# Create ESLint ignore file
echo "📝 Creating .eslintignore..."
cat > .eslintignore << 'EOF'
node_modules/
dist/
build/
.next/
coverage/
public/
*.log
*.cache
.env*
!.env.example
Dockerfile*
docker-compose*
*.md
*.txt
*.json
*.yaml
*.yml
*.xml
*.svg
*.png
*.jpg
*.jpeg
*.gif
*.ico
*.woff
*.woff2
*.ttf
*.eot
EOF

# Create lint-staged configuration
echo "📝 Setting up lint-staged..."
$INSTALL_CMD lint-staged husky

# Create .lintstagedrc.js
cat > .lintstagedrc.js << 'EOF'
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix --max-warnings=0', 'prettier --write'],
  '*.{json,md,yml,yaml,css,scss}': ['prettier --write'],
  '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged'],
}
EOF

# Set up Husky
echo "🔧 Setting up Husky hooks..."
npx husky init
cat > .husky/pre-commit << 'EOF'
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
EOF

chmod +x .husky/pre-commit

# Create npm scripts
echo "📝 Adding npm scripts to package.json..."
npm pkg set scripts.lint="eslint . --ext .js,.jsx --max-warnings=0"
npm pkg set scripts.lint:fix="eslint . --ext .js,.jsx --fix"
npm pkg set scripts.lint:staged="lint-staged"
npm pkg set scripts.format="prettier --write ."
npm pkg set scripts.lint:ci="eslint . --ext .js,.jsx --max-warnings=0 --format junit --output-file eslint-report.xml"

# Create VSCode settings
echo "🔧 Creating VSCode settings..."
mkdir -p .vscode
cat > .vscode/settings.json << 'EOF'
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact"
  ],
  "eslint.workingDirectories": [
    { "mode": "auto" }
  ],
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cn\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ],
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.requireConfig": true
}
EOF

cat > .vscode/extensions.json << 'EOF'
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-playwright.playwright",
    "vitest.explorer"
  ]
}
EOF

# Create CI configuration for ESLint
echo "🔧 Creating GitHub Actions workflow..."
mkdir -p .github/workflows
cat > .github/workflows/lint.yml << 'EOF'
name: Lint & Format

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: '${{ runner.os }}-${{ hashFiles(''**/pnpm-lock.yaml'') }}'

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Run ESLint
        run: pnpm lint:ci

      - name: Upload ESLint report
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: eslint-report
          path: eslint-report.xml

      - name: Check formatting
        run: pnpm prettier --check .

      - name: Run Type Check (if applicable)
        run: |
          if [ -f "tsconfig.json" ]; then
            npx tsc --noEmit
          fi
EOF

echo ""
echo "✅ ESLint setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Review the generated .eslintrc.js configuration"
echo "2. Run 'pnpm lint' to check existing code"
echo "3. Run 'pnpm lint:fix' to auto-fix issues"
echo "4. Create custom plugins in packages/eslint-plugin-trusoft/"
echo "5. Add pre-commit hook: npx husky add .husky/pre-commit 'npx lint-staged'"
echo ""
echo "🚀 Your ERP frontend now has state-of-the-art linting!"