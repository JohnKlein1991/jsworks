var currentDate = new Date; 
var month = [];
var days = [];

month[0] = 'Январь';
month[1] = 'Февраль';
month[2] = 'Март';
month[3] = 'Апрель';
month[4] = 'Май';
month[5] = 'Июнь';
month[6] = 'Июль';
month[7] = 'Август';
month[8] = 'Сентябрь';
month[9] = 'Октябрь';
month[10] = 'Ноябрь';
month[11] = 'Декабрь';

for (i = 0; i <= 31; i++){
	days[i] = i;
}

document.write('<p>Месяц: ' + month[currentDate.getMonth()] + '</p>');
document.write('<p>Число: ' + days[currentDate.getDate()] + '</p>');

