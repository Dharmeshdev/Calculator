// Numbers
let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let num3 = document.getElementById('num3')
let num4 = document.getElementById('num4')
let num5 = document.getElementById('num5')
let num6 = document.getElementById('num6')
let num7 = document.getElementById('num7')
let num8 = document.getElementById('num8')
let num9 = document.getElementById('num9')
let num0 = document.getElementById('num0')
// math
let add = document.getElementById('add')
let sub = document.getElementById('sub')
let mul = document.getElementById('mul')
let div = document.getElementById('div')
// Input field
let textbox = document.getElementById("textbox");
// all buttons
buttons = document.querySelectorAll('button');
let clear = document.getElementById('clear');
let back = document.getElementById('Back')
// op
let output = document.getElementById('short')
let empString = '';

function backfn(){
let value = document.getElementById('textbox').value
document.getElementById("textbox").value = value.substr(0, value.length - 1);
}

for ( item of buttons) {
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        // textbox.innerText = buttonText;
        textbox.value += buttonText;

        if(buttonText === 'Clear'){
            empString = '';
            textbox.value = empString;
        }
        
        else if(buttonText ==  '='){
        textbox.value = eval(empString);
        }
// I was talking about this function to work :(
        else if(buttonText === 'Back'){
            buttonText = '';
            let value = document.getElementById('textbox').value
            value.substr(0, value.length -1)
        }
        
        else{
            empString += buttonText;
            textbox.value = empString;
        }


    })   
}