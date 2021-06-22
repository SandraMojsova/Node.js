//Node.js Buffer Module

//Converts the string into a stream of binary data
//Creates a Buffer object from an object
const buf=Buffer.from('buffer');
console.log(buf);

//1.Returns a JSON Version of a Buffer Object
console.log(buf.toJSON());

//2.String version
console.log(buf.toString());

//3.Buffer Object keys
for(const key of buf.keys()) {
    console.log(key);
}

//4.Creating an empty Buffer of the length 50
var buff1=Buffer.alloc(50);
//console.log(buff1);
//5.Writing in empty Buffer
buff1.write("Writing in buff1");
console.log(buff1);


