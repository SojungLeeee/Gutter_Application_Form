function checkPassword(event) {
    event.preventDefault(); // 기본 링크 동작을 방지
    const password = prompt("\n관리자 확인이 필요합니다. \n비밀번호를 입력하세요. \n");
    const correctPassword = "gutter1988";


    if (password===null) {
        return;
    }
    if (password === correctPassword) {
        window.location.href = event.target.href;
    }

    else {
        alert("비밀번호가 틀렸습니다. 다시 입력해주세요.");
    }
}
