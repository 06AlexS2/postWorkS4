function chunk(arr,size){
    var array = [];
    for(var i = 0; i < arr.length; i+= size){
        array.push(arr.slice(i,i+size));
    }
    return array;
}

var data = [1,2,3,4,5,6,7,8];

console.log('Test 1:', chunk(data,1));
console.log('Test 2:', chunk(data,2));
console.log('Test 3:', chunk(data,3));
