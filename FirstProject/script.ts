class App2 {
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
        this.first =  <HTMLInputElement>document.getElementById("first")
        this.second = <HTMLInputElement>document.getElementById("second")
        this.third = <HTMLInputElement>document.getElementById("third")
        this.fourth = <HTMLInputElement>document.getElementById("fourth")

        this.min = <HTMLInputElement>document.getElementById("min")
        this.max = <HTMLInputElement>document.getElementById("max")
        this.avg = <HTMLInputElement>document.getElementById("avg")
        this.sum = <HTMLInputElement>document.getElementById("sum")
    }

    watchInputs(){
        [this.first, this.second, this.third, this.fourth].forEach((el)=>{
            el.addEventListener('change', ()=>  this.updateValues());
        })
    }
    updateValues(){
        const values = [ this.first.value,  this.second.value,  this.third.value,  this.fourth.value]
        const filteredValues = values.filter((el)=> el !== undefined && el !== "" )
        this.min.value = (Math.min(Number(...filteredValues))).toString();
        this.max.value = (Math.max(Number(...filteredValues))).toString();
        const sumcurrent = filteredValues.reduce((a, b) => Number(a) + Number(b), 0);
    
        this.avg.value = (sumcurrent/filteredValues.length).toString();
        this.sum.value = (sumcurrent).toString();
}

}

const Application2 = new App2();