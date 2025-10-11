const fs = require('fs');
const path = require('path');

const libTypesDir = path.join(__dirname, '../lib/typescript');
const srcDir = path.join(__dirname, '../src');

// Create directories
if (!fs.existsSync(libTypesDir)) {
  fs.mkdirSync(libTypesDir, { recursive: true });
}

const libTypesSrcDir = path.join(libTypesDir, 'src');
if (!fs.existsSync(libTypesSrcDir)) {
  fs.mkdirSync(libTypesSrcDir, { recursive: true });
}

// Create package.json
const packageJson = {
  "type": "module"
};
fs.writeFileSync(
  path.join(libTypesDir, 'package.json'),
  JSON.stringify(packageJson, null, 2)
);

// Create index.d.ts
const indexDts = `export type { IconProps } from './types';
`;
fs.writeFileSync(path.join(libTypesSrcDir, 'index.d.ts'), indexDts);

// Create types.d.ts
const typesDts = `import type { SvgProps } from 'react-native-svg';

export interface IconProps extends Omit<SvgProps, 'width' | 'height' | 'viewBox'> {
  size?: number;
  color?: string;
}
`;
fs.writeFileSync(path.join(libTypesSrcDir, 'types.d.ts'), typesDts);

// Generate icon pack type definitions
const iconsDir = path.join(srcDir, 'icons');
const iconPacks = fs.readdirSync(iconsDir);

const libIconsDir = path.join(libTypesSrcDir, 'icons');
if (!fs.existsSync(libIconsDir)) {
  fs.mkdirSync(libIconsDir, { recursive: true });
}

let totalGenerated = 0;

iconPacks.forEach((pack) => {
  const packDir = path.join(iconsDir, pack);
  const stat = fs.statSync(packDir);
  
  if (!stat.isDirectory()) {
    return;
  }

  const files = fs.readdirSync(packDir).filter((file) => file.endsWith('.tsx'));
  
  if (files.length === 0) {
    return;
  }

  const libPackDir = path.join(libIconsDir, pack);
  if (!fs.existsSync(libPackDir)) {
    fs.mkdirSync(libPackDir, { recursive: true });
  }

  // Generate type definitions for each icon pack
  const exports = files
    .map((file) => {
      const fileName = file.replace('.tsx', '');
      const filePath = path.join(packDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      
      // Extract the export name from the file
      const exportMatch = fileContent.match(/export\s+const\s+(\w+)\s*=/);
      const exportName = exportMatch ? exportMatch[1] : fileName;
      
      return `export { ${exportName} } from './${fileName}';`;
    })
    .join('\n');

  const indexDtsContent = `// Auto-generated file - do not edit manually
// Generated on ${new Date().toISOString()}
// Total icons: ${files.length}

import type { IconProps } from '../../types';
import type { FC } from 'react';

${files
  .map((file) => {
    const fileName = file.replace('.tsx', '');
    const filePath = path.join(packDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const exportMatch = fileContent.match(/export\s+const\s+(\w+)\s*=/);
    const exportName = exportMatch ? exportMatch[1] : fileName;
    return `export declare const ${exportName}: FC<IconProps>;`;
  })
  .join('\n')}
`;

  fs.writeFileSync(path.join(libPackDir, 'index.d.ts'), indexDtsContent);
  totalGenerated++;
  
  console.log(`✅ Generated ${pack}/index.d.ts with ${files.length} icon types`);
});

console.log(`\n✨ Generated type definitions for ${totalGenerated} icon packs!`);
console.log(`📦 No .map files generated!`);

