/*
Practice with JavaScript OOP Concepts

Within the provided script, create the following applications. Remember to comment out every application once you’ve finished with that step.

Create two classes, one called Cat and another called Dog. Both classes should be created using constructor syntax. The Cat class should be created using a named declaration and the Dog class should be created using an anonymous declaration.
Create a new instance of the Cat class. Directly underneath, create a new instance of the Dog class.
Create a new class using constructor syntax called Animal. Create a method within the Animal class that when called, displays the message “The Animal has been created” in the console window.
Now, replicate the above code but this time so that the class accepts an argument and that value is what is displayed in the console window. The message should be passed into the constructor at the moment that the Animal class is instantiated.
Start over and now create a new class using constructor syntax called Animal. Define five properties within your class including properties type, breed, color, height, and length. These properties will be set within the object so you’ll need to pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s instantiation.
Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.
Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.
Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a privileged method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”
Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph. Remember, you’ll need to add your method to the String object’s prototype.
*/

// STEP 1
class Cat { constructor() {} }
const Dog = class { constructor() {} }

// STEP 2
const myCat = new Cat()
const myDog = new Dog()

// STEP 3
class Animal {
    constructor() {}

    displayMessage() {
        console.log(`The animal has been created`)
    }
}

const a = new Animal()
a.displayMessage()


// STEP 4
class Animal {
    constructor(message) {
        this.message = message
    }

    displayMessage() {
        console.log(this.message)
    }
}

const a = new Animal('The Animal has been created')

// STEP 5


// STEP 6

// STEP 7

// STEP 8

// STEP 9