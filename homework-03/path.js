const path=require('path');

//1.
let thisFile = path.parse(__filename);
//console.log(thisFile);

//2.
let file=path.isAbsolute('Users\\Sandra\\Desktop');
//console.log(file);
//console.log(path.isAbsolute('C:\\Users\\Sandra\\Desktop'));

//3.
let extName=path.extname('path.js');
//console.log(extName);

//4.
let format=path.format({
    //root: 'C:\\',
    dir: 'Users\\Sandra\\Node.js',
    base:'path.js'
})
//console.log(format);

//5.
let split='Users\\Sandra\\Desktop'.split(path.sep);
//console.log(split);