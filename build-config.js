// build-config.js
// Gera js/config.js a partir da variável de ambiente API_URL (usado no Vercel)
const fs = require('fs');
const path = require('path');

const apiUrl = process.env.API_URL || (process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : '/api');

const content = `// gerado por build-config.js\nconst API_CONFIG = {\n    getApiUrl: () => {\n        return '${apiUrl}';\n    }\n};\nif (typeof window !== 'undefined') { window.API_CONFIG = API_CONFIG; }\n`;

const outPath = path.join(__dirname, 'js', 'config.js');
try {
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, content, 'utf8');
  console.log('✅ js/config.js gerado com API_URL =', apiUrl);
} catch (e) {
  console.error('Erro ao gerar js/config.js', e);
  process.exit(1);
}
