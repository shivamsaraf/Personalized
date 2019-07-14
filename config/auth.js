module.exports= {
	ensureAuthenticated:function(req,res,next){
		if(req.isAuthenticated()){
			return next();
		}
		req.flash('error_msg','plz login to view this record');
		res.redirect('/users/login');
	}
}
