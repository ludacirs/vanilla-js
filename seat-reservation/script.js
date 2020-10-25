

(function (){
    const seatsElem = document.querySelector('.seats');
    const priceElem = document.querySelector('.price');
    const infoElem = document.querySelector('.info small');
    const entireSeats = document.querySelectorAll('.seat').length;
    const numberThElem = document.querySelector('.numberTh');
    let selectedCount = 0;
    let numberTh =1;

    function cntSelected() {
        const selected = document.querySelectorAll('.selected');
        selectedCount = selected.length;
    }

    function getNumberTh(e){
        numberTh = e.target.value;
    }

    function printPrice(selectedCount) {
        const price = 9500;
        priceElem.innerHTML = price*selectedCount + '원';
    }

    function printInfo(selectedCount,numberTh) {
        infoElem.innerText = '현재 '+numberTh+'호차 잔여 '+ (entireSeats-selectedCount)+' 석/ 전체'+entireSeats +'석';
    }

    function clickHandler(e) {
        let tempElem = e.target;
        while(!tempElem.classList.contains('seat')||tempElem.classList.contains('occupied')){
            tempElem = tempElem.parentNode;

            if(tempElem.parentNode.nodeName === 'BODY' ) return ;
        }

        tempElem.classList.toggle('selected');

        cntSelected();

        printPrice(selectedCount);

        printInfo(selectedCount, numberTh);
    }

    function resetCntSelected() {
        const selected = document.querySelectorAll('.selected');

        selected.forEach(function (v){
            v.classList.remove('selected');
        });
    }

    function changHandler(e) {
        getNumberTh(e);

        resetCntSelected();

        printInfo(selectedCount, numberTh);
    }

    printInfo(0,numberTh);
    seatsElem.addEventListener('click',clickHandler);
    numberThElem.addEventListener('change',changHandler)
})();