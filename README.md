# 📖 Gutter : 새로운 동아리원을 위한 간편 신청 플랫폼
<br>

## ✍🏻 프로젝트 소개

* **🗓 개발 기간** : 2024.07.17 ~ 2024.07.31
* 2024년 1학기 학부 수업인 **"웹 프로그래밍"** 에서 배운 html, css, javascript 를 바탕으로 수행한 개인 프로젝트입니다.
* 무료 HTML 템플릿을 기반으로 동아리 신청 및 소개 페이지에 적합하도록 구조와 내용을 직접 수정하였습니다.
* 기존에는 네이버 폼을 통해 동아리 신청을 받았지만 신청만으로 끝나는 방식에 아쉬움이 있어서 <br>
우리 동아리에 대해 더 많은 정보를 제공하고 알리고 싶다는 생각에서 이 프로젝트를 시작하게 되었습니다.
* 이 프로젝트에서는 다음과 같은 기능을 포함한 웹 기반 신청 시스템을 구현하였습니다

  * 동아리 소개
  * 임원진 소개
  * 기존 부원들의 후기
  * 신청 양식 입력 및 제출 기능


<br>

### 🔍 구현 기능 목록

1. 동아리 소개 페이지
   * 동아리의 활동 내용, 소속, 역사 등을 한눈에 파악할 수 있도록 구성했습니다.

2. 임원단 소개 및 기존 부원의 후기
   * 임원진의 간단한 프로필과 역할 및 인스타그램 계정을 소개하고 기존 부원의 후기를 보여줍니다.

3. 신규 회원 가입 폼 구현
   * HTML 기반의 입력 양식을 통해 신규 지원자가 직접 신청할 수 있도록 제작하였습니다.

4. 암호 입력 시 신청 현황 확인
   * 지정된 암호를 입력 시 지금까지 신청된 현황을 확인할 수 있도록 했습니다.

<br>

## 👥 팀원 구성 : 개인 프로젝트
| 이름 | 역할 | GitHub | 이메일 |
|------|------|--------|--------|
| 이소정 | 풀스택 | [@SojungLeeee](https://github.com/SojungLeee) | dlthwjd1118@gmail.com | 

<br>

## 🛠 개발 환경
<div> 
   <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
   <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
   <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
   <img src="https://img.shields.io/badge/mariaDB-003545?style=for-the-badge&logo=mariaDB&logoColor=white">
   <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
   <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
   <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
</div>


- **개발 도구** : Visual Studio Code (VSCode)
- **버전 관리** : Git, Github  
- **프론트엔드** : HTML5, CSS3, JavaScript
- **백엔드** : Node.js, Express
- **데이터베이스** : MySQL, 배포시 MariaDB
- **배포 플랫폼** : cloudtype

<br>

## 💬 프로젝트 구조
```
Gutter_Application_Form/
├── config/                  # 환경 설정 관련 파일 디렉토리 (ex. DB 설정 등)
├── css/                     
├── fonts/                   
├── images/                  
├── js/                      # 클라이언트 측 자바스크립트 파일들 위치
├── node_modules/            
├── about.html               # 동아리 소개 페이지
├── executives.html          # 임원단 소개 페이지
├── index.html               # 메인 페이지 (동아리 신청 폼 진입점)
├── mysql.js                 # MariaDB (mysql) 연결 설정 및 쿼리 실행 관련 JS 파일
├── package-lock.json       
├── package.json             
├── register.html            # 신규 회원가입 (신청 폼) 페이지
├── review.html              # 기존 부원들의 후기 페이지
├── server.js                
└── README.md                

```


1. free-html 양식에서 적당한 html을 가져와 내용을 변경시키기 -> 동아리 바탕으로
2. 신입생 (재학생도 가능) 대상으로 부원을 받을 때 입력해야 할 기본적인 정보들을 신청서 폼 작성란에 넣기
3. 작성된 정보들을 DB로 넘겨주기
4. 작성된 정보들을 확인하기 위해 DB에서 저장된 데이터들을 가져오기

   

![image](https://github.com/user-attachments/assets/f40dafa5-1c43-4700-a185-80f31a213adc)

[주요 폼 부분] -> DB로 넘어갈 정보들이 입력되는 부분


배포는 cloudtype을 이용해 mariaDB의 sql까지 함께 사용함
* cloudtype을 이용할 때 mysql.js 부분의 host와 post를 cloudtype에서 지정해준 host와 post로 바꿔줘야 정상적으로 DB와 연결됨

![image](https://github.com/user-attachments/assets/a418225b-3c3a-4e2a-ac14-cc28f0f883be)

CHECK_REGISTER(ONLY MANAGER) 클릭 시

![image](https://github.com/user-attachments/assets/503d19b5-7263-4e78-b2d9-518a596f8de8)

해당 창이 뜨며 지정해준 비밀번호를 입력했을 때에만 해당 html로 넘어가도록 설정

![image](https://github.com/user-attachments/assets/5bce5aa0-3ce8-45a0-98e6-a96a71fb8aa1)
정보 조회시 sql에서 정보를 가져온 후 띄워주기
