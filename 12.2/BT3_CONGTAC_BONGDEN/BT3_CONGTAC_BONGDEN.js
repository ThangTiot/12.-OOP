let s = [1,1,1,1,1,1]
let d = 3
let m = 2
let count = 0
let s1 = []
for (let i=0;i<=s.length-m;i++){
    let sum = 0
    s1 = s.slice(i,i+m)
    for (let j=0;j<s1.length;j++){
        sum += s1[j]
    }
    if (sum === d) {
        count++
    }
}