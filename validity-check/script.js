(function () {
    const formElem = document.querySelector('.form');
    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const phone_number = document.querySelector('#phone-number');
    const password = document.querySelector('#password');
    const password_check = document.querySelector('#password-check');

    //값 입력이 잘 되었을 때
    function pass(elem, str) {
        elem.className = str;

        //실패 메시지 숨기기
        elem.parentNode.childNodes[5].style.visibility = 'hidden';
    }
    //값 입력이 실패 했을 때
    function fail(elem, str){
        elem.className = str;

        //실패 메시지 띄우기
        elem.parentNode.childNodes[5].style.visibility = 'visible';
    }

    function valueCheck(u, email, pn, p1, p2) {
        let result = false;
        if(!(u.value && email.value && pn.value && p1.value && p2.value)){
        } else result = true;

        return result;
    }

    function lengthCheck(u, pn, p1) {
        //4글자 이상 10글지 이하 검사
        if(!(u.value.length>=4&&u.value.length<=10)){
            fail(u, 'fail');
        } else pass(u, 'pass');

        //11자리 핸드폰 번호 검사
        if(pn.value.length!==11){
            fail(pn, 'fail');
        } else pass(pn, 'pass');

        //8자리 이상 비밀번호 검사
        if(!(p1.value.length>=8)){
            fail(p1, 'fail');
        } else pass(p1, 'pass');
    }


    function emailCheck(email) {
        //이메일 정규식
        const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!regEmail.exec(email.value)){
            fail(email, 'fail');
        } else pass(email, 'pass');
    }

    function phoneNumberCheck(phone_number) {
        //헨드폰 번호 정규식
        const regPhoneNumber = /^(010)(\d){8}/;

        if(!regPhoneNumber.exec(phone_number.value)){
            fail(phone_number, 'fail');
        }else pass(phone_number, 'pass');
    }

    function passwordSame(p1, p2) {
        if(p1.value!==p2.value){
            fail(p2, 'fail');
        } else pass(p2, 'pass');
    }



    function submitHandler(e) {
        //이벤트 취소
        e.preventDefault();

        //모든 input 들의 값이 입력되었는지 확인
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