(function () {
    const formElem = document.querySelector('.form');
    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const phone_number = document.querySelector('#phone-number');
    const password = document.querySelector('#password');
    const password_check = document.querySelector('#password-check');


    function valueCheck(u, email, pn, p1, p2) {
        let result = false;
        if(!(u.value && email.value && pn.value && p1.value && p2.value)){
        } else result = true;

        return result;
    }

    function lengthCheck(u, pn, p1) {
        if((u.value.length>4&&u.value.length<10)){
            console.log('아이디 길이는 4글자 이상 10글자 이하');
        }

        if(pn.value.length!==11){
            console.log('핸드폰 번호는 11자리로 입력해주세요');
        }

        if(!(p1.value.length>=8)){
            console.log('비밀번호는 8자리 이상입니다');
        }
    }


    function emailCheck(email) {
        const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regEmail.exec(email.value)){
            console.log('올바르지않은이메일형식');
        }
    }

    function phoneNumberCheck(phone_number) {
        const regPhoneNumber = /^(010)(\d){8}/;
        if(!regPhoneNumber.exec(phone_number.value)){
            console.log('번호는-를뺸 숫자만 입력해라');
        }
    }

    function passwordSame(p1, p2) {
        if(p1.value!==p2.value){
            console.log('비밀번호 값이 일치하지않음');
        }
    }



    function submitHandler(e) {
        //이벤트 취소
        e.preventDefault();

        //모든 input들의 값이 입력되었는지 확인
        if(valueCheck(username, email, phone_number, password, password_check)){

            //길이 확인
            lengthCheck(username,phone_number,password);

            //이메일 확인
            emailCheck(email);

            //번호 확인
            phoneNumberCheck(phone_number);
            //비밀번호 동일 확인
            passwordSame(password,password_check);


        }else {
            console.log('모든 값을 입력해');
        }

    }
    formElem.addEventListener('submit',submitHandler);
})();