export function add(param1: number, param2: number): number {
    return param1 + param2
}

export function add2(...param1: number[]): number {
    
    //solution with reduce
    return param1.reduce((a, b) => a + b)

    //for loop solution
    // let total = 0
    // for(let i = 0;i < param1.length;i++){
    //     total += param1[i]
    // }
    // return total
}
// console.log(add(1, 2));
// console.log(add(3, 2));

// console.log(add2(1,2,3,4,5));
// console.log(add2(2,3));
