

let listaAlunos = ["Claudio","Silvio","Ana","Magali","Sonia"];
//console.log(listaAlunos.length)

for (let index = 0; index < listaAlunos.length; index++) {
    //const element = array[index];
    console.log(index)
    if (index == 0) {
        console.log("zero localizado: " + listaAlunos[index])    
     } else if ( index % 2 != 0 ) {
        console.log("numero impar localizado: " + listaAlunos[index])
    } else {console.log("numero par localizado: " + listaAlunos[index])}
       
    }
