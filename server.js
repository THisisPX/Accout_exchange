require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const accountRoutes = require('./routes/accounts');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;
const ADMIN_SECRET = process.env.ADMIN_SECRET || 'sanjiaozhou_admin_secret_key_2026';

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB 连接成功'))
  .catch(err => console.error('MongoDB 连接失败:', err));

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: '未授权访问' });
  }
  try {
    const decoded = jwt.verify(token, ADMIN_SECRET);
    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: '无效的令牌' });
  }
};

app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  const adminUsername = process.env.ADMIN_USERNAME || 'admin';
  const adminPassword = process.env.ADMIN_PASSWORD || 'sanjiaozhou2026';
  
  if (username === adminUsername && password === adminPassword) {
    const token = jwt.sign({ username, role: 'admin' }, ADMIN_SECRET, { expiresIn: '24h' });
    res.json({ success: true, token });
  } else {
    res.status(401).json({ error: '用户名或密码错误' });
  }
});

app.use('/api/admin', authMiddleware, accountRoutes);
app.use('/api/accounts', accountRoutes);

app.get('/', (req, res) => {
  res.send('三角洲账号租赁 API 服务正在运行');
});

app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});
