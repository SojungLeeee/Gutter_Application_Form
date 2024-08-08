document.getElementById('inputForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // 폼 제출 방지

    // 폼 데이터 수집
    const formData = new FormData(event.target);

    const data = {
        inputName: formData.get('inputName'),
        inputGender: formData.get('inputGender'),
        inputStudentnumber: formData.get('inputStudentnumber'),
        inputPhone: formData.get('inputPhone'),
        inputAge: formData.get('inputAge'),
        inputMajor: formData.get('inputMajor')
    };

    console.log('Form Data:', data); // 확인용

    // 서버로 데이터 전송
    try {
        const response = await fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.text();
        alert(result); // 응답 결과 표시

        // 페이지 새로고침
        location.reload();


    } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit form');
    }
});

