class person{
   public name:string;
   protected age:number;
   private salry:number;


    constructor(name:string,age:number,salry:number=50000){
        this.name = name;
        this.age = age;
        this.salry = salry;
    }

    displayInfo():void{
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    register():void{
        console.log(`${this.name} is registered.`);
    }

    jobOffer():void{
        console.log(`${this.name} has received a job offer.`);
        console.log(`Salary offered: ${this.salry}`);
        console.log(`Age: ${this.age}`);
    }
}

let person1 = new person("Arvind", 30);
person1.displayInfo(); // Output: Name: Arvind, Age: 30
person1.register(); // Output: Arvind is registered.
person1.jobOffer(); // Output: Arvind has received a job offer. Salary offered: 50000 Age: 30


class Employee extends person{
    constructor(name:string,age:number,salry:number){
        super(name,age,salry);
    }

    displayEmployeeInfo():void{
        console.log(`Employee Name: ${this.name}, Employee Age: ${this.age}`);
    } 

   
  }

let employee1 = new Employee("Adarsh", 28, 60000);
employee1.displayEmployeeInfo(); // Output: Employee Name: Adarsh, Employee Age: 28
employee1.register(); // Output: Adarsh is registered.
employee1.jobOffer(); // Output: Adarsh has received a job offer. Salary offered: 60000 Age: 28