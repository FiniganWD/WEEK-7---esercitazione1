var btn = document.getElementById('aggiungi');
var gruppoUtenti = [];

function utente(_nome, _cognome, _data_nascita){
    this.nome = _nome;
    this.cognome = _cognome;
    this.data_nascita = _data_nascita;

}

window.addEventListener('DOMContentLoaded', init());

function init(){
    if(gruppoUtenti.length > 0){
        stampaGruppoUtenti();
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let newNome = document.getElementById('nome').value;
    let newCognome = document.getElementById('cognome').value;
    let newData_nascita = document.getElementById('data_nascita').value;
    
    let newUtente = new utente(newNome, newCognome, newData_nascita);
    gruppoUtenti.push(newUtente);
    stampaGruppoUtenti();
});

function stampaGruppoUtenti(){
    let lista = document.getElementById('lista');

    gruppoUtenti.forEach((e) =>{
        let colonna1 = `<td class="w-25">${e.nome}</td>`;
        let colonna2 = `<td class="w-25">${e.cognome}</td>`;
        let colonna3 = `<td class="w-25">${e.data_nascita}</td>`;
        lista.innerHTML += `<tr>${colonna1}${colonna2}${colonna3}</tr>`;
    });
}