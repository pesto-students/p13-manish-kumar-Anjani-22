class Person
{

    constructor(Name, Age, Gender, Nationality)
    {
        this.Name=Name;
        this.Age=Age;
        this.Gender=Gender;
        this.Nationality=Nationality;
    }
    introduce() {
        return " Name: ${Name} + Age: ${this.Age} + Gender: ${this.Gender} + Nationality: ${this.Nationality} ";
        
    }

}

class Student extends Person
{
    super();
    constructor(subject)
    {
        this.subject=subject;
    }
    study()
    {
        return " Studying + ${subject}" ;
    }
}

const p1=new Person( "A", 23, "Female","Indian");
const p2=new Person( "B", 33, "Male","Ireland");
const p3=new Person( "C", 43, "Female","Spainish");

console.log(p1.introduce());
console.log(p2.introduce());
console.log(p3.introduce());

const s1=new Student("Angela", 23, "Female","Indian","Programming");
 s1.introduce();
 s1.study();


