let s='saveChangesInTheEditor';
function camelcase(s) {
    let counter=1;
    for(let i=0;i<s.length;i++){
        if(s[i]==s[i].toUpperCase()) {
            counter++;
        }
    }
    return console.log(counter);
}
camelcase(s);