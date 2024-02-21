

let i = 0;



const submit = document.querySelector(".submit");
submit.addEventListener ('click', addBookToLibrary);


const myLibrary = [];

class Book {

    constructor(title, author, pages, read, catalogNumber) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.number = catalogNumber;

    }
}




class PriorityBook extends Book {
    constructor(title, author, pages, read, catalogNumber, priority) {
        super(title, author, pages, read, catalogNumber, location);
        this.priority = priority;
    }
}




function addBookToLibrary() {

    let titleInput = document.getElementById("title-input");
    let authorInput = document.getElementById("author-input");
    let pagesInput = document.getElementById("pages-input");
    let readInput = document.getElementById("read-input");
    let priorityInput = document.getElementById("priority-input"); 

   console.log("submit clicked");

    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = readInput.checked;
    let catalogNumber = i;
    let priority = priorityInput;
    let book;

    if (priorityInput) {
        console.log(`PREPARING FOR ${title} by ${author} with ${pages} (catalog number: ${catalogNumber}) added to library `)
        book = new PriorityBook(title, author, pages, read, catalogNumber, priority);
        myLibrary.push(book);
        createCard(book);
        console.log(`SUCCESS! ${title}by ${author} with ${pages} added to library `)
        console.log(myLibrary);
        i++;
        
    } else {

        


    console.log(`PREPARING FOR ${title} by ${author} with ${pages} (catalog number: ${catalogNumber}) added to library `)
    book = new Book(title, author, pages, read, catalogNumber);
    myLibrary.push(book);
    createCard(book);
    console.log(`SUCCESS! ${title}by ${author} with ${pages} added to library `)
    console.log(myLibrary);
    i++;
    }
}


// My first Attempt correct but not modern
// let j = 0;
// while (j < myLibrary.length) {
//    createCard(myLibrary[j]);
//    j++;
// }


// modern use
myLibrary.forEach(book => createCard(book));


function createCard (book) {
    
    

    let displayContainer = document.querySelector(".display-container");
    let card = document.createElement('div');

    displayContainer.appendChild(card);
    
    card.classList.add("card");
    console.log("created card")

    let displayTitle = document.createElement('div')
    card.appendChild(displayTitle)
    displayTitle.classList.add("title");
    displayTitle.textContent = book.title;
  

    let displayAuthor = document.createElement('div')
    card.appendChild(displayAuthor)
    displayAuthor.classList.add("author");
    displayAuthor.textContent = book.author;
   


    let displayPages = document.createElement('div')
    card.appendChild(displayPages)
    displayPages.classList.add("pages");
    displayPages.textContent = book.pages;



    let displayRead = document.createElement('button')
    card.appendChild(displayRead)
    displayRead.setAttribute('id', `${book.number}`);
    displayRead.classList.add("read-status");

    if (book.read === true) { 
        displayRead.textContent = "Read";
        displayRead.classList.toggle("read");
        
    } else {
        displayRead.textContent = "Unread";
        displayRead.classList.toggle("unread");

    }
   
    displayRead.addEventListener('click', toggleRead);



       
};

function toggleRead (event) {
    let bookIndex = parseInt(event.target.id);
    let book = myLibrary[bookIndex];
   
    book.read = !book.read;
   
    if (book.read) {
        event.target.textContent = "Read";
        event.target.classList.remove('unread');
        event.target.classList.add('read');
    } else {
        event.target.textContent = "Unread";
        event.target.classList.remove('read');
        event.target.classList.add('unread');
    }


};


       
 

