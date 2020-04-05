console.log('Clase 2.8');
console.log('Ciclo for');

// for (let i = 0; i <= 10; i++){
//     console.log(i);
// }

let teachers = ['Jon','Alexys', 'Daniel', 'Francisco', 'Rafa', 'José', 'Alvaro'];

for (let i = 0; i < teachers.length; i++) {

    // if (teachers[i].length <= 5) {
    //     console.log(teachers[i])
    // }

    if (teachers[i].toUpperCase().indexOf('A') === 0) {
        // console.log(teachers[i]);
        break; // sale del ciclo
        // continue; // saltarse una iteracion del ciclo
    }
    console.log(teachers[i]);
}