var App2 = /** @class */ (function () {
    function App2() {
        this.startApp();
    }
    App2.prototype.startApp = function () {
        this.inputs();
        this.watchInputs();
    };
    App2.prototype.inputs = function () {
        this.first = document.getElementById("first");
        this.second = document.getElementById("second");
        this.third = document.getElementById("third");
        this.fourth = document.getElementById("fourth");
        this.min = document.getElementById("min");
        this.max = document.getElementById("max");
        this.avg = document.getElementById("avg");
        this.sum = document.getElementById("sum");
    };
    App2.prototype.watchInputs = function () {
        var _this = this;
        [this.first, this.second, this.third, this.fourth].forEach(function (el) {
            el.addEventListener('change', function () { return _this.updateValues(); });
        });
    };
    App2.prototype.updateValues = function () {
        var values = [this.first.value, this.second.value, this.third.value, this.fourth.value];
        var filteredValues = values.filter(function (el) { return el !== undefined && el !== ""; });
        this.min.value = (Math.min.apply(Math, filteredValues)).toString();
        this.max.value = (Math.max.apply(Math, filteredValues)).toString();
        var sumcurrent = filteredValues.reduce(function (a, b) { return Number(a) + Number(b); }, 0);
        this.avg.value = (sumcurrent / filteredValues.length).toString();
        this.sum.value = (sumcurrent).toString();
    };
    return App2;
}());
var Application2 = new App2();
