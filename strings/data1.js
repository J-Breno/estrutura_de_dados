function extractDateData(date) {
    let data = date.split('/');
    let dia = +data[0];
    let mes = +data[1];
    let ano = +data[2];

    console.log(`Dia: ${dia}`)
    console.log(`Mês: ${mes}`)
    console.log(`Ano: ${ano}`)
}

extractDateData('21/07/2010')