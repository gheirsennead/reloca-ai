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

// Fix JSX issues in French files
const frenchDir = './app/fr';
const tsxFiles = findTsxFiles(frenchDir);

console.log(`Found ${tsxFiles.length} TSX files to fix`);

for (const file of tsxFiles) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Only fix content inside JSX (between return statement and final closing)
  const lines = content.split('\n');
  let inReturn = false;
  let braceCount = 0;
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Check if we're starting the return statement
    if (line.includes('return (') || line.includes('return(')) {
      inReturn = true;
    }
    
    // If we're in JSX content, fix the issues
    if (inReturn) {
      // Count braces to know when we're done with return
      braceCount += (line.match(/\(/g) || []).length;
      braceCount -= (line.match(/\)/g) || []).length;
      
      // Fix JSX issues in this line
      if (line.includes('<strong>') || line.includes('<p>') || line.includes('<li>')) {
        // Fix comparison operators in text content
        line = line.replace(/([^&])<(\s*[€₡$]?\d+)/g, '$1&lt;$2');
        line = line.replace(/(\d+[€₡$]?\s*)>([^<])/g, '$1&gt;$2');
        line = line.replace(/([^&])<(\s*\d+[€₡$]?\s*[^\d])/g, '$1&lt;$2');
        
        // Fix specific patterns
        line = line.replace(/Revenus\s+>\s+€/g, 'Revenus &gt; €');
        line = line.replace(/Patrimoine\s+>\s+\$/g, 'Patrimoine &gt; $');
        line = line.replace(/Séjours longs[^>]*>\s*\d+/g, match => match.replace('>', '&gt;'));
        line = line.replace(/(\d+)j\/an/g, '$1j/an');
        
        lines[i] = line;
      }
      
      // If braces are balanced and we hit a semicolon or end brace, we're done
      if (braceCount <= 0 && (line.includes('};') || line.trim() === '}')) {
        inReturn = false;
      }
    }
  }
  
  const newContent = lines.join('\n');
  
  if (newContent !== content) {
    fs.writeFileSync(file, newContent);
    console.log(`Fixed: ${file}`);
  }
}

console.log('JSX fixing complete!');