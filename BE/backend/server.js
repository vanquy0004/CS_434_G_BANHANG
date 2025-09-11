import app from './src/app.js';

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`📦 Server đang chạy trên http://localhost:${PORT}`);
  console.log('🚀 Cố gắng nhé các đồng chí !');
});
