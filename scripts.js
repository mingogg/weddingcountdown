const limitDate = new Date('2026-08-23T00:00:00');

setInterval(() => {
   const now = new Date();
    const msDifference = limitDate - now;

    const totalSeconds = Math.floor(msDifference / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById(
        'countdown'
    ).innerHTML = `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}, 1000);
