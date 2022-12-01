let mobil = {
    merek : [
        {
            "Toyota":"Avanza",
            "Honda":"Civic",
            "BMW":"E320"
        },
        {
            "Honda" : "Jazz"
        }
    ]
}

let hasil = mobil.merek[0].Honda;
let hasil2 = mobil.merek[1].Honda;

console.log(hasil);
console.log(hasil2);
console.log(hasil + " " + hasil2);
