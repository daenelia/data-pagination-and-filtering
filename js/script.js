/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

const studentsPerPage = 9;

/*
`showPage` function creates elements to show 9 students
*/
function showPage(list, page) {
<<<<<<< HEAD
  let firstStudent = (page * studentsPerPage) - studentsPerPage;
  let lastStudent = (page * studentsPerPage) - 1;
  let studentList = document.getElementsByClassName("student-list");
  // clears the page so the new list can be generated and shown
  studentList[0].innerHTML = '';
 
=======
  let firstStudent = (page * 9) - 9;
  let lastStudent = (page * 9) - 1;
  const studentList = document.getElementsByClassName("student-list");
  // clears the page so the new list can be generated and shown
  studentList[0].innerHTML = '';
    
>>>>>>> aba6baa62bf9ca2ddc067ed967637ad63a5e4b66
  for (i = 0; i < list.length; i++) {
    if (i >= firstStudent && i <= lastStudent) {
      let studentItem = document.createElement("LI");
      studentItem.className = "student-item cf";
      studentList[0].appendChild(studentItem);
      
      studentItem.innerHTML = `<div class="student-details">
      <img class="avatar" src="${list[i].picture.large} " alt="Profile Picture">
      <h3>${list[i].name.first} ${list[i].name.last}</h3>
      <span class="email">${list[i].email}</span>
      </div>
      <div class="joined-details">
      <span class="date">Joined ${list[i].registered.date}</span>
      </div>`;

      studentItem.insertAdjacentHTML('beforeend', '');
    }
  }
}

/*
`addPagination` function
Create and insert the pagination buttons and text
*/

function addPagination(list) {
<<<<<<< HEAD
  let numberPages = Math.ceil(list.length / studentsPerPage);
=======
  let numberPages = Math.ceil(list.length / 9);
>>>>>>> aba6baa62bf9ca2ddc067ed967637ad63a5e4b66
  let linkList = document.getElementsByClassName("link-list");
  linkList.innerHTML = "";

  for (i = 1; i <= numberPages; i++) {
    const li = document.createElement("li");
    const buttonNum = document.createElement("BUTTON");
    buttonNum.type = "button";
    buttonNum.innerHTML = `${[i]}`;
 
    li.appendChild(buttonNum);
    document.querySelector(".link-list").appendChild(li);

    buttonNum.insertAdjacentHTML('beforeend', linkList.innerHTML);
  }
<<<<<<< HEAD
 // set the first button to active
=======

  // set the first button to active
>>>>>>> aba6baa62bf9ca2ddc067ed967637ad63a5e4b66
  let button = document.querySelectorAll("BUTTON");
  let activeButton = document.querySelector("BUTTON");
  activeButton.className = "active";

  linkList[0].addEventListener("click", e=> {
<<<<<<< HEAD

=======
>>>>>>> aba6baa62bf9ca2ddc067ed967637ad63a5e4b66
    for (let i = 0;i <= button.length; i++){
      if (e.target === button[i]){

        activeButton.classList.remove("active");
        activeButton = button[i];
        activeButton.className = "active";
<<<<<<< HEAD

        showPage(data, i+1); 
=======
       
        showPage(data, i+1);
>>>>>>> aba6baa62bf9ca2ddc067ed967637ad63a5e4b66
      }
    }
  });
};

// Call functions
showPage(data, 1);
addPagination(data);