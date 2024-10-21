const form = document.getElementById("employeeForm");
const nam =  document.getElementById("name");
const age = document.getElementById("age");
const salary = document.getElementById("salary");
const nameError = document.getElementById("nameError");
const ageError = document.getElementById("ageError");
const salaryError = document.getElementById("salaryError");

form.addEventListener("submit", (event)=>{
 nameError.textContent ="";
 ageError.textContent = "";
 salaryError.textContent = "";
  if(nam.validity.valid){
    if(!nam.validity.valueMissing){
        nameError.textContent = "Enter a valid employee name!";
    }
    else if(!(nam.value.length>=3 && nam.value.length <=30) ){
        nameError.textContent = "Name must be between 3 and 30 characters.";
    }
    }
     if(!(age.value>=19 && age.value<=59)){
        ageError.textContent = "Age must be between 19 and 59.";
    }

    if(!(salary.value >=10000 && salary.value <= 50000)){
        salaryError.textContent = "Salary must be between 10,000 and 50,000.";
    }
    
   event.preventDefault();
});