간단한 동아리 신청서 제출 폼을 DB와 연동시키기

1. free-html 양식에서 적당한 html을 가져와 내용을 변경시키기 -> 동아리 바탕으로
2. 신입생 (재학생도 가능) 대상으로 부원을 받을 때 입력해야 할 기본적인 정보들을 신청서 폼 작성란에 넣기
3. 작성된 정보들을 DB로 넘겨주기
4. 작성된 정보들을 확인하기 위해 DB에서 저장된 데이터들을 가져오기

![image](https://github.com/user-attachments/assets/f40dafa5-1c43-4700-a185-80f31a213adc)

[주요 폼 부분] -> DB로 넘어갈 정보들이 입력되는 부분


배포는 cloudtype을 이용해 mariaDB의 sql까지 함께 사용함
※ cloudtype을 이용할 때 mysql.js 부분의 host와 post를 cloudtype에서 지정해준 host와 post로 바꿔줘야 정상적으로 DB와 연결됨

![image](https://github.com/user-attachments/assets/a418225b-3c3a-4e2a-ac14-cc28f0f883be)
