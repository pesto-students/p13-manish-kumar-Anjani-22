
const person={
    age,
    setAge(age){this.age=age;},
    getAge(){return this.age;}
};

Object.defineProperty(person, 'name',
{
  writable:false, 
});

Object.defineProperty(person, 'email',
{
  writable:false,
}
);


function Vehicle(make, model, year)
{
    this.make=make;    
    this.model=model;
    this.year=year;    
}

Vehicle.

Vehicle.prototype.getDetails = function () {
    return 'Make: ${this.make}, Model: ${this.model}, Year: ${this.year}';
  };

  const Car=new Vehicle();
  Car.prototype.noOfDoors=this.noOfDoors;

  Car.prototype.getDetails=function(){
    Vehicle.call(this, make, model, year);
    return 'Make: ${this.make}, Model: ${this.model}, Year: ${this.year}';

  }
