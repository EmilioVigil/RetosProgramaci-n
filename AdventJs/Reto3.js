function distributeGifts(packOfGifts, reindeers) {
    let pesoRegalo = 0;
    let pesoRenos = 0;

    packOfGifts.forEach(e => {
        pesoRegalo += e.length
    });

    reindeers.forEach(e => {
        pesoRenos += e.length * 2
    })

    return Math.floor(pesoRenos / pesoRegalo)
}

