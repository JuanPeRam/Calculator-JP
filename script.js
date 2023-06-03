const mainConsole = document.getElementById("bottom-console")
const topConsole = document.getElementById("top-console")
const buttons = document.querySelectorAll(".calculator-button")
const operation = document.getElementById("operation")

topConsole.textContent = ""

buttons.forEach(button => {
    button.addEventListener('click',function(){
        readButton(button.textContent);
    },false);
})

function readButton(key){
    switch(key){
        case "+":
        case "-":
        case "/":
        case "x":
            setCurrentOperation(key)
        case "=":
            operate()
            break
        case "«-":
            clearLast()
            break
        case "C":
            reset()
            break
        default: numberPressed(key)
    }
}

function numberPressed(number){
    let currentValue = mainConsole.textContent
    if(number == "."){
        if(currentValue.indexOf(".")==-1) mainConsole.textContent+=number
        return
    }
    currentValue+=number
    mainConsole.textContent = parseFloat(currentValue)
}

function clearLast(){
    mainConsole.textContent = mainConsole.textContent.substring(0,mainConsole.textContent.length-1)
    if(mainConsole.textContent.length<1){
        mainConsole.textContent = "0"
    }
}

function reset(){
    mainConsole.textContent = "0"
    topConsole.textContent = ""
    operation.textContent = ""
}

function setCurrentOperation(op){
    operation.textContent = op
}

function operate(){
    let topContent = topConsole.textContent
    let botContent = mainConsole.textContent
    if(topContent == "" && botContent!=0 && operation.textContent!=null){
        topConsole.textContent = mainConsole.textContent
        mainConsole.textContent = "0"
        return
    }

    if(topContent!=null && botContent!=0){
        let result
        switch(operation.textContent){
            case "+": 
                result = parseFloat(topContent)+parseFloat(botContent)
                break
            case "-":
                result = parseFloat(topContent)-parseFloat(botContent)
                break
            case "/":
                result = parseFloat(topContent)/parseFloat(botContent)
                break
            case "x":
                result = parseFloat(topContent)*parseFloat(botContent)
                break
            default: return
        }
        if(result!=null){
            mainConsole.textContent = result
            operation.textContent = ""
            topConsole.textContent = ""
        }
    }
}

//Footer text set
const creatorName = "Juan Pereira"
const year = new Date().getFullYear()
const footer = document.getElementById("footer-text")
footer.textContent = creatorName + " - "+ year