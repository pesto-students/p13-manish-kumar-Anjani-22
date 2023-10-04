function counter()
{
    var count=0;
    function incrementCount()
    {
         return count++;
    }
    return incrementCount;
}

const firstCounter=counter();
const secondCounter=counter();

let firstArray=[];
let secondArray=[];

for(i=0;i<5;i++)
{
    firstArray.push(firstCounter());
}
for(i=0;i<3;i++)
{
    secondArray.push(secondCounter());
}
console.log(firstArray);
console.log(secondArray);


