class App {
    first: HTMLInputElement;
    second: HTMLInputElement;
    third: HTMLInputElement;
    fourth: HTMLInputElement;
  
    min: HTMLInputElement;
    max: HTMLInputElement;
    avg: HTMLInputElement;
    sum: HTMLInputElement;

    constructor() {
        this.startApp();
    }

    startApp() {
        this.inputs();
        this.watchInputs();
    }

    inputs(){
        const first = (<HTMLInputElement>document.getElementById('first')).value;
        const second = (<HTMLInputElement>document.getElementById('second')).value;
        const third = (<HTMLInputElement>document.getElementById('third')).value;
        const fourth = (<HTMLInputElement>document.getElementById('fourth')).value;

        const min = (<HTMLInputElement>document.getElementById('min')).value;
        const max = (<HTMLInputElement>document.getElementById('max')).value;
        const avg = (<HTMLInputElement>document.getElementById('avg')).value;
        const sum = (<HTMLInputElement>document.getElementById('sum')).value;
    }

    watchInputs(){
        [first,second,third,fourth].forEach((el)=>{
            el.addEventListener('change', ()=> updateValues());
        })
    }
    updateValues(){
        const values = [first.value, second.value, third.value, fourth.value]
        const filteredValues = values.filter((el)=> el !== undefined && el !== "" )
        min.value = Math.min(...filteredValues);
        max.value = Math.max(...filteredValues);
        const sumcurrent = filteredValues.reduce((a, b) => Number(a) + Number(b), 0);
    
        avg.value = sumcurrent/filteredValues.length;
        sum.value = sumcurrent;
}








}

const Application = new App();