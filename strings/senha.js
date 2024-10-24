function validatePassword(str) {
    let totalCaracteres = str.length;
    let letras = str.match(/[A-Za-z]/g)
    let numeros = str.match(/\d/g)
    let caracteres = str.match(/[^A-Za-z0-9]/g)
    
    if(totalCaracteres >= 8 && letras && numeros && caracteres) {
        console.log("VALIDA");
    } else {
        console.log("INVALIDA")
    }
}

validatePassword("amer1234@")