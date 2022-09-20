/* 3.1.1 Напиши програм који на основу године рођења особе коју познајеш проверава да ли је та особа рођена у 21.
веку (претпоставити да он почиње 2001. године). Ако јесте, исписати da. */

// let age = 2050;
// if(age >= 2001 && age < 2022){
//     console.log('Yes')
// }

/*Ученик је одличан ако му је просечна оцена бар 4,5. 
Напиши програм који на основу просечне оцене ученика одређује да ли је ученик одличан или није (програм треба да испише odlican или nije odlican). */

// let grades = 4.5;
// if (grades >= 4.5){
//     console.log('Odlican!')
// }
// else{
//     console.log('Nije odlican!')
// }

/* 3.1.4 Налог на друштвеној мрежи могу да направе само деца која у текућој години пуне 12 или више година.Ако се зна која је година текућа и које године су рођени Јаков и Селена,
 написати програм који одређује да ли они могу да направе налог (исписати латиницом име сваког детета које може да направи налог). */

// let year = 2001;
// let selena = 2008;
// let jakov = 2014;

// if(year <= 2010){
//     console.log('Can make an account')
// }
// else{
//     console.log('You are not able to make an account')
// }

/* 3.2.1 Ученик је врлодобар ако му је просечна оцена већа или једнака од 3,5 и строго мања од 4,5. 
Напиши програм који на основу просечне оцене ученика одређује да ли је ученик одличан или није (програм треба да испише vrlodobar или nije vrlodobar). */

// let avarageGrade = 4.50;
// if(avarageGrade >= 3.5 && avarageGrade < 4.5){
//     console.log('Vrlo dobar!')
// }
// else{
//     console.log('Nisi vrlo dobar')
// }
/* 3.2.2 Напиши програм који на основу дана, месеца и године рођења особе проверава да ли је та особа рођена у 20. веку 
(претпоставити да он почиње почетком 1901. године и да се завршава крајем 2000. године). Ако јесте, исписати da, а ако није, исписати ne. */

// let dateYear = 31;
// let monthYear = 12;
// let year = 2000;

// if(dateYear <= 31 && monthYear <= 12 && year > 1900 && year <= 2000){
//     console.log("You're in tweenties")
// }

/* 3.2.9 На допунску наставу из математике треба да иду ученици чија је просечна оцена на прва три контролна задатка строго мања од 3. 
Напиши програм који исписује da или ne у зависности од тога да ли Ђорђе треба да иде на допунску, ако су познате његове три оцене из математике. */

// let grade1 = 3;
// let grade2 = 1;
// let grade3 = 3;
// if (grade1 >= 3) console.log('You can come to class grade1')   
// else if (grade2 >= 3) console.log('You can come to class grade2')
// else if (grade3 >= 3) console.log('You can come to class grade3')
// else{
    
// }

/* 3.2.10 Сваке године се одржавају 4 гренд слем турнира: отворено првенство Аустралије, Француске, Енглеске и САД. 
Ако се знају победници прошлогодишњих турнира, напиши програм који проверава да ли је Новак Ђоковић успео да освоји сва 4 (ако јесте исписати da, а у супротном ne). */

// let aus = 'Djokovic'
// let fr = 'Nadal'
// let eng = 'Djokovic'
// let sad = 'Nadal'

// if (aus === fr && eng === sad){
//     console.log ('He win')
// }
// else{
//     console.log('He doesnt win')
// }

/* 3.2.12 Сваке године се одржавају 4 гренд слем турнира: отворено првенство Аустралије, Француске, Енглеске и САД. Ако се знају победници 
прошлогодишњих турнира, напиши програм који проверава да ли је Федерер успео да освоји неки од њих (ако јесте исписати da, а у супротном ne)*/

// let aus = 'Djokovic'
// let fr = 'Nadal'
// let eng = 'Djokovic'
// let sad = 'Nadal'
// let Federer = 'Federer'
// if(aus === 'Federer' && fr === 'Federer' && eng === 'Federer' && sad=== 'Federer' ){
//     console.log('Yes')
// }
// else{
//     console.log('No')
// }


/* 3.2.13 Сваке године се одржавају 4 гренд слем турнира: отворено првенство Аустралије, Француске, Енглеске и САД. Ако се знају победници прошлогодишњих турнира, 
напиши програм који проверава да ли је Ђоковић успео да освоји бар два турнира (ако јесте исписати da, а у супротном ne). */

// let aus = 'Djokovic'
// let fr = 'Nadal'
// let eng = 'Djokovic'
// let sad = 'Nadal'

// if(aus === eng){
//     console.log('Yes')
// }
// else{
//     console.log('No')
// }

/* 3.3.1 Напиши програм који за унети број испитује да ли је негативан, једнак нули или је позитиван (и исписује negativan, nula или pozitivan). */

// let x = -10;

// if(x === 0){
//     console.log('Null')
// }
// else if (x > 0){
//     console.log('Positive')
// }
// else{
//     console.log('Negative')
// }

/* 3.3.7 Наташа и Мирослав су брат и сестра. Ако се зна датум рођења сваког од њих, напиши програм који исписује име детета чији ће 
се рођендан први славити током ове године или исписује isti_dan ако су рођени истог дана и месеца, па славе рођендан истог дана. */

// let natasaDay = 13
// let natasaMonth = 1
// let natasaYear = 2012
// let miroslavDay = 13
// let miroslavMonth = 1
// let miroslavYear = 2012

// if(natasaDay === miroslavDay && natasaMonth === miroslavMonth && natasaYear === miroslavYear){
//     console.log('Same day')
// }
// else if (natasaYear > miroslavYear){
//     console.log('Natasa')
// }
// else{
//     console.log('Miroslav')
// }