## GUTTER 동아리 신청을 폼으로 받고 DB와 연동시켜 보이는 웹
* * *

<div align=center><h3>📚 STACKS</h3></div>
<div align=center> 
   <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
   <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
   <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
   <img src="https://img.shields.io/badge/mariaDB-003545?style=for-the-badge&logo=mariaDB&logoColor=white">
   <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
   <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
   <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
</div>

* * *

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
