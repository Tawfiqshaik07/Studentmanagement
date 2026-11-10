let students = []; 
 
function addStudent() { 
  let name = document.getElementById("student").value.trim(); 
  if (name == "") { 
    alert("Enter student name"); 
    return; 
  } 
  students.push(name); 
  document.getElementById("list").innerHTML += "<li>" + name + "</li>"; 
  document.getElementById("student").value = ""; 
} 
 
function searchStudent() { 
  let name = document.getElementById("search").value.trim(); 
  let found = students.includes(name); 
  document.getElementById("msg").innerHTML = 
    found ? "Student Found" : "Student Not Found"; 
}