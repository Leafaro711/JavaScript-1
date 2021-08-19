// 12) Дополнительное задание: Выполнить сортировку массива методом пузырком

const arr = [1, 434, 4, 78, 79, 3]

function bubbleSort(arr) {    
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        var wasSwap = false;        
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];                
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
                wasSwap = true;
            }
        }        
        if (!wasSwap) break;
    }    
    return arr;
}

console.log(bubbleSort(arr));