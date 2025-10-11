const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '../src/icons');
const iconPacks = fs.readdirSync(iconsDir);

console.log(`Found ${iconPacks.length} icon packs`);

iconPacks.forEach((pack) => {
  const packDir = path.join(iconsDir, pack);
  const stat = fs.statSync(packDir);
  
  if (!stat.isDirectory()) {
    return;
  }

  const files = fs.readdirSync(packDir).filter((file) => file.endsWith('.tsx'));
  
  if (files.length === 0) {
    console.log(`⚠️  Skipping ${pack} - no icon files found`);
    return;
  }

  // Generate exports for each icon
  const exports = files
    .map((file) => {
      const fileName = file.replace('.tsx', '');
      const filePath = path.join(packDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      
      // Extract the export name from the file (e.g., "export const IconName = ")
      const exportMatch = fileContent.match(/export\s+const\s+(\w+)\s*=/);
      const exportName = exportMatch ? exportMatch[1] : fileName;
      
      return `export { ${exportName} } from './${fileName}';`;
    })
    .join('\n');

  const indexContent = `// Auto-generated file - do not edit manually
// Generated on ${new Date().toISOString()}
// Total icons: ${files.length}

${exports}
`;

  const indexPath = path.join(packDir, 'index.ts');
  fs.writeFileSync(indexPath, indexContent, 'utf-8');
  
  console.log(`✅ Generated ${pack}/index.ts with ${files.length} icons`);
});

console.log('\n✨ All index files generated successfully!');

