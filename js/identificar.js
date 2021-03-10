
//Problematica:

/*
una cadena de texto, 
poder indentificar las letras mayuscula dentro del mismo y ordenarlo 
según el abecedario, y en ese mismo orden identificar 
dentro de una coleccion de nombres la cantidad de nombre segun la vocal
*/


const pharase = "Los RinoceRontes son AnimaLes Muy Fuertes";
var Uppercase_pharase = new Array(); 

//colección de nombre!
const nombres = ["Jhomiguel", "Tommy", "Dalvin", "Eliam", "Rosa", "Roberto", "Johan", "Saul",
"Juan", "Genesis", "Amauris", "Sandy", "Maria", "Esmeralda", "Beatrys", "Fernanda"];


//contador
let cont = 0;

//recorrer cadena
for(let l of pharase){
    
    let verify = l == l.toUpperCase();

    if(verify){
        
        if(l != " "){
            Uppercase_pharase[cont] = l;
            cont++;

        }

    }
}


//ordenar según vocal
Uppercase_pharase.sort();

//inicializando contador a 0;
cont = 0;

//eliminar vocales que son iguales.
let Uppercase_only = [...Uppercase_pharase].filter(x => {
    
    let pasado = cont-1;
    cont++;
     
    if(Uppercase_pharase[pasado] == x){
             
    }else{
        return x;
    }

});

//contar cantidad de nombre según la vocal
var cont_pharase = new Array();

cont_pharase = Uppercase_only.map(x =>{

        let contName = 0;
        nombres.map(firstName => {
            if(x == firstName.charAt(0).toUpperCase()){
                contName++;
            }
        })
        
        return contName;
})


//recorrer array;
for(let i =0; i< cont_pharase.length; i++){
    
    if(cont_pharase[i] != 0)
    console.log(`Letra: ${Uppercase_only[i]} existe un total de ${cont_pharase[i]} nombres`);
}



