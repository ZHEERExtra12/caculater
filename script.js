const displayinput= document.getElementById("input");

function display(input){
          displayinput.value += input;
} 

function caculate(){
          try {
                    // Replace custom operators with JavaScript operators
                    const expression = displayinput.value
                        .replace(/×/g, '*')
                        .replace(/÷/g, '/')
                        .replace(/−/g, '-');
            
                    // Evaluate the expression
                    displayinput.value = eval(expression);
                } catch (error) {
                    displayinput.value = 'Error';
                }
}

function Clear(){
          displayinput.value =""
}
