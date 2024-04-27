// for of loop


// ["", "",""]
// [{}, {}, {},]

const arr = [1, 2 , 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world"

for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}

// Maps

const map = new Map();
map.set('PK', "Pakistn")
map.set('UK', "United Kingdom")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-' , value);
    
}

/*const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
for (const iterator of object) {
    
}*/

