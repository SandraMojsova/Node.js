var faker=require('faker');

for(i=0;i<20;i++) {
    var firstName=faker.name.firstName();
    //console.log(firstName);
    var lastName=faker.name.lastName();
    //console.log(lastName);
    var date=faker.date.between(1990,1998);
    //console.log(date);
    var finance=faker.finance.account();
    //console.log(finance);
    var balance=faker.finance.amount();
    //console.log(balance);
    var address=faker.address.streetAddress();
    //console.log(address);

    console.log(`${firstName}  ${lastName} , ${date} , ${finance} , ${balance} , ${address}`);
}

// or with faker.fake
for(i=0;i<20;i++) {
    console.log(faker.fake("{{name.firstName}}, {{name.lastName}}, {{date.past}}, {{finance.account}}, {{finance.amount}}, {{address.streetAddress}}"))
}

