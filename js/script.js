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
`showPage` function creates elements to show 9 students
*/
function showPage(list, page) {
  let firstStudent = (page * 9) - 9;
  let lastStudent = (page * 9) - 1;
  let studentList = document.getElementsByClassName("student-list");
  // check if studentList is empty if not, run the rest of the code

  studentList.innerHTML = " ";
  console.log(list);
// check if studentList is empty if not, run the rest of the code
if (studentList.innerHTML ==! " ") {
  console.log("Not empty!!!");

}


  for (i = 0; i < list.length; i++) {
    if (i >= firstStudent && i <= lastStudent) {
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

      studentItem.insertAdjacentHTML('beforeend', studentList.innerHTML);
    }
  }
}

/*
`addPagination` function
Create and insert the pagination buttons and text
*/

function addPagination(list) {
  let numberPages = Math.ceil(list.length / 9);
  //console.log(numberPages);
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

  // give the first pagination button a class of "active"
  let button = document.querySelectorAll("BUTTON");
  let activeButton = document.querySelector("BUTTON");
  activeButton.className = "active";

  linkList[0].addEventListener("click", e=> {
    //console.log(e.target);
    for (let i = 0;i <= button.length; i++){
      if (e.target === button[i]){
        //remove current student items - li - from page goes here, or does it?
        document.getElementsByClassName("student-list").innerHTML = " ";
        // end remove current student items
        activeButton.classList.remove("active");
        activeButton = button[i];
        activeButton.className = "active";
        
        let list = document.getElementsByClassName("student-list"); // parent element (ul)
        let listItems = list.getElementsByTagName("li");
        for (let i = 0; ii <= button.length; i++) {
          button[i].addEventListener("click", function () {
            list.removeChild(this.parentNode);
          });
        }
      }

      // done: call the showPage function passing the `list` parameter and page to display as arguments - problem: appends on appends
      console.log(i);
      showPage(data, i+1); 
    }
  });

};



// Call functions
showPage(data, 1);
addPagination(data);