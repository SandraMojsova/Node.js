var express = require('express');
var router = express.Router();

const users =[
  {
    name:'Sandra',
    status: 'inactive',
    location: 'Negotino',
    phone: '+389070227311'
  },
  {
    name:'Clara',
    status: 'active',
    location: 'Berlin',
    phone: '+389070225767'
  },
  {
    name:'Adem',
    status: 'inactive',
    location: 'Skopje',
    phone: '+389070227000'
  },
  {
    name:'Alma',
    status: 'inactive',
    location: 'Skopje',
    phone: '+389070227001'
  }, {
    name:'Jakov',
    status: 'active',
    location: 'Skopje',
    phone: '+389070227003'
  },
  {
    name:'Kai',
    status: 'inactive',
    location: 'Bielefeld',
    phone: '+389070227006'
  }
]

router.get('/', (req, res)=> {
  res.render('users', {users: users});
});

module.exports = router;
