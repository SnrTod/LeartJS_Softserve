// task -1-

// function propsCount(currentObject) {
//         return Object.keys(currentObject).length;
// }
// let mentor = { 
//     course: "JS fundamental", 
//     duration: 3,
//     direction: "web-development" 
// };

// console.log(propsCount(mentor));

// task -2-

// function showProps(obj) {
//    return Object.values(student);

// }
// function propsCount(currentObject) {
//           return Object.keys(currentObject);
// }

// let student = {
//     firstName: "Oleksandra",
//     lastName: "Todoruk",
//     age: 29,
//     profession: "ex-Lawyer",
//     timeExp: 5,
// };

// console.log(propsCount(student), showProps(student));


// task -3-

// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     showFullName() {
//        return this.name + " " + this.surname;
//     }
// }

// let person = new Person ("ola", "fox");
// console.log(person.showFullName());

// class Student extends Person {
//     constructor (name, surname, year){
//         super(name, surname);
//         this.year = +year;
//     }
//     showFullName(middleName) {
//         return this.name + " " + this.surname + " " + middleName;
//     }
//     showCourse () {
//         let date = new Date;
//         return date.getFullYear() - this.year;
//     }
// }

// let student = new Student ("Ivan", "Petrenko", 2017);
// console.log(student.showFullName("Petrovych"));

// console.log("Current course: " + student.showCourse());


// task -4-

class Worker {
    _experience = 1.2;
    constructor (fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary() {
        return this.dayRate * this.workingDays;
    }
    
    showSalaryWithExperience(_experience) {
    return this.showSalary() * this._experience;
}
    showSalaryWithBigExperience() {
        return this.dayRate * this.workingDays * this._experience;
    }
    get showExp() {
        return this._experience;
    }
    set setExp(experience) {
        this._experience = experience;
    }
}

let worker1 = new Worker ("Ivan Petrenko", 45, 15);
 console.log(worker1.fullName, "Salary: " + worker1.showSalary(), ", Salary with experience: " + worker1.showSalaryWithExperience());
 worker1.setExp = 1.5;
 console.log ("salary with new experience: " + worker1.showSalaryWithBigExperience());
 worker1.showSalaryWithBigExperience();