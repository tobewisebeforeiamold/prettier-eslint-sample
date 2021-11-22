const exampleFunction = (arg1, arg2) => {
	console.log(
		'A really long description text string that should, ideally, get wrapped for me',
		arg1,
		arg2
	);
};

exampleFunction( 'Well...', '...does this wrap and format correctly for you?' );
