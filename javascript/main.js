function backspace() {
    let x = document.querySelector('.display-box'); 
    x.value = x.value.substring(0, x.value.length - 1); 
}
