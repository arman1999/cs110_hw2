<script>
	const space = function(nsp){
		if(nsp===0){
			return "";
		}
		return " " + space(nsp-1);
	};

	const star = function(nst){
	if(nst===0){
		return "";
	}
	return "*" + star(nst-1)
};

	const row = function(l){
	if(l===0){
		return "";
	}
	return row(l-1) + "\n" + space(nrw-l)+star(2*l-1)
};
	const nrw = 20;
	console.log(row(nrw));

</script>