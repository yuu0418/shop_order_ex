const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // 全部のアクセスを許可

// public フォルダの中のファイルを見せられるようにする
app.use(express.static('public'));

app.use(express.json()); // JSONデータを受け取れるようにする

// ログを出す共通ミドルウェア
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// 注文受付エンドポイント
app.post('/order', (req, res) => {
  const order = req.body;
  console.log('注文を受け取りました:', order);

  res.json({ message: '注文を受け付けました！' });
});

// サーバー起動
app.listen(port, () => {
  console.log(`サーバー起動中：http://localhost:${port}`);
});


  
