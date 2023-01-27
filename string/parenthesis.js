//Check if given Parentheses expression is balanced or not

function parenthesis(a) {

    let stack = []
    for (let i = 0; i < a.length; i++){
        let last=stack[stack.length-1]
        if (a[i] == "(" || a[i]== "[" || a[i]=="{") {
            stack.push(a[i])
        } else if (a[i]== ")" && last == "(" || a[i]=="}" && last=="{" || a[i]=="]" && last== "[") {
            stack.pop()
        }
        else {
            return false
        }
    }
    return stack.length? false:true
}

console.log(parenthesis("("))
console.log(parenthesis("(){}[]"))
console.log(parenthesis("([])"))
console.log(parenthesis("({(}))"))
console.log(parenthesis("{}]"))