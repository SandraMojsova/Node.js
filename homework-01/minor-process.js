module.exports = (actors,age) => {
    let counter=0;

    actors.forEach( actor=> {
        if(actor.age<age) {
            counter++;
            console.log(`Name: ${actor.name}, Last Name: ${actor.lastname}`);
        }
    });
    console.log(`${counter} in Stranger Things`);
};

  