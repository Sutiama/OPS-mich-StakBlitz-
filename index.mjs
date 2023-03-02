// run `node index.js` in the terminal

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const index = fileURLToPath(import.meta.url);
const dirname = path.dirname(index);

app.get('/test', (req, res) => {
  res.json({ spse: 'je cool' });
});

app.get('/', (req, res) => {
  res.write('<html>');
  res.write('<p> Test webpage </p>');
  res.write('<a href="/file">Click me </a>');
  res.write('</html>');
  res.end();
});

app.get('/file', (req, res) => {
  res.sendFile(path.join(dirname, '/file.html'));
});

app.listen(3000, () => {
  console.log(`Hello node.js Server v${process.versions.node}`);
});
