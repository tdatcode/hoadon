const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Serve HTML file
  if (req.url === '/' || req.url === '') {
    const filePath = path.join(__dirname, 'invoice_automation.html');
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading file');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`✅ Server chạy tại: http://localhost:${PORT}`);
  console.log(`📂 Mở http://localhost:${PORT} trong trình duyệt`);
  console.log(`⛔ Nhấn Ctrl+C để dừng server`);
});
