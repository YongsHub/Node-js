const { mainModule } = require("process");

const human = {
    name: '김태용',
    age: 24,
    sex: 'male',
}

json = JSON.stringify(human, (key, value) => {
    return key === 'name' ? value = '사람' : value;
});

console.log(json);
console.log(JSON.parse(json));
