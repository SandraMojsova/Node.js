var dns = require('dns');

//1.
console.log(dns.getServers());

//https://www.facebook.com
//2.
dns.lookup('facebook.com',(err,adress,family)=> {
    if(err) {
        console.log(err);
    }
    console.log(adress,family);
})

//3.
dns.resolve4('facebook.com', (err, addresses) => {
    if (err) throw err;
    console.log(addresses);
    //console.log(`addresses: ${JSON.stringify(addresses)}`)
});

//4.
dns.lookupService('127.0.0.1', 8080, (err, hostname, service) => {
    console.log(hostname, service);
});

//5.
dns.reverse('69.171.250.35', (err,hostname)=> {
    if(err) {
        console.log(err);
    }
    else {
        console.log(hostname);
    }
})

