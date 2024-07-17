/* 1. 1-dən 10-a qədər ədədlərin cəmini (hasilini) tapın */

console.warn('Task 1 - 1-dən 10-a qədər ədədlərin cəmini (hasilini) tapın')

let sum = 0;
let has = 1;

for (let i = 1; i <= 10; i++) {
    sum += i
    has *= i;
}

console.log(`Task 1 -` + " Cəmi: " + sum);
console.log(`Task 1 -` + " Hasili: " + has);






/* 2. 1-dən100-ə qədər cüt ədədləri / onların cəmini / hasilini tapın */

console.warn('Task 2 - 1-dən100-ə qədər cüt ədədləri / onların cəmini / hasilini tapın')

let summ = 0;
let product = 1;

for (let i = 2; i <= 100; i += 2) {
    summ += i;
    product *= i;
}

console.log("Cüt ədədlərin cəmi: " + summ);
console.log("Cüt ədədlərin hasili: " + product);






/* 3. 3 rəqəmli ədədlərin ədədi ortasını tapın */

console.warn('Task 3 - 3 rəqəmli ədədlərin ədədi ortasını tapın')

let thirdSum = 0;
let count = 0;

for (let i = 100; i <= 999; i++) {
    thirdSum += i;
    count++;
}

let average = thirdSum / count;

console.log("3 rəqəmli ədədlərin ədədi ortası: " + average);





/* 4. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədləri tapın */

console.warn('Task 4 - 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədləri tapın')

for (let i = 0; i <= 999; i++) {
    if (i % 7 == 0 && i % 8 == 0) {
        console.log('Task 4 - 7 və 8-ə bölünən 3 rəqəmli ədədlər: ' + i)
    }
}





/* 5. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədlərin cəmini tapın */

console.warn('Task 5 - 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədlərin cəmini tapın');

let sevenEightSumNum = 0;

for (let i = 100; i <= 999; i++) {
    if (i % 7 === 0 && i % 8 === 0) {
        sevenEightSumNum += i;
    }
}

console.log("Task 5 - 7 və 8-ə bölünən 3 rəqəmli ədədlərin cəmi: " + sevenEightSumNum);






/* 6. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ilk ədədi tapın */

console.warn('Task 6 - 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ilk ədədi tapın');

let firstNumber = null;

for (let i = 100; i <= 999; i++) {
    if (i % 7 === 0 && i % 8 === 0) {
        firstNumber = i;
        break;
    }
}

console.log("Task 6 - 7 və 8-ə bölünən ilk 3 rəqəmli ədəd: " + firstNumber);











/* 7. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən son ədədi tapın */

console.warn('Task 7 - 3 rəqəmli ədədlərdən 7 və 8-ə bölünən sonuncu ədədi tapın');

let lastNumber = null;

for (let i = 999; i >= 100; i++) {
    if (i % 7 === 0 && i % 8 === 0) {
        lastNumber = i;
        break;
    }
}

console.log("Task 7 - 7 və 8-ə bölünən ilk 3 rəqəmli ədəd: " + lastNumber);







/* 8. 1-dən 100-ə qədər sadə və mürəkkəb ədədləri tapın */

console.warn('Task 8 - 1-dən 100-ə qədər sadə və mürəkkəb ədədləri tapın');

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

let primes = [];
let compounds = [];

for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        primes.push(i);
    } else {
        compounds.push(i);
    }
}

console.log("Sadə ədədlər: " + primes.join(", "));
console.log("Mürəkkəb ədədlər: " + compounds.join(", "));














/* 9. Verilmiş 3 ədəddən ən böyük və ən kiçiyini tapın */

console.warn('Task 9 - Verilmiş 3 ədəddən ən böyük və ən kiçiyini tapın');

/* Verilmiş 3 ədəddən ən böyük */

const arr = [ 23, 534, 665 ];

let sortBigNum = arr.sort((a, b) => b - a);

console.log(sortBigNum[0]);


/* Verilmiş 3 ədəddən ən kiçik */

let sortSmallNum = arr.sort((a, b) => a - b);

console.log(sortSmallNum[0]);














/* 10.İstifadəçi tərəfindən daxil edilən ədədin cüt olub-olmadığını yoxlayın.(Məsələn istifadəçi 12 daxil etdiyi zaman ekrana cütdür, 15 daxil etdiyi zaman təkdir çıxarsın) */

console.warn('Task 10 - İstifadəçi tərəfindən daxil edilən ədədin cüt olub-olmadığını yoxlayın.(Məsələn istifadəçi 12 daxil etdiyi zaman ekrana cütdür, 15 daxil etdiyi zaman təkdir çıxarsın');

/* let checkOddEvenNumbers = prompt('Cüt ədəd daxil edin !!!');

if (checkOddEvenNumbers % 2 == 0) {
    alert('Cüt adəd daxil etdiniz.')
} else {
    alert('Tək adəd daxil etdiniz.')
} */









/* 11. İstifadəçidən iki rəqəm və bir riyazi əməl daxil etməsini təmin edin və həmin ədədlər üzərində daxil olunmuş riyazi əməli tətbiq edib nəticəni ekrana çıxarın */

console.warn('Task 11 - İstifadəçidən iki rəqəm və bir riyazi əməl daxil etməsini təmin edin və həmin ədədlər üzərində daxil olunmuş riyazi əməli tətbiq edib nəticəni ekrana çıxarın');

/* const num1 = prompt("Birinci rəqəm: ");
const num2 = prompt("İkinci rəqəmi: ");
const operation = prompt("Riyazi əməli seç /, *, -, + ");

let result;

switch (operation) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    default:
        console.log("Səhv yazılış");
}

if (result !== undefined) {
    console.log(`Nəticə: ${num1} ${operation} ${num2} = ${result}`);
} */


/* 12. Daxil edilmiş ədədin bölünəni olan bütün 3 rəqəmli ədədləri çıxarın. */

console.warn('Task 12 - Daxil edilmiş ədədin bölünəni olan bütün 3 rəqəmli ədədləri çıxarın');

/* const nuMber = parseInt(prompt("Reqem daxil et "));
let bolunenEdedler = [];

for (let i = 100; i <= 999; i++) {
    if (i % nuMber === 0) {
        bolunenEdedler.push(i);
    }
    else {
        console.log('Yoxdur')
    }
}

console.log(`Daxil etdiyiniz reqem (${nuMber}) bölünəni olan butun 3 reqemli ededler: ${bolunenEdedler.join(', ')}`); */








/* 13.Daxil edilmiş ədədin bütün mümkün tam bölənlərini tapın. */

console.warn('Task 13 - Daxil edilmiş ədədin bütün mümkün tam bölənlərini tapın');

/* const nuMber = parseInt(prompt("Reqem daxil et "));
let bolenEdedler = [];

for (let i = 1; i <= nuMber; i++) {
    if (nuMber % i === 0) {
        bolenEdedler.push(i);
    }
}

console.log(`Daxil etdiyiniz reqem (${nuMber}) butun tam bolenleri: ${bolenEdedler.join(', ')}`); */







/* 14. 12 ədədi hansı 2 ədədin cəmi ola bilər? ( Bütün kombinasiyaları tapın) */

console.warn('Task 14 - 12 ədədi hansı 2 ədədin cəmi ola bilər? ( Bütün kombinasiyaları tapın)');

/* let kombinasiyalar = [];

for (let i = 1; i <= 11; i++) {
    let j = 12 - i;
    if (j > 0 && j <= 11) {
        kombinasiyalar.push([i, j]);
    }
}

kombinasiyalar.forEach(pair => {
    console.log(`${pair[0]} + ${pair[1]} = 12`);
}); */







/* 15.İki dəyişənin dəyərlərininin yerini dəyişən proqram tərtib edin. (Məsələn x=5, y=6, => x=6, y=5) */

console.warn('Task 15 - İki dəyişənin dəyərlərininin yerini dəyişən proqram tərtib edin. (Məsələn x=5, y=6, => x=6, y=5)');

/* let x = 5;
let y = 6;

console.log(`Əvvəl: x = ${x}, y = ${y}`);

let deyis = x;
x = y;
y = deyis;

console.log(`Sonra: x = ${x}, y = ${y}`); */







/* 16.Verilmiş ədədin tam ədəd olub olmadığını yoxlayan proqram yazın. */

console.warn('Task 16 - Verilmiş ədədin tam ədəd olub olmadığını yoxlayan proqram yazın');

/* const input = prompt("eded daxli et: ");
const number = parseFloat(input);

if (Number.isInteger(number)) {
    alert(`${number} tam ed..`);
} else {
    alert(`${number} tam əd. deyil.`);
} */








/* 17. number dəyişənində iki rəqəmli ədəd saxlanılır. Bu ədədin 
    - beşinci dərəcə qüvvətə qaldırılmış vəziyyətini (tapın);
    - 3-ə bölünmədən qalan qalığını (tapın); */

console.warn('Task 17 - number dəyişənində iki rəqəmli ədəd saxlanılır. Bu ədədin - beşinci dərəcə qüvvətə qaldırılmış vəziyyətini (tapın);- 3-ə bölünmədən qalan qalığını (tapın)');

/* const number = parseInt(prompt("reqem yaz "));

const besinciDereceQuvveti = Math.pow(number, 5);

const qaligi = number % 3;

console.log(`${number} ededin 5 ci derece quvveti: ${besinciDereceQuvveti}`);
console.log(`${number} ededin 3-e bolunmeden qalan qaligi: ${qaligi}`); */
    













/* 19.Daxil edilen temperatura esasen havanin isti, cox isti, soyuq, cox soyuq oldugunu gosterin.
    0 >  cox soyuq
    0-15 derece  soyuq 
    15-30 derece  isti
    30<  cox isti 
Əgər heç biri deyilse alerte versin ki temperatur yanlışdır */

console.warn('Task 19 - Daxil edilen temperatura esasen havanin isti, cox isti, soyuq, cox soyuq oldugunu gosterin');

/* const temperatur = parseFloat(prompt("Temperaturu daxil et: "));

if (temperatur < 0) {
    console.log("Cox soyuq");
} else if (temperatur >= 0 && temperatur < 15) {
    console.log("Soyuq");
} else if (temperatur >= 15 && temperatur <= 30) {
    console.log("Isti");
} else if (temperatur > 30) {
    console.log("Cox isti");
} else {
    console.log("Temperatur sehvdir");
} */






/* 20.Daxil edilen rəqəmə görə həftənin günlərini çıxardan program yazın (switch ile yazın.) Meselen: 1 => bazarertesi, 3=> cersenbe (heftenin 7 gunu ucun) */

console.warn('Task 20 - Daxil edilen rəqəmə görə həftənin günlərini çıxardan program yazın (switch ile yazın.) Meselen: 1 => bazarertesi, 3=> cersenbe (heftenin 7 gunu ucun)');

/* let dayInput = prompt('Heftenin hansi gunudur ?')
let day = dayInput.toLowerCase()

switch (day) {
    case '1':
        alert('bugun Bazar ertesidir')
        break
    case '2':
        alert('bugun Cersenbe axsamidir')
        break
    case '3':
        alert('bugun Cersenbedir')
        break
    case '4':
        alert('bugun Cume axsamidir')
        break
    case '5':
        alert('bugun Cumedir')
        break
    case '6':
        alert('bugun Senbedir')
        break
    case '7':
        alert('bugun Bazardir')
        break
    default:
        alert('Bele hefte gunu yoxdu.')
} */



/* 21.Daxil edilen ayların sıra nömresinə əsasən hansı fəsil olduğunu tapın. Meselen : 5 (may ayı 5-cidir) output: Yaz fesli alertə çıxarın. */

console.warn('Task 21 - Daxil edilen ayların sıra nömresinə əsasən hansı fəsil olduğunu tapın. Meselen : 5 (may ayı 5-cidir) output: Yaz fesli alertə çıxarın');

/* const tarix = parseInt(prompt("ayin nomresini dexil et"));

let fesil;

switch (tarix) {
    case 12:
    case 1:
    case 2:
        fesil = "Qis fesli";
        break;
    case 3:
    case 4:
    case 5:
        fesil = "Yaz fesli";
        break;
    case 6:
    case 7:
    case 8:
        fesil = "Yay fesli";
        break;
    case 9:
    case 10:
    case 11:
        fesil = "Payiz fesli";
        break;
    default:
        console.log("ayin nomresi sehvdir");
        fesil = null;
}

if (fesil) {
    console.log(fesil);
} */












































