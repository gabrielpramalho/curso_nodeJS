//mais de um valor

const x = 10
const y = 'algum texto'
const z = [1, 2]

console.log(x, y, z)

//contagem de impressoes
console.count(`o valor de x é: ${x}, contagem`)
console.count(`o valor de x é: ${x}, contagem`)
console.count(`o valor de x é: ${x}, contagem`)
console.count(`o valor de x é: ${x}, contagem`)

setTimeout(() =>{
    console.clear()
}, 2000)