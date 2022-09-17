var chartData = [{
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
]
var chartView = document.querySelectorAll(".data");
var before = document.querySelectorAll(".beforeAmount");
for (let i = 0; i < 7; i++) {
    var h = chartData[i].amount;
    before[i].innerHTML = `$${h}`;
    chartView[i].style.cssText = `height:calc(3px * ${h});`;

}