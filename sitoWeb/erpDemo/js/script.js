document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impedisce l'invio del form

    // Otteniamo tutti i campi del form
    const numeroFattura = document.getElementById("numeroFattura").value;
    const dataFattura = document.getElementById("dataFattura").value;
    const cliente = document.getElementById("cliente").value;
    const quantita = document.getElementById("quantita").value;
    const prezzoArticolo = document.getElementById("prezzoArticolo").value;
    const descrizione = document.getElementById("descrizione").value;

    // Verifica che tutti i campi siano compilati
    if (numeroFattura && dataFattura && cliente && quantita && prezzoArticolo && descrizione) {
        const submit = confirm("Sei sicuro di voler inserire la fattura?");
        
        if (submit) {
            // Se l'utente conferma, reindirizza alla pagina di conferma
            window.location.href = "../templates/confermaInserimento.html";
        }
    } else {
        // Se un campo è vuoto, mostriamo un messaggio di avviso
        alert("Per favore, compila tutti i campi del modulo.");
    }
});
