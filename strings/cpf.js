function removeNonDigits(str) {
    let regex = str.match(/\d/g)
    let newString = regex.join('')
    console.log(newString)
}

removeNonDigits('874.092.172-94')