#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const iconFolders = [
  'ai', 'bi', 'bs', 'cg', 'ci', 'di', 'fa', 'fc', 'fi', 'gi',
  'go', 'gr', 'hi', 'hi2', 'im', 'io', 'lia', 'lu', 'md', 'pi',
  'ri', 'rx', 'si', 'sl', 'tb', 'tfi', 'ti', 'vsc', 'wi'
];

const rootPath = path.join(__dirname, '..');
const libModulePath = path.join(rootPath, 'lib', 'module', 'icons');
const libTypeScriptPath = path.join(rootPath, 'lib', 'typescript', 'src', 'icons');

// Create package.json files in root for each icon folder (for Metro bundler)
// This allows imports like: import { Icon } from 'react-native-icons-svg/ci'
iconFolders.forEach(folder => {
  const folderPath = path.join(rootPath, folder);
  const libFolderPath = path.join(libModulePath, folder);
  
  if (fs.existsSync(libFolderPath)) {
    // Create folder if it doesn't exist
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    
    const packageJsonPath = path.join(folderPath, 'package.json');
    const packageJson = {
      main: `../lib/module/icons/${folder}/index.js`,
      types: `../lib/typescript/src/icons/${folder}/index.d.ts`
    };
    
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
    console.log(`✓ Created ${folder}/package.json`);
  }
});

// Create package.json files for lib/module/icons/* (legacy support)
iconFolders.forEach(folder => {
  const folderPath = path.join(libModulePath, folder);
  
  if (fs.existsSync(folderPath)) {
    const packageJsonPath = path.join(folderPath, 'package.json');
    const packageJson = {
      main: './index.js',
      types: `../../../typescript/src/icons/${folder}/index.d.ts`
    };
    
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
    console.log(`✓ Created lib/module/icons/${folder}/package.json`);
  }
});

// Also create package.json files for lib/typescript/src/icons/* (for TypeScript users)
iconFolders.forEach(folder => {
  const folderPath = path.join(libTypeScriptPath, folder);
  
  if (fs.existsSync(folderPath)) {
    const packageJsonPath = path.join(folderPath, 'package.json');
    const packageJson = {
      types: './index.d.ts'
    };
    
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
    console.log(`✓ Created lib/typescript/src/icons/${folder}/package.json`);
  }
});

console.log('\n✓ All package.json files generated successfully!');

