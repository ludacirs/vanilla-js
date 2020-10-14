(function () {
    const formElem = document.querySelector('.form');
    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const security_number = document.querySelector('#security-number');
    const password = document.querySelector('#password');
    const password_check = document.querySelector('#password-check');


    function valueCheck(u, e, sn, p, pc) {
        let result = false;
        if(!(u.value && e.value && sn.value && p.value && pc.value)){
        } else result = true;

        return result;
    }

    function submitHandler(e) {
        //이벤트 취소
        e.preventDefault();

        //모든 input들의 값이 입력되었는지 확인
        if(valueCheck(username, email, security_number, password, password_check)){

        }

    }
    formElem.addEventListener('submit',submitHandler);
})();