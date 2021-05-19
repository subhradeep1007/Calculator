let screen = document.getElementById('screen')
buttons = document.querySelectorAll('button')
let screenvalue = ''
console.log(buttons.length)
for (var i = 0;i<buttons.length;i++) {
    buttons[i].addEventListener('click',function(item){
        
        buttonText= item.target.innerText;
        console.log('Button presed is',buttonText)

        if(buttonText=='X'){
            buttonText = '*';
            screenvalue += buttonText
            screen.value = screenvalue
        }
        else if(buttonText == 'C'){
            screenvalue = ''
            screen.value = screenvalue
        }
        else if(buttonText == '='){
            screen.value = eval(screenvalue);
            screenvalue = screen.value 
            // screenvalue = ''
        }
        else{
            screenvalue += buttonText
            screen.value = screenvalue
        }


    })

}