/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
  // create two variables which will represent the index for the first and last student on the page
  let firstStudent = (page * 9) - 9;
  let lastStudent = (page * 9) - 1;
  console.log(lastStudent);
  console.log(firstStudent);
  // select the element with a class of `student-list` and assign it to a variable
  let studentList = document.getElementsByClassName("student-list");

  // set the innerHTML property of the variable you just created to an empty string
  studentList.innerHTML = " ";
  // loop over the length of the `list` parameter
  for (i = 0; i < list.length; i++) {
    // inside the loop create a conditional to display the proper students
    if (i >= firstStudent && i <= lastStudent) {
      // inside the conditional:
      // create the elements needed to display the student information
      let studentItem = document.createElement("LI");
      studentItem.innerHTML = `<li class="student-item cf">
        <div class="student-details">
        <img class="avatar" src="${list[i].picture.large} " alt="Profile Picture">
        <h3>${list[i].name.first} ${list[i].name.last}</h3>
        <span class="email">${list[i].email}</span>
        </div>
        <div class="joined-details">
        <span class="date">Joined ${list[i].registered.date}</span>
        </div>
        </li>`  ;
        document.querySelector(".student-list").appendChild(studentItem);

      // insert the above elements
      studentItem.insertAdjacentHTML('beforeend', studentList.innerHTML);
    }
  }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
  //console.log(list);
  // create a variable to calculate the number of pages needed
  let numberPages = Math.ceil(list.length / 9);
  //console.log(numberPages);
  // select the element with a class of `link-list` and assign it to a variable
  let linkList = document.getElementsByClassName("link-list");
  // set the innerHTML property of the variable you just created to an empty string
  linkList.innerHTML = "";
  console.log(linkList);
  // loop over the number of pages needed
  for (i = 1; i <= numberPages; i++) {
    // create the elements needed to display the pagination button
    console.log(i);
    const li = document.createElement("li");
    const buttonNum = document.createElement("BUTTON");
    buttonNum.type = "button";
    buttonNum.innerHTML = `${[i]}`;
    li.appendChild(buttonNum);
    document.querySelector(".link-list").appendChild(li);
    // insert the above elements
    buttonNum.insertAdjacentHTML('beforeend', linkList.innerHTML);
    console.log(buttonNum);
  }
  // give the first pagination button a class of "active"
  let activeButton = document.querySelector("BUTTON");
  activeButton.className = "active";
  //console.log(activeButton);
  //console.log(linkList);

  // create an event listener on the `link-list` element
 
    // if the click target is a button:
      

      // remove the "active" class from the previous button

      // add the active class to the clicked button

      // call the showPage function passing the `list` parameter and page to display as arguments
      //showPage(data, list);  


};


// Call functions
showPage(data, 1);
addPagination(data);