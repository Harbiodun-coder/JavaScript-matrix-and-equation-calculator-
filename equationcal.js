var start = prompt('Start program: 1.Yes 2.No')
while (start == 1 ) {
    // alert('What Equation is required')
    var choice = prompt(`Please choose form the list which type of calculation you want to make:
    1. Area and perimeter of Rectangle 
    2. Area and perimeter of square 
    3. Area and perimeter of Trapezium 
    4. Area and perimeter of parallelogram
    5. Area and perimeter of Triangle
    6. Simultaneous equation
    7. Quadratic equation`)
    
    if(choice == 1){
        var num1 = Number(prompt('Input Length'))
        var num2 = Number(prompt('Input Breadth'))
        var area1 = eval(num1*num2)
        var perimeter1 = eval(( 2*(num1+num2)))
        alert(`The area is ${area1} and perimeter is ${perimeter1}`)
    
    } else if(choice == 2){
        var num1,area2,perimeter2
        num1 = prompt('Input Length') 
        area2 = eval(num1*num1)
        perimeter2 = eval((4*(num1)))
        alert(`The area is ${area2} and perimeter is ${perimeter2}`)
    } else if (choice == 3){
        var num1,num2,num3,num4,num5,area3,perimeter3
        num1 = Number(prompt('Input first parallel side(a)'))
        num2 = Number(prompt('Input second parallel side(b)'))
        num3 = Number(prompt('Input first oblique side(c)'))
        num4 = Number(prompt('Input second oblique side(d)'))
        num5 = Number(prompt('Input height(h)'))
        area3 = eval(0.5*(num1+num2)*num5)
        perimeter3 = eval(num1+num2+num3+num4)
        alert(`The area is ${area3} and perimeter is ${perimeter3}`)
    }   else if (choice == 4){
        var num1,num2,num3,area4,perimeter4
        num1 = Number(prompt('Input side'))
        num2 = Number(prompt('Input base'))
        num3 = Number(prompt('Input height'))
        area4 = eval(num2*num3)
        perimeter4 = eval(( 2*(num1+num2)))
        alert(`The area is ${area4} and perimeter is ${perimeter4}`)
    
    }   else if(choice == 5){
        var num1,num2,num3,num4,num5,area5,perimeter5
        num1 = Number(prompt('Input Base'))
        num2 = Number(prompt('Input height'))
        num3 = Number(prompt('Input first side(a)'))
        num4 = Number(prompt('Input second side(b)'))
        num5 = Number(prompt('Input third side(c)'))
        area5 = eval(0.5*(num1*num2))
        perimeter5 = eval(num3+num4+num5)
        alert(`The area is ${area5} and perimeter is ${perimeter5}`)
    }   else if(choice == 6){
        var a1,a2,b1,b2,c1,c2,x,y
        a1 = Number(prompt('Input a1'))
        a2 = Number(prompt('Input a2'))
        b1 = Number(prompt('Input b1'))
        b2 = Number(prompt('Input b2'))
        c1 = Number(prompt('Input c1'))
        c2 = Number(prompt('Input c2'))
        x = (((b2*c1)-(b1*c2))/((a1*b2)-(a2*b1)))
        y = (((a2*c1)-(a1*c2))/((a2*b1)-(a1*b2)))
        alert(`x is ${x} and y is ${y}`)
    }   else if(choice == 7){
        var a,b,c,x1,x2,inner
        a = Number(prompt('Input a'))
        b = Number(prompt('Input b'))
        c = Number(prompt('Input c'))
        inner = eval(((b**2)-(4*a*c))**0.5)
        x1 = eval((-b+(inner))/(2*a))
        x2 = eval((-b-(inner))/(2*a))
        alert(`x1 is ${x1} and y is ${x2}`)
    };  
var proceed = prompt('Would you like to continue with another equation: 1.yes 2.no') 

if (proceed == 1) {
    start = 1    
} else if(proceed == 2){ start = 2
    
}
}

