function mapForEach(arr, fn) {
    var arr2 = []
    for(var i = 0; i < arr.length; i++) {
        arr2.push( fn( arr[i] ))
    }
    return arr2
}

var arreglo = [1, 2, 3]

var arreglo2 = mapForEach(arreglo, function(valor) {
    return valor * 2;
})

var arreglo3 = mapForEach(arreglo, function(valor) {
    return ((valor % 2) === 0)
})

var arreglo4 = mapForEach(arreglo, function(valor) {})

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);


