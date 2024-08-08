const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const db = require("./mysql"); // 수정된 mysql.js 모듈

const app = express();
const port = process.env.PORT || 3030;
const host = process.env.HOST || "0.0.0.0";



db.init(); // 데이터베이스 연결 풀 초기화

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); // CORS를 전체로 허용하도록 설정

// 정적 파일 제공
// app.use(express.static(path.join(__dirname, 'css')));
app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/config', express.static(path.join(__dirname, '/config')));
app.use('/fonts', express.static(path.join(__dirname, '/fonts')));
app.use('/images', express.static(path.join(__dirname, '/images')));
app.use('/js', express.static(path.join(__dirname, '/js')));

// 기본 라우트 설정
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});


app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/about.html'));
});


app.get('/executives.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/executives.html'));
});

app.get('/review.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/review.html'));
});

app.get('/register.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/register.html'));
});

// app.get('/register2.html', (req, res) => {
//   res.sendFile(path.join(__dirname, '/register2.html'));
// });





// 게시글 목록 보기
app.get("/view", async (req, res) => {
    try {
        const [results] = await db.query("SELECT * FROM TESTTABLE ORDER BY WRITEDATE ASC ");
        res.send(results);
    } catch (err) {
        console.error("Query execution error:", err);
        res.status(500).send("Database error");
    }
});



// 데이터 가져오기 엔드포인트 추가
app.get('/fetchData', async (req, res) => {
  try {
      const [results] = await db.query("SELECT * FROM TESTTABLE ORDER BY WRITEDATE ASC");
      res.json(results); // 결과를 배열 형태로 반환
  } catch (err) {
      console.error("Query execution error:", err);
      res.status(500).send("Database error");
  }
});





// 폼 데이터 처리 엔드포인트
app.post('/submit', async (req, res) => {
    let { inputName, inputGender, inputStudentnumber, inputPhone, inputAge, inputMajor } = req.body;

    // undefined 값을 null로 변환
    inputName = inputName || null;
    inputGender = inputGender || null;
    inputStudentnumber = inputStudentnumber || null;
    inputPhone = inputPhone || null;
    inputAge = inputAge || null;
    inputMajor = inputMajor || null;

    const query = 'INSERT INTO testtable (name, gender, studentnum, phone, age, major, writedate) VALUES (?, ?, ?, ?, ?, ?, now())';

    try {
        await db.query(query, [inputName, inputGender, inputStudentnumber, inputPhone, inputAge, inputMajor]);
        res.send('동아리 신청이 완료되었습니다.');
    } catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).send('모든 정보를 알맞은 형식으로 입력하세요.\n비어있는 칸이 없는지, ex 형식과 모두 동일한지 확인하세요.');
    }
});

// 서버 동작중인 표시
app.listen(port, host, () =>
    console.log(`Server is running on http://${host}:${port}`)
);

// 서버 종료 시 데이터베이스 연결 종료
process.on('SIGINT', async () => {
    await db.close();
    process.exit();
});
