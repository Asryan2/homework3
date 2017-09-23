function addThree(a,b,c){
	return a+b+c;
}

function hw(){
	return "Hello, World!"
}

function log(str1){
	console.log(str1);
}

function fullName(first, last){
	return (first + " " + last);
}

function longestString(s1, s2, s3){
	l1 = s1.length;
	l2 = s2.length;
	l3 = s3.length;
	if(l1 >= l2 && l1 >= l3)
		return s1;
	else if(l2 >= l1 && l2 >= l3)
		return s2;
	else
		return s3;
}

function compare(n,m){
	if(n > m)
		return 1;
	else if(n < m)
		return -1;
	else 
		return 0;
}

function firstTruthy(arg1, arg2, arg3){
	if(arg1 == true) return arg1;
	if(arg2 == true) return arg2;
	if(arg3 == true) return arg3;
}
