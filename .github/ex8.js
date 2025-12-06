function totalAvecRemise(total, remise) {
    return total - (total * remise / 100);
}

let totalHT = Number(prompt("Total HT : "));
let remise = Number(prompt("Remise (%) : "));

let final = totalAvecRemise(totalHT, remise);
console.log("Total après remise :", final);
