let rubrica = {
   
    contatti : [
        'Nicola', 
        'Lorenzo', 
        'Paola',
        'Jenny',
    ],


    'NomSingolo' : function (nome_chiamato){
        //Se l'array dei contatti contiene il nome chiamato allora chiamalo, altrimenti stampa in console il messaggio contatto non presente in rubrica.
       
        if(this.contatti.includes(nome_chiamato)){
             console.log(`${nome_chiamato}`);
        }else{
            console.log(`${nome_chiamato} Contatto non presente in rubrica`);
        }
    },
    
    mostra_contatti : function(){

        this.contatti.forEach((contatto)=> console.log(contatto));
    },

    
    // Cosa deve fare questa funzione? Ti passo un nome -
    aggiungi_contatti : function(nome){
        this.contatti.push(nome);
    },

rimuovi_contatto : function (nome_rimosso) {
    //.pop() rimuove primo
    //.shift() rimuove ultimo
    //.splice() rimuove quello che voglio io

    let index =this.contatti.indexOf(nome_rimosso);
    // primo parametro indice, secondo quanti contatti eliminare (1) nel nostro caso
    // questo splice lo devi fare solo se l'index è >= 0 deve effettuare lo splice altrimenti stampare il messaggio 'Nome non presente in rubrica'
    if(index >= 0 ){
        console.log(`${nome_rimosso} è stato cancellato`);
        this.contatti.splice(index, 1);
    }else{
        console.log(`${nome_rimosso} non è presente in rubrica`);
    }
    
}

};
// 1 - Parte che mostra i contatti
rubrica.mostra_contatti();

// 2 - Parte che mostra un solo contatto
rubrica.NomSingolo('Jenny');

// 3 - Parte che cancella un contatto
rubrica.rimuovi_contatto('Nicola');
rubrica.mostra_contatti();

// 4 - Parte che aggiunge un nuovo contatto
rubrica.aggiungi_contatti('Pietro');
rubrica.mostra_contatti();

// 5 - Modificare un contatto





// rubrica.aggiungi_contatti('Matteo');
// rubrica.aggiungi_contatti('Arina');
