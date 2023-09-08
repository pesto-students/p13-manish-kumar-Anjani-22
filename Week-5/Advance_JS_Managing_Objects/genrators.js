function* takesStringArray(stringarray)
{
    stringarray.forEach(element => { yield Symbol(element);
        
    });
}

const stringarray=["apple", "mango", "strawberry"];
const mygenrator=takesStringArray(stringarray);

console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next());