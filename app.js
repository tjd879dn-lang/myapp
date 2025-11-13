require('dotenv').config(); // EB에선 생략 가능

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// EJS 뷰 엔진 설정
app.set('view engine', 'ejs');

// 라우터 로딩
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// 서버 시작
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});