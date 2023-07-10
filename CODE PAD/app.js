// let text = prompt(`kiriting`, '');
// if (text === `Edge`) {
//     alert("You've got the Edge!");
// } else if (text === `Chrome` || text === `Firefox` || text === `Safari` || text === `Opera`) {
//     alert('Okay we support these browsers too');
// } else {
//     alert('We hope that this page looks ok!');
// }


// let a = +prompt('a?', '');
// switch (a) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2,3');
//         break;
//     default:
//         alert(`Wrong`)
//         break;
// }

// function writeGenres() {
//     let ser1 = prompt(`Yaxshi ko'rgan serialingiz?`)
//     let ser2 = prompt(`Yaxshi ko'rgan serialingiz?`)
//     let ser3 = prompt(`Yaxshi ko'rgan serialingiz?`)
//     let obj = {
//         genres: [
//             mov1,
//             mov2,
//             mov3,
//         ]
//     }
//     obj.genres[mov1] = ser1;
//     obj.genres[mov2] = ser2;
//     obj.genres[mov3] = ser3;
//     console.log(obj);
// }
// showDb()

// function showDb() {
//     let pvt = confirm(`private xizmati yo'qilsinmi?`)
//     if (pvt === false) {
//         writeGenres()
//     }
// }
// 0 - 10 gacha sonlar qoshilmasi

// function sum(a) => {
//     let sum = 0
//     for (let i = 1; i <= a; i++) {
//         sum = sum + i
//     }
//     console.log(sum);
// }
// sum(10)

// juft sonlar
// function sum(a) => {
//     let sum = 0
//     for (let i = 1; i <= a; i++) {
//         if (i % 2 === 0) {
//             sum = sum + i
//         }
//     }
//     console.log(sum);
// }
// sum(10)

// toq sonlar

// function sum(a) => {
//     let sum = 0
//     for (let i = 1; i <= a; i++) {
//         if (i % 2 !== 0) {
//             sum = sum + i
//         }
//     }
//     console.log(sum);
// }
// sum(10)

// 5 ga bo 'linadigan son

// function sum(a) => {
//     let sum = 0;
//     for (let i = 1; i <= a; i++) {
//         if (i % 5 != 0) sum += i
//     }
//     console.log(sum);
// }
// sum(35)

// juft sonlar soni

// function sum(a) => {
//     let sum = 0
//     for (let i = 1; i <= a; i++) {
//         if (i % 5 != 0) {
//             sum += i
//         }
//     }

//     console.log(sum);
// }
// sum(18)

// a va b sonlar orasidagi sonlar yig'indisi

// function func(a, b) {

//     for (let a = 2; a < b; a++) {
//         let b = 8;
//         let sum = sum + a
//         sum = sum + b
//         console.log(sum);
//     }
// }
// func(2, 8);

//  a sonining 5chi darajasi
// function myfunc(a, x) {
//     let result = 1

//     for (let sum = 0; sum < x; sum++) result = result * a

//     console.log(result);
// }
// myfunc(2, prompt(`darajani kiriting`))


// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }

//   ask(
//     "Do you agree?",
//     () => alert("You agreed.") ,
//     () => alert("You canceled the execution.")
//   )