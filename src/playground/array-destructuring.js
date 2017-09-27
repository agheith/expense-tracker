// console.log('array-destructuring');
//
// const address = ['1299 S Juniper Street', 'Los Angeles', 'California', '12345']
//
// const [, city, state = 'Southern Cali'] = address;
//
// console.log(`You are in ${city} ${state}.`)

const item = ['Coffee(hot)','$2.00','$2.50','$2.75'];

const [ Coffee, , meduim = "$3.00"] = item;

console.log(`A meduim ${Coffee} costs ${meduim}.`);
