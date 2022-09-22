function mouseover(){
    document.getElementById("abc").style.backgroundColor = "blue"
}
function mouseOut(){
    document.getElementById("out").style.backgroundColor = "yellow"
}
function ondclick(){
    document.getElementById("dclick").style.backgroundColor = "green"
}
function Focus(){
    document.getElementById("onf").style.backgroundColor = "red"
}
function focusEx() {
    document.getElementById('focus123').style.backgroundColor = "red"
    
}
function onBlur(){
  let tag_Ref = document.getElementById("blur")
  
 document.getElementById("blur").value = tag_Ref.value.toUpperCase()
}