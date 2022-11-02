var start = prompt('Start program: 1.Yes 2.No')

while (start == 1 ) {   
var A1 = Number(prompt('Input A1')) 
var B1 = Number(prompt('Input B1')) 
var C1 = Number(prompt('Input C1')) 
var A2 = Number(prompt('Input A2')) 
var B2 = Number(prompt('Input B2')) 
var C2 = Number(prompt('Input C2')) 
var A3 = Number(prompt('Input A3')) 
var B3 = Number(prompt('Input B3')) 
var C3 = Number(prompt('Input C3')) 
var solve = eval( A1*((B2*C3)-(B3*C2))- A2*((B1*C3)-(B3*C1))+ A3*((B1*C2)-(B2*C1)))
var solution = alert(solve)

var proceed = prompt('Would you like to continue: 1.yes 2.no') 

if (proceed == 1) {
    start = 1    
} else if(proceed == 2){ start = 2
    
}
}

