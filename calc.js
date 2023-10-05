let firstNumber = ''
let secondNumber = ''
let sign = ''
let result = false



const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', 'X', '/', '%', '+/-'] //добавил 3 ласт элемента

//screen
const out = document.querySelector('.calc-screen p')

//clear
function clearAll(){
    firstNumber = '';
    secondNumber = '';
    sign = '';
    result = false;
    out.textContent = 0
}

document.querySelector('.ac').onclick = clearAll

document.querySelector('.buttons').onclick = (event) =>{
    //button is not active
    if(!event.target.classList.contains('btn')) {
        return}
    //button is active
    if(event.target.classList.contains('ac')) {
        return}
        
    out.textContent = ''
    //get an active button
    const key = event.target.textContent

    //if buttons pressed 0-9 or .
    if(digits.includes(key)){
        if(secondNumber === '' && sign === ''){
        firstNumber+=key
        console.log(firstNumber,secondNumber,sign, )
        out.textContent = firstNumber
        }
        else if(firstNumber!=='' && secondNumber!=='' && result){
            secondNumber = key
            result = false
            out.textContent = secondNumber
        }
        else{
            secondNumber += key
            out.textContent = secondNumber
        } 
    }
    //if buttons pressed + or - or / or X
    if(action.includes(key)){
        sign = key
        out.textContent = sign
        console.log(firstNumber, secondNumber,sign)
        return
    }

    //if button pressed =
    if(key === '='){
        if(secondNumber ===''){
            secondNumber = firstNumber
        }
        switch(sign){
            case "+":
                firstNumber = (+firstNumber) + (+secondNumber)
                break;
            case "-":
                firstNumber = firstNumber - secondNumber
                break;
            case "X":
                firstNumber = firstNumber * secondNumber
                break;
            case "/":
                if(secondNumber === '0'){
                    out.textContent = 'Error: uncorrect'
                    firstNumber = ''
                    secondNumber = ''
                    sign = ''
                    return
                }
                firstNumber = firstNumber / secondNumber
                break;
            case '%'://плохо, что знак появляется, ну да ладно
                secondNumber = 100
                firstNumber = firstNumber / secondNumber //wow i did it
                break;
            case '+/-': //плохо, что знак появляется, ну да ладно
                firstNumber = -firstNumber
                break;
            }
                
        result = true
        out.textContent = firstNumber
        console.log(firstNumber, secondNumber, sign)
        }

}
