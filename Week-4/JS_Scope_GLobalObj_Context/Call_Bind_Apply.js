class Calculator
{
    add(a,b)
    { 
        return a+b;
    }

    subtract(a,b)
    { 
        return a-b;
    }

    multiply(a,b)
    { 
        return a*b;
    }

    divide(a,b)
    { 
        try
        {
            return a/b;
        }
        catch(error)
        {
            console.log(error);
        }
        
    }
    
}

class ScientificCalculator extends Calculator
{
    square(a)
    { 
        return a*a;
    }

    cube(a)
    { 
        return a*a*a;
    }

    exponent(a, b)
    { 
        return Math.pow(a, b);
    }
}

const cal=new ScientificCalculator();


//Have vaguely understood the concept here, little explanation required 
var res1=ScientificCalculator.prototype.add.call(cal, 101, 51);
var res2=ScientificCalculator.prototype.multiply.apply(cal, [101,45]);
const multiplyByTwo=ScientificCalculator.prototype.multiply.bind(cal, 2);
const powerOfTheree=ScientificCalculator.prototype.multiply.bind(cal, 3);
powerOfTheree(5);

console.log(multiplyByTwo(5));
console.log(powerOfTheree(2));



