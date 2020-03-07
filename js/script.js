/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const listItems = document.getElementsByClassName('student-item cf');
const itemsPerPage = 10;




/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
function showPage (list, page) {
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;
   for(let i = 0; i < list.length; i++) {
      let li = list[i];
      if(i >= startIndex && i < endIndex){
         
         li.style.display = '';

      } else {
         li.style.display = 'none';
      }

   }

}

showPage(listItems, 1);


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks (list) {
   let mainDiv = document.querySelector('.page');
   let linkDiv = document.createElement('div');
   let ul = document.createElement('ul');
   linkDiv.className = 'pagination';
   let pageLimiter = list.length / itemsPerPage;

   for(let i = 0; i < pageLimiter; i++){
      let pageLink = document.createElement('li');
      let aTag = document.createElement('a');
      aTag.href = '#';
      aTag.textContent = i + 1;
     
      pageLink.appendChild(aTag);
      ul.appendChild(pageLink);
   }
   linkDiv.appendChild(ul);
   mainDiv.appendChild(linkDiv);

   linkDiv.addEventListener('click', (e) => {
      if(e.target.tagName === 'A'){
         pageNumber = parseInt(e.target.textContent); 
         showPage(listItems, pageNumber);
      }

   });

}

appendPageLinks(listItems);
// Links are being displayed. Next add a event listener to the links to display the new page with the link number and the 
// being passed as parameters

function createSearchBar (){
   let headerDiv = document.querySelector('.page-header');
   let searchDiv = document.createElement('div');
   let searchBar = document.createElement('input');
   let searchButton = document.createElement('button');

   searchDiv.className = 'student-search';
   searchBar.placeholder = 'Search for Students';
   searchButton.textContent = 'Search';

   headerDiv.appendChild(searchDiv);
   searchDiv.appendChild(searchBar);
   searchDiv.appendChild(searchButton);

   searchBar.addEventListener('keyup', () =>{
      performSearch(event.target.value);
     // console.log(event.target.value);

      //1. add functionality to the search bar
      //2. how to dynamically display?
      // create a new array with found items and pass to showpage()?
   })

   searchButton.addEventListener('click', () =>{
      performSearch(searchBar.value);
      // console.log(searchBar.value);
   })

   
}
function performSearch (searchInput) {
   let liArray = [];
   let names = document.querySelectorAll('h3');
   for(let i = 0; i < names.length; i++){
     
      // let name = names[i].textContent;
      //console.log(name);
      if(searchInput.length !== 0 && names[i].textContent.toLowerCase().includes(searchInput.toLowerCase())){
        //liArray.push(names[i].parentElement.parentElement);
        
   
   }
   
   showPage(liArray, 1);
   // for(let x = 0; x < name.length; x++){
   // name[x].display = 'none';
     
   //   if(input.textContent.length !== 0 && name[x].textContent.toLowerCase().includes(input.textContent.toLowerCase())){
   //     name[x].display = '';
   //      }
   
   // }
 }


createSearchBar();
// Remember to delete the comments that came with this file, and replace them with your own code comments.