const num=prompt('Enter list of numbers separated by space : ');
divideArray(num);
function divideArray(num)
{
    const stringArray=num.split(' ');
    const numArray=stringArray.map(item => parseInt(item));
    let even=[];
    let odd=[];

    for(const x of numArray)
    {
        if(x%2==0)
        {
            even.push(x);
        }
        else{
            odd.push(x);
        }
    }
    even.sort();
    odd.sort();

    if(even.length==0)
    {
        console.log('NONE')
    }
    else 
    {
        console.log(even);
    }
    if(odd.length==0)
    {
        console.log('NONE')
    }
    else 
    {
        console.log(odd);
    }
}