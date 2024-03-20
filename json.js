const b = {
    a : "Aish",
    c : 24
}

console.log(b.a)

const j = JSON.stringify(b)
console.log(j)

const jb = JSON.parse(j)
console.log(jb)
console.log(jb.a)