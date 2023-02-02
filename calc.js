// to display content of each key is pressed
function displayContent(content){
    calcscreen.value +=content
}
function allClear(){
    calcscreen.value=""
}
function evaluteExpr(){
    calcscreen.value= eval(calcscreen.value)
}
function removeLast(){
    calcscreen.value = calcscreen.value.slice(0,-1)
}