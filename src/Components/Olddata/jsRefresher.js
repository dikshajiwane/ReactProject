/*  const person = {name:"Diksha", age:"25"}
  console.log(person)
  person.name = "Teju"
  console.log(person)

//array function
  let my_func = name =>{
      console.log('Hello '+name)
      console.log(`Hello ${name}`)
  }
  my_func("Diksha")

  //filter
  const fruits = ['apple', 'mango', 'orange']
  const filtered_fruits = fruits.filter(fruit => fruit !== 'mango')
  console.log(filtered_fruits)

  //map
  const map_fruits = fruits.map(fruit => fruit.slice(0,1))
  console.log(map_fruits)

  //speard
  const new_fruits = [...fruits, 'grapes']
  console.log(new_fruits)

  const person2 = {...fruits, email:"d@gmail.com"}
  console.log(person2)

  //destructering
  const {name, age} = person
  console.log(name, age)

  //classes
  class Person{
    constructor(name, age){
    this.name = name
    this.age = age
    }
    info(){
        return `Hi I am ${person1.name}, my age is ${person1.age}`
    }
  }
  const person1 = new Person('Diksha', 22)
  const person2 = new Person("teju", 25)

  //subclasses
  class Customer extends Person{
    constructor(name, age, balance){
        super(name, age)
        this.balance = balance
    }
    display(){
        return `hello I am ${this.name}, age is ${this.age}, balance is ${this.balance}`
    }
  }
  const customer1 = new Customer("Diksha", "23", "100000")
  console.log(customer1.display())
  console.log(customer1.info())*/
