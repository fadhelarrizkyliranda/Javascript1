var prompt = require('prompt-sync')();


var a = prompt('Input first number : ');
var b = prompt('Input second number : '); 
//console.log(typeof(a)); //Checking tipe data
var c = Number(a) + Number (b); //Mengubah str to number

console.log('Hasil penjumlahan : '+ c);
