/* let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30); */

let num = 50;
if (num < 49) {
    console.log('Неверно')
} else if (num > 100) {
    console.log('Много')
} else {
    console.log('Верно')
};

(num == 50) ? console.log("Верно") : console.log("НеВерно"); 

switch (num) {
    case num < 49:
        console.log('Неверно');
        break;
    case num < 100:    
        console.log('Много');
        break;
    case num < 80:    
        console.log('Все еще Много');
        break;
    case 50:    
        console.log('Верно');
        break;
    default:
        console.log('Что то пошло не так');
        break;
}


let num = 50;
while (num < 55) {
    console.log(num);
    num++;
}

let num = 50;
do {
    console.log(num);
    num++;
}
while (num < 50);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        break
    }
    console.log(i)
}