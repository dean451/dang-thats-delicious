const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');


// // Do work here
// router.get('/', (req, res) => {
//   const dean = { name: "Dean", age: 26, cool: true };
//   // res.send('Oh boy it sure does!');
//   res.render('hello');
// });
//
// router.get('/reverse/:name', (req, res) => {
//   const reverse = [...req.params.name].reverse().join('');
//   res.send(reverse);
// });

router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post('/add', storeController.createStore);

module.exports = router;
