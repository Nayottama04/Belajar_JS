const readline = require ("readline-sync");

const angkaPertama =parseFloat (readline.question("Masukan Angka Pertama :"));
const operator = readline.question("Masukan operator(+,-,*,/) :");
const angkaKedua =parseFloat (readline.question("Masukan Angka Kedua !:"));

if(isNaN(angkaPertama) || isNaN (angkaKedua)) {
    return console.log("inputan tidak sesuai ! ! !")
}
else{
    const hasil = execute(angkaPertama,angkaKedua,operator);
    console.log(`hasilnya adalah ${hasil}`);
}


function execute(angkaPertama,angkaKedua,operator){

//jika menggunakan switch

switch (operator){
    case "+": return angkaPertama + angkaKedua;
    case "-": return angkaPertama - angkaKedua;
    case "*": return angkaPertama * angkaKedua;
    case "/": if(angkaKedua ===0) {
        return console.log("Error: tidak bisa dibagi dengan nol");
    }
    return angkaPertama / angkaKedua;
    case "%": return angkaPertama % angkaKedua;
    default:
        console.log("operator tidak valid");
}

}
