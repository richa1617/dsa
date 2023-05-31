/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.Given an integer, convert it to a roman numeral.


However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.


Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

*/




function intToRoman (num) {
    let roman = {
        'M':  1000, 'CM': 900, 'D':  500, 'CD': 400,
        'C':  100,  'XC': 90,  'L':  50,  'XL': 40,
        'X':  10,   'IX': 9,   'V':  5,   'IV': 4, 'I':  1
    },  
	romanNum = '';
	
    for(let i in roman){
        while(num >= roman[i]){
            romanNum += i;
            num -= roman[i];
        }
    }
    return romanNum; 
};

console.log(intToRoman(3))  //III
console.log(intToRoman(58))  //LVIII
console.log(intToRoman(1994)) //MCMXCIV