const express = require('express');
const app = express();
const doctors=require('./doctors');

app.use(express.json());

//1.ALL DOCTORS
app.get('/doctors', (req,res)=> {
    res.send(doctors);
})

//2.DOCTOR WITH ID
app.get('/doctors/:id', (req,res)=> {
    let doctorId=doctors.some(doctor=> doctor.id==req.params.id);
    if(doctorId) {
        res.send(doctors.filter(doctor=> doctor.id==req.params.id))
    }
    else {
        res.status(400).send({message:`Doctor with ID ${req.params.id} not found`});
    }
});

//3.ADD DOCTOR
app.post('/newdoctors',(req,res)=> {
    const newDoctor = {
        id: req.body.id,
        name: req.body.name,
        city: req.body.city,
        specialization: req.body.specialization
    }
    doctors.push(newDoctor);
    res.send(newDoctor);
})

//4.DOCTORS WITH SPECIALIZATION
app.get('/specialization/:sp', (req,res)=> {
    let doctorsp=doctors.some(doctor=> doctor.specialization==req.params.sp);
    if(doctorsp) {
        console.log(req.params);
        res.send(doctors.filter(doctor=> doctor.specialization==req.params.sp))
        
    }
    else {
        res.status(400).send({message:`Doctor with specialization ${req.params.sp} not found`});
    }
});

app.listen(4000, () => {
    console.log('App is running on port 4000...');
});



