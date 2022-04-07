//Multiplicar sin usar el signo de multiplicar//
const multiply = (a, b) => {
    let resultado = 0
    const positivo = Math.abs(b) == b
    for(i = 0; i < Math.abs(b); i++) {
        resultado = positivo ? resultado + a : resultado - a
    }

    return resultado
}

const a = multiply(50,50)
console.log(a)

//Mostar el numero mas grande del arreglo// 
const getBiggest = (arr) => arr.reduce((acc, el) => acc > el ? acc : el)
const b = getBiggest([50, -1500 ,1000 ,0 ,1 , 54])
console.log(b)

//Un arrreglo que elimine los undefined, null, fals o 0//
const clean = (arr) => arr.reduce((acc, el) =>{
    if (el) {
        acc.push(el)
    }
    return acc
}, [])

const c = clean([1, undefined, null, 0, 2, 3])
console.log(c)

// Aplanar un arreglo que nos regrese [1, 2, [3, 4], 1, []]//
const arr = [[1, 2], [[3,4]],[1, []]]
const flatten =arr=> arr.reduce((acc, el) => acc.concat(el),[])
const d= flatten(arr)
console.log(d)

// Funcion que cuente cuantas veces se repite una palabra//
function repeated(str) {
    const lowered = str.toLowerCase()
    const splitted = lowered.split(' ')
    const reduced = splitted.reduce((acc, el) => {
        if (acc[el]) {
            acc[el]++
        } else {
            acc[el] = 1
        }
        return acc
    }, {})
    return Object.entries(reduced).reduce((acc, el) => acc[1] > el[1] ? acc : el)
}

const e = repeated('this is a repeated word test this is a a')
console.log(e)

// Verificar si una uncion es un palindromo//
function isPalindrome(str) {
    str = str.replace(/\s/g, '')
    const lowered = str.toLowerCase()
    const splitted = lowered.split('')
    const reversed = splitted.reverse()
    const joined = reversed.join('')
    return lowered == joined
}

const f = isPalindrome('Do geese see God')
console.log(f)
