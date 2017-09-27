console.log("destructuring");

const person = {

    age: "29",
    location: {
        city: "San Francisco",
        temp: 70
    }
}

const { name = "Unknown", age } = person;

console.log(`${name} is ${age}.`);

const {city, temp: temperature} = person.location;

console.log(`It's ${temperature} in ${city}.`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);
