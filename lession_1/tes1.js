// Kiem tra nam nhuan
var year = 2024 ;

if ((year % 4 == 0 && year % 100 !=0) || year % 400==0){
    console.log(year + ' la nam nhuan');
}else{
    console.log(year + ' khong la nam nhuan');
}

//Kiem tra so chan le
var number = 2;

if(number % 2 == 0){
    console.log(number + ' la so chan');
}else{
    console.log(number + ' la so le');
}



//
var i = 0;
var array = [];
var array1 = [];
while(i<10){
    array.push(Math.floor(Math.random() * 10));
   array1 = [...new Set(array)]; // loại trùng
    i = array1.length; // đếm số lượng mảng đã loại trùng để làm điều 
}
console.log(array1);
var vitri1 = array1.indexOf(1) +1;
console.log(vitri1);

//
function run(object) {
    var array =[];
    for(var key in object){
        var results = `Thuộc tính ${key} có giá trị ${object[key]}`;
        array.push(results);
    }
    return array;
}
// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));