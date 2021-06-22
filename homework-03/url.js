const myURL = new URL('https://nodejs.org/api/url.html');
//console.log(myURL);
//1.
console.log(myURL.href);
//2.
console.log(myURL.host);
//3.
const myURL1 = new URL('https://example.org/abc/xyz?123');
console.log(myURL1.pathname);
//4.
myURL1.port='80';
console.log(myURL1.port);
console.log(myURL1.href);
//5.
const myURL2=new URL('https://www.sport-m.com.mk/ProductCatalog?Segment=18&MarketingStatus=020');
console.log(`Search : ${myURL2.search}`);




