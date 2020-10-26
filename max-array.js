let array = [1, 3, 5, 8, 10];
let max = array[0];
let index = 0;
for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
        max = array[i];
        index = i;
    }
}
console.log(max + " là giá trị lớn nhất trong mảng nằm ở vị trí thứ " + index);