
const articleElem = document.querySelector('.article-container');
const beforeElem = document.querySelector('.current');
const afterElem = document.querySelector('.selected');
const inputElem = document.querySelector('.user-input');
const outputElem = document.querySelector('.user-output');
const infoElem = document.querySelector('.swap-container .info');
const btnElem = document.querySelector('.btn');

articleElem.addEventListener('input', (e)=>{
    if(e.target === inputElem|| e.target === outputElem ||
        e.target === beforeElem){
        getRate();
    }
});

btnElem.addEventListener('click', function (e){
    swap();
    getRate();
});

getRate();
function swap() {
    let temp = beforeElem.value;
    beforeElem.value = afterElem.value;
    afterElem.value = temp;

    temp = inputElem.value;
    inputElem.value = outputElem.value;
    outputElem.value = temp;
}




function calculate(number, data, countries) {
    return (number/data[countries[0]] * data[countries[1]]);
}

function getRate() {
    const url = "https://open.exchangerate-api.com/v6/latest";
    const request = new XMLHttpRequest();
    request.onreadystatechange = function (){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                const data = JSON.parse(request.response).rates;

                const countries = [beforeElem.value, afterElem.value];

                infoElem.innerHTML = `1 ${countries[0]} = ${calculate(1,data,countries).toFixed(6)} ${countries[1]}`

                outputElem.value = calculate(inputElem.value, data,countries).toFixed(2);
            }
        }
    }
    request.open('GET',url);
    request.send();
}
