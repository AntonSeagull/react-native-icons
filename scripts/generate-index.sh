#!/bin/bash

# Script to generate src/index.tsx with all icon exports for tree-shaking support
# This ensures only imported icons are included in the final bundle

echo "🔄 Generating src/index.tsx with all icon exports..."

cd "$(dirname "$0")/.." || exit 1

# Generate named exports for all icons
find src/icons -name "*.tsx" -type f | \
  sed 's|src/icons/||' | \
  sed 's|.tsx$||' | \
  sort | \
  awk '{printf "export { default as %s } from '\''./icons/%s'\'';\n", $1, $1}' > src/index.tsx

# Add utility exports
echo "" >> src/index.tsx
echo "// Utility exports" >> src/index.tsx
echo "export { GenIcon } from './utils';" >> src/index.tsx

# Count the number of icons
ICON_COUNT=$(find src/icons -name "*.tsx" -type f | wc -l)

echo "✅ Generated index with $ICON_COUNT icon exports"
echo "📦 Tree-shaking is now enabled - only imported icons will be bundled!"

