//1- constructor function of Person
function Person(id,name,email) {
    this.id = id,
    this.name = name,
    this.email = email,
    this.sayHello = function () {
        console.log("hello");
    };
}
Person.prototype.incrementCount = function () {
    return ++this.count;
}
//2-constructor function of Student
function Student(id,name,email,age,degree) {
    Person.call(this,id, name, email, age);
    this.age = age;
    this.degree = [];
}
Student.prototype.count = 0;

//3-constructor function of parent
function Parent(id,name,email,number) {
    Person.call(this, id, name, email, number);
    this.number = number;
}
Parent.prototype.count = 0;

var stuArray = [];
var addStudent = document.getElementById("add-student");
addStudent.onclick = addNewStudent;

function addNewStudent(e) {
    e.preventDefault();
    var inputName = document.getElementById("inp-name").value;
    var inputAge = document.getElementById("inp-age").value;
    var inputEmail = document.getElementById("inp-email").value;
    if (inputName == "" && inputAge == "" && inputEmail == "") {
        alert("Sorry,You should fill all the fields with the data");
    }
    else {
        var id = Person.prototype.incrementCount.call(Student.prototype);
        var student = new Student(id, inputName, inputEmail, inputAge);
        stuArray.push(student);
        createStudentList(student);
        getStudentID(stuArray);
    }
}

function createStudentList(student) {
    var list = document.getElementById("student");
    var studentItem = document.createElement("li");
    studentItem.innerHTML = student.name + "<br>" + student.email + "<br>" + student.age;
    list.appendChild(studentItem);
}

var parArray = [];
var addParent = document.getElementById("add-parent");
addParent.onclick = addNewParent;

function addNewParent(e) {
    e.preventDefault();
    var pName = document.getElementById("inp-pname").value;
    var pNumber = document.getElementById("inp-number").value;
    var pEmail = document.getElementById("inp-pemail").value;
    if (pName == "" && pNumber == "" && pEmail == "") {
        alert("Sorry,You should fill all the fields with the data");
    }
    else {
        var idP = Person.prototype.incrementCount.call(Parent.prototype);
        var parent = new Parent(idP,pName, pEmail, pNumber);
        createParentList(parent);
    }
}
function createParentList(parent) {
    parArray.push(parent);
    var pList = document.getElementById("parent");
    var parentItem = document.createElement("li");
    parentItem.innerHTML = parent.name + "<br>" + parent.email + "<br>" + parent.number;
    pList.appendChild(parentItem);
}
// Bonus
var selectId = document.getElementById("student-id");
function getStudentID(stuArray) {
    for (var i = 0; i < stuArray.length; i++) {
        var optionId = document.createElement("option");
        optionId.innerHTML = stuArray[i].id;
    }
    selectId.appendChild(optionId);
}
