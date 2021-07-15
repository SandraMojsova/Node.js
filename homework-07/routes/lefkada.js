const express = require('express');
const router = express.Router();

const places = [{
    place: 'Vasiliki',
    price: 250
},
{
    place: 'Desimi',
    price: 100
},
{
    place: 'Nikiana',
    price: 250
},
{
    place: 'Agios Nikitas',
    price: 60
},
{
    place: 'Athani',
    price: 180
},
{
    place: 'Mikros Gialos',
    price: 130
},
{
    place: 'Sivota',
    price: 110
}]

router.get('/', (req,res)=> {
    res.render('lefkada', {places: places});
})

module.exports= router;