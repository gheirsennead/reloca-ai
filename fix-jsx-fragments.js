const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx files in app/fr directory
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix JSX fragments and other React elements
const frenchDir = './app/fr';
const tsxFiles = findTsxFiles(frenchDir);

console.log(`Found ${tsxFiles.length} TSX files to fix`);

for (const file of tsxFiles) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Fix JSX fragments and tags
  content = content.replace(/&lt;&gt;/g, '<>');
  content = content.replace(/&lt;\/&gt;/g, '</>');
  
  // Fix JSX tags that got encoded
  content = content.replace(/&lt;([a-zA-Z][a-zA-Z0-9]*)/g, '<$1');
  content = content.replace(/&lt;\/([a-zA-Z][a-zA-Z0-9]*)/g, '</$1');
  
  // Fix self-closing tags
  content = content.replace(/([a-zA-Z0-9"'])\s*\/&gt;/g, '$1 />');
  content = content.replace(/([a-zA-Z0-9"'])\s*&gt;/g, '$1>');
  
  fs.writeFileSync(file, content);
  console.log(`Fixed: ${file}`);
}

console.log('JSX fragment fixing complete!');