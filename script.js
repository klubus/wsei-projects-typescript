const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourth = document.getElementById('fourth');

const min = document.getElementById('min');
const max = document.getElementById('max');
const avg = document.getElementById('avg');
const sum = document.getElementById('sum'); 

[first,second,third,fourth].forEach((el)=>{
    el.addEventListener('change', ()=> updateValues());
})

function updateValues(){
    const values = [first.value, second.value, third.value, fourth.value]
    const filteredValues = values.filter((el)=> el !== undefined && el !== "" )
    min.value = Math.min(...filteredValues);
    max.value = Math.max(...filteredValues);
    const sumcurrent = filteredValues.reduce((a, b) => Number(a) + Number(b), 0);

    avg.value = sumcurrent/filteredValues.length;
    sum.value = sumcurrent;
}