let quantity,
    num = 0;

quantity = +prompt(`Amount of numbers`);

for (let i = 0; i < quantity; i++) {
    num = num + +prompt(`Enter the number`);
}

alert(`Average value:  ${num / quantity}`)