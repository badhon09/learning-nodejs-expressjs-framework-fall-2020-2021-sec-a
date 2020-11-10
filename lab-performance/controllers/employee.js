const express 	= require('express');
const userModel = require('../models/employeeModel');
const router 	= express.Router();

router.get('*',  (req, res, next)=>{
	if(req.cookies['uname'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/create', (req, res)=>{
	res.render('employee/create');
});


router.post('/create', (req, res)=>{
	
	var job = {
		
		companyname: req.body.companyname,
		jobtitle: req.body.jobtitle,
		location: req.body.location,
		
		salary: req.body.salary,
		
	};
	
	userModel.insert(job,function(status){
		if(status){
			res.redirect('/Admin_home/userlist');
		}else{
			res.render('employee/create');
		}
	});
});










module.exports = router;
