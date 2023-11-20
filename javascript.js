document.querySelector("button").addEventListener("click",()=>{
    var text=document.querySelector(".input-text").value;
    var b= document.querySelector(".add-container");
    const newField=document.createElement('div');
    const radiobuttons=document.createElement('input');
    radiobuttons.setAttribute('type','checkbox');
    radiobuttons.setAttribute('name','dynamicCheckbox');
    radiobuttons.setAttribute('class',text);
    radiobuttons.className='Radio-b';
    newField.className='Newf'


    var label = document.createElement('label');
    label.textContent = text;
    label.className='Radio-la'
    newField.appendChild(radiobuttons);
    newField.appendChild(label);
    
    var cross=document.createElement('button')
    cross.innerHTML='X'
    cross.className='Cross'
    newField.appendChild(cross);
    b.appendChild(newField);
    b.style.marginBottom='10px'
    document.querySelector(".input-text").value='';


    cross.addEventListener('click',()=>{
        newField.remove();
    })

})


