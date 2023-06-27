document.getElementById('btn1').addEventListener('click',
function(){
    const input = document.getElementById('input').value;
    const elem = document.createElement('li');
    elem.innerText=input;
    const items = document.querySelector('.items');
    items.appendChild(elem);
    elem.style.fontSize="20px";
    elem.style.fontFamily="'Times New Roman', Times, serif";
    document.getElementById('input').value="";

})
document.getElementById('btn2').addEventListener('click',
function(){
    const items = document.querySelector('#items');
    const elm = items.lastElementChild;
    items.removeChild(elm);
})