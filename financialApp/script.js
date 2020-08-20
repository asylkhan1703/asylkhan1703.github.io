let money, time,

    startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    getExpenses = document.getElementsByTagName('button')[0],
    getOptionalExpenses = document.getElementsByTagName('button')[1],
    count = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkbox = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


getExpenses.disabled = true;
getOptionalExpenses.disabled = true;
count.disabled = true;

startBtn.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }

    appData.timeData = time;
    appData.budget = money;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    getExpenses.disabled = false;
    getOptionalExpenses.disabled = false;
    count.disabled = false;
});

getExpenses.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ((typeof (a)) === 'string' &&
            (typeof (a)) != null &&
            (typeof (b)) != null &&
            a != '' &&
            b != '' &&
            a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
            appData.sumExpenses = sum;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

getOptionalExpenses.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let OptExpenses = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = OptExpenses;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

count.addEventListener('click', function () {
    appData.moneyPerDay = ((appData.budget - appData.sumExpenses) / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay > 5000) {
        levelValue.textContent = 'Богатый';
    } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay <= 5000) {
        levelValue.textContent = 'Обеспеченный';
    } else if (appData.moneyPerDay < 1000) {
        levelValue.textContent = 'Бедный';
    } else {
        levelValue.textContent = 'Произошла ошибка';
    }
});

chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    appData.income.sort();
    incomeValue.textContent = appData.income.sort();
});

checkbox.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    let sum = +sumValue.value,
        percent = +percentValue.value;

    if (appData.savings == true &&
        percentValue != '' &&
        isNaN(percentValue) &&
        isNaN(sumValue)) {

        appData.monthIncome = (sum / 12) * (percent / 100);
        appData.yearIncome = sum * (percent / 100);
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    let sum = +sumValue.value,
        percent = +percentValue.value;

    if (appData.savings == true &&
        percentValue != '' &&
        isNaN(percentValue) &&
        isNaN(sumValue)) {

        appData.monthIncome = (sum / 12) * (percent / 100);
        appData.yearIncome = sum * (percent / 100);
        monthSavingsValue.textContent = appData.monthIncome.toFixed();
        yearSavingsValue.textContent = appData.yearIncome.toFixed();
    }
});

const appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};