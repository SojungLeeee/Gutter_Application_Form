function validateForm(event) {
    event.preventDefault(); // 폼의 기본 제출 동작을 막음

    const name = document.getElementById('inputName').value.trim();
    const major = document.getElementById('inputMajor').value.trim();
    const gender = document.getElementById('inputGender').value.trim();
    const studentNumber = document.getElementById('inputStudentnumber').value.trim();
    const phone = document.getElementById('inputPhone').value.trim();
    const age = document.getElementById('inputAge').value.trim();

    if (!name) {
        alert('이름은 필수 입력 항목입니다.');
        event.preventDefault(); // 제출 방지
        return;
    }

    // 성별 유효성 검사
    if (gender !== '남자' && gender !== '여자') {
        alert('성별은 남자 또는 여자 중 하나를 선택해야 합니다.');
        event.preventDefault(); // 제출 방지
        return;
    }

    // 학번 유효성 검사
    if (!/^\d{9}$/.test(studentNumber)) {
        alert('학번은 숫자 9자리로 입력해야 합니다.');
        event.preventDefault(); // 제출 방지
        return;
    }

    // 휴대폰 번호 유효성 검사
    if (!/^\d{11}$/.test(phone)) {
        alert('휴대폰 번호는 01012341234 형식, 총 11자리여야 합니다.');
        event.preventDefault(); // 제출 방지
        return;
    }

    // 나이 유효성 검사
    if (!/^\d{2}$/.test(age)) {
        alert('나이는 2자리 숫자로 입력해야 합니다.');
        event.preventDefault(); // 제출 방지
        return;
    }


    if (!major) {
        alert('전공(학과)은 필수 입력 항목입니다.');
        event.preventDefault(); // 제출 방지
        return;
    }

    // 모든 유효성 검사를 통과하면 폼을 제출
    document.getElementById('inputForm').submit();
}