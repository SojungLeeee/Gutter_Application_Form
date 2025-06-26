# 🎳🎳 GUTTER : 새로운 동아리원을 위한 간편 신청 플랫폼
<br>

![image](https://github.com/user-attachments/assets/f5ff7c8c-eb2d-49a9-8021-a9726e262db3)

![image](https://github.com/user-attachments/assets/59a1442b-97eb-4dc3-b77e-2ca747e1b706)

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

## 🔗 배포 링크  
[GUTTER 신청 플랫폼 바로가기](https://port-0-gutter-example-executive-lzskhypma6e0db96.sel4.cloudtype.app/index.html)

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

## 🖥️ 메인 화면

**1. 메인 동아리 소개 화면**

<br>

![image](https://github.com/user-attachments/assets/a3d1fc93-9c03-471d-bdfd-fa994596ec14)
![image](https://github.com/user-attachments/assets/dd1092f6-d9c8-48f6-8510-2424ed3e41c5)
![image](https://github.com/user-attachments/assets/648c370c-83c9-4423-b608-0e42ab72a26c)




**2. 동아리 신청 폼 작성 화면** 

<br>
 
![image](https://github.com/user-attachments/assets/f40dafa5-1c43-4700-a185-80f31a213adc)
* 해당 입력 정보들이 DB 로 넘어가서 신청 현황을 확인할 수 있습니다.
* DB 에는 이름, 성별, 학번, 휴대폰 번호, 나이, 전공(학과), 작성 시간이 저장됩니다.

  <br>
  <br>
  <br>

**3. 임원단 소개 화면**

<br>

![image](https://github.com/user-attachments/assets/86a758dd-141b-4f43-bebf-c5fcbbe74003)
* 2024년 2학기 GUTTER 동아리의 임원단 정보를 확인할 수 있습니다.
* 인스타그램을 누르면 해당 임원단의 인스타그램으로 이동합니다.

  <br>
  <br>
  <br>

**4. 기존 부원의 후기 화면**

<br>

![image](https://github.com/user-attachments/assets/e21bfb50-0d39-4e68-8f08-f96fee227c6c)
* 직접 기존 부원들의 후기를 받아 작성된 화면입니다.
* 후기 아래 footer 에는 링크가 설정되어 있습니다.

<br>
<br>
<br>

**5. 동아리 신청 현황 확인 화면**

<br>

![image](https://github.com/user-attachments/assets/5e9e03fa-1a1c-470d-ada1-3d4a1649eaf4)
![image](https://github.com/user-attachments/assets/503d19b5-7263-4e78-b2d9-518a596f8de8)
* 웹 페이지 상단에서 CHECK_REGISTER (ONLY_MANAGER) 부분을 클릭합니다.
* 클릭 후 나타나는 alert 창에서 관리자만 아는 비밀번호를 입력합니다.

<br>

![image](https://github.com/user-attachments/assets/5bce5aa0-3ce8-45a0-98e6-a96a71fb8aa1)
* 비밀번호가 일치하면 SQL 에서 저장된 정보를 가져와 신청 현황을 확인할 수 있습니다.

<br>
<br>

<hr>
<br>
<br>

## 💡 배포 방식
* 학부 수업에서는 Netlify를 이용한 정적 웹사이트 배포만 실습해 보았습니다.
* 하지만 Netlify는 정적 파일 위주의 호스팅 서비스이기 때문에, 데이터베이스 연동과 같은 동적 기능을 지원하지 않아 한계가 있었습니다.
* 이러한 이유로 동적 서버 사이드 로직과 DB 연동이 가능한 Cloudtype을 사용해 배포를 진행하였습니다.
* 프리티어 방식 (1일 1중단) 으로 진행했고 실제 신청을 받는 기간동안 유료 버전을 사용하여 배포가 끊기지 않도록 했습니다.

![image](https://github.com/user-attachments/assets/a418225b-3c3a-4e2a-ac14-cc28f0f883be)
### 주의점
* Cloudtype 을 사용할 때 **mysql.js 부분의 host와 post**를 Cloudtype에서 지정해준 host와 post로 바꿔줘야 정상적으로 DB와 연결됩니다.

<br>

## ✍🏻 프로젝트 후기
* 학부에서 배운 내용을 바탕으로 동아리 신청 폼을 직접 구현하고 실제로 이 페이지를 활용해 신입생을 모집하면서 실질적인 경험을 쌓을 수 있었습니다.
* 또한 Netlify 뿐만 아니라 Cloudtype 을 활용한 배포까지 경험해보며, 정적·동적 웹 서비스의 차이를 직접 체감할 수 있는 좋은 기회가 되었습니다.

<br>
<br>

![image](https://github.com/user-attachments/assets/bcedb967-1867-41e2-8106-b4438e5e4286) 

<br>

* 실제로 에브리타임에서 동아리 모집 기간동안 이 웹사이트를 활용하여 지원을 받았습니다.

