function sameNumbers(num){
    num = num.toString()
    let all_same = true;
    let sum = 0;
    for (let i = 0; i < num.length; i++){
        if (num[0] != num[i]){
            all_same = false;
        }
        sum += Number(num[i]);
    }
    console.log(all_same);
    console.log(sum);
}


sameNumbers(1234);