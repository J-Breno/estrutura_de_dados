function extractEmailInformation(email) {
    let email2 = email.split("@")
    let usuario = email2[0];
    let dominio = email2[1];
    let dominioBr = dominio.split('.')[2]
    
    
    console.log(`Usuario: ${usuario}`);
    console.log(`Dominio: ${dominio}`)
    if(dominioBr) {
        console.log("Brasileiro: Sim")
    } else {
        console.log("Brasileiro: Não")
    }
}

extractEmailInformation("maria123@gmail.com")