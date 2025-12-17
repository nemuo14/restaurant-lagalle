function calculerAddition(prixPlat, prixBoisson){
    return prixPlat+prixBoisson;
}

function appliquerReduction(total, pourcentage){
    return total*(100-pourcentage)/100;
}

module.exports = { calculerAddition, appliquerReduction }