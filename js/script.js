var arregloStatic = [[1,2,3],[0,1,3],[0,0,1]]
//identificar diagonal
var anterior = 0
var matrizLineal = true;

for(let i=0; i<arregloStatic.length;i++){

for(let j=0; j<arregloStatic.length;j++){
  console.log(`index posición [${i}][${j}] == ${arregloStatic[i][j]}`)
  if(i == j){

    if((i+1)==arregloStatic.length || (j+1)==arregloStatic.length){

        if(arregloStatic[i][j] != arregloStatic[i-1][j-1]){
          matrizLineal = false
        }

    }else{
      
      //si los numeros de la diagonal principal son iguales sigue el proceso
      if(arregloStatic[i+1][j+1] != arregloStatic[i][j]){
        matrizLineal = false;
        break
      }

    }
   

  }else{
      
      //Si cualquier posicion fuera de la diagonal es diferente de 0
      if(arregloStatic[i][j] != 0){
          matrizLineal = false
          break
      }
    
  }

}
}

if(matrizLineal){
  console.log("Es una matriz lineal")
}else{
  console.log("No es una matriz lineal")
}





