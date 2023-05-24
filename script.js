function onesDigit(n) {
  // your code here
	let digit = n % 10;
	// while(n > 0 )
	// 	{
	// 		let digit =  ;
	// 		n = n / 10;
	// 	}
	return digit;
}

// Do not change the code below

const n = prompt("Enter Number:");
alert(onesDigit(n));
