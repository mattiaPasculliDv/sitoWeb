document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Preleva i dati dal form
    const nome = document.getElementById('nome').value;
    const cognome = document.getElementById('cognome').value;
    const email = document.getElementById('email').value;
    const messaggio = document.getElementById('messaggio').value;
    const privacy = document.getElementById('privacy').checked;

    // Verifica se tutti i campi sono stati compilati
    if (nome === '' || cognome === '' || email === '' || messaggio === '' || !privacy) {
        // Mostra un alert se ci sono campi vuoti
        alert("Compila tutti i dati per favore.");
        event.preventDefault(); // Impedisce l'invio del form
    } else {
        // Mostra un alert di conferma prima di inviare
        const conferma = confirm("Sei sicuro di voler inviare i tuoi dati?");
        if (!conferma) {
            event.preventDefault(); // Impedisce l'invio del form se l'utente annulla
        }
    }
});
