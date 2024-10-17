/**
==================================
 Operators
==================================
 Arithmetic Operators
----------------------------------
 -	    Subtraction
 *	    Multiplication
 **	    Exponentiation (ES2016)
 /	    Division
 %	    Modulus (Remainder)
 ++	    Increment
 --	    Decrement
 +	    Addition/ Concatenation
----------------------------------
Operator Precedence
==================================
*/

// Numeric operations
console.log("==============================================");
a = 5;
b = 10;

// [NUMERIC OPERATION] Numeric operation when operands are either "Number" or "Number" literal

c = a - b;
console.log(c, " ---> ", typeof c);

c = a * b;
console.log(c, " ---> ", typeof c);

c = a / b;
console.log(c, " ---> ", typeof c);

c = a ** b;
console.log(c, " ---> ", typeof c);

c = a % 2;
console.log(c, " ---> ", typeof c);

c = a++;
console.log(c, " ---> ", typeof c);

c = ++a;
console.log(c, " ---> ", typeof c);

c = a--;
console.log(c, " ---> ", typeof c);

c = --a;
console.log(c, " ---> ", typeof c);

// Numeric operations
console.log("-------------------------------------");
a = "5";
b = "10";

// [NUMERIC OPERATION] Numeric operation when operands are either "Number", "Number" literal, numeric "String" or numeric "String" literals

c = a - b;
console.log(c, " ---> ", typeof c);

c = a * b;
console.log(c, " ---> ", typeof c);

c = a / b;
console.log(c, " ---> ", typeof c);

c = a ** b;
console.log(c, " ---> ", typeof c);

c = a % 2;
console.log(c, " ---> ", typeof c);

c = a++;
console.log(c, " ---> ", typeof c);

c = ++a;
console.log(c, " ---> ", typeof c);

c = a--;
console.log(c, " ---> ", typeof c);

c = --a;
console.log(c, " ---> ", typeof c);

// Addition
console.log("==============================================");
a = 5;
b = 10;

// [ADD] Addition because both operands are either "Number" or "Number" literal
c = a + b;
console.log(c, " ---> ", typeof c);

c = a + 2;
console.log(c, " ---> ", typeof c);

c = 4 + 3;
console.log(c, " ---> ", typeof c);

// Concatenation {Numeric String and String}
console.log("-------------------------------------");
a = "5"; //Numeric String
b = 10;

// [CONCAT] Concatenation because any of the operands is either "String" or "String" literal
c = "25" + "25";
console.log(c, " ---> ", typeof c);

c = 100 + "25"; // [number to string] Type coercing (automatic or implicit type conversion) from 100 to "100"
console.log(c, " ---> ", typeof c);

c = a + "25";
console.log(c, " ---> ", typeof c);

c = a + b; // [number to string] Type coercing (automatic or implicit type conversion) from 10 to "10"
console.log(c, " ---> ", typeof c);

c = b + a;
console.log(c, " ---> ", typeof c);

// Concatenation {Non-numeric String and String}
console.log("-------------------------------------");
s = "programming"; //Non-numeric String
n = 15;

// [CONCAT] Concatenation because any of the operands is either "String" or "String" literal
c = s + n;
console.log(c, " ---> ", typeof c);

c = s + " JavaScript";
console.log(c, " ---> ", typeof c);

c = "C++ " + s;
console.log(c, " ---> ", typeof c);

c = "Babar" + " Ali";
console.log(c, " ---> ", typeof c);

c = "A" + "1";
console.log(c, " ---> ", typeof c);

// Addition {Typecasted Numeric String and String}
console.log("-------------------------------------");
a = "5"; //Numeric String
b = 10;

// [ADD] Addition because numeric strings are typecasted to numbers
c = +"25" + +"25";
console.log(c, " ---> ", typeof c);

c = 100 + +"25"; // [ADD] Addition because numeric strings are typecasted to numbers
console.log(c, " ---> ", typeof c);

c = +a + +"25"; // [ADD] Addition because numeric strings are typecasted to numbers
console.log(c, " ---> ", typeof c);

c = Number(a) + Number(b); // [ADD] Addition because numeric strings are typecasted to numbers
console.log(c, " ---> ", typeof c);

c = +b + Number(b); // [ADD] Addition because numeric strings are typecasted to numbers
console.log(c, " ---> ", typeof c);

// Operator Precedence
console.log("==============================================");
c = 5 + 3 * 6;
console.log(c, " ---> ", typeof c);

c = (5 + 3) * 6;
console.log(c, " ---> ", typeof c);
