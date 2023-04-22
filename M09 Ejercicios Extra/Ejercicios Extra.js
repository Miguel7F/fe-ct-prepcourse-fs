/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   
   return Object.entries(objeto);
   
   /*let arrayPadre=[];
   for(const element in objeto){
      arrayPadre.push([element,objeto[element]]);
   }
   return arrayPadre;*/
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   /*let obj = {};
   for (let i = 0; i < string.length; i++) {
      let letra = string[i];
      obj[letra] = obj[letra] ? obj[letra] + 1 : 1;
   }
   let arr = Object.entries(obj).sort();
   obj = {};
   for (let i = 0; i < arr.length; i++) {
      obj[arr[i][0]] = arr[i][1];
   }
   return obj;   
   */

   // Se recorre el string letra por letra, y se busca si existe en los subarray del arreglo principal.
   // Si existe se aumenta en uno el segundo elemento del subarray encontrado. 
   // Si no existe se crea el subarray con la letra encontrada y se inicia su valor en 1
   let array=[];
   for (const l of string){
      array.some(subArray=>subArray.includes(l))?array[array.findIndex(subArray=>subArray[0]===l)][1]++:array.push([l,1]);
   }
   // Luego se ordena el arreglo y se entrega los valores al objeto
   // Las Keys del objeto tendrán el índice 0 de cada subArray. El valor del objeto obtendrá el índice 1 del subarray.
   array.sort();
   let newObject={};
   array.forEach((subArray)=>{
      newObject[subArray[0]]=subArray[1];
      });
   return newObject;
   
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   return string.split("").filter(l=>l===l.toUpperCase()).concat(
   string.split("").filter(l=>l===l.toLowerCase())).join("");
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   return frase.split(" ").map(word => word.split("").reverse().join("")).join(" ")
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   
   //Se convierte el número en cadena y se compara con el inverso de la misma cadena. 
   return numero.toString()===numero.toString().split("").reverse().join("")?"Es capicua":"No es capicua";
   
   /*Otra manera de hacerlo
   //El número se convierte en arreglo y se extre y compara su primera posición con la última.
   //Se va reduciendo hasta que el arreglo solo es de un número. Si se encuentra diferencia se devuelve "No es capicúa"
   let arreglo=numero.toString().split("")
   while(arreglo.length>1){
      if(arreglo.shift()!==arreglo.pop()){
         return "No es capicua"
      }
   }
   return "Es capicua";
   */
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   return string.split("").filter(letra=>letra!=="a"&&letra!=="b"&&letra!=="c").join("")
   //return string.replace(/[abc]/g, '');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   return array1.filter(element=>array2.includes(element))

   /*let interseccion=[]
   array1.filter(element=>
      array2.forEach(compara=>{if(element===compara)interseccion.push(element)})
      );
   return interseccion;
   */
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
