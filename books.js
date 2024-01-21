// Creating a function 
function renderBooks(filter){
  // Creating a const that will call the data from the books class
  const booksWrapper = document.querySelector(".books");
  // Calling the getbooks fake data and naming it under books varibale 
  const books = getBooks();
  
  
  if (filter === 'LOW_TO_HIGH' ){
    const filteredBooks = books.sort((a, b) => ( a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice));
  }
  else if (filter === 'HIGH_TO_LOW' ){
  const filteredBooks = books.sort((a, b) => (b.salePrice || b.originalPrice) - ( a.salePrice || a.originalPrice));
  }
  else if (filter === 'RATING'){
    const filteredBooks = books.sort((a, b) => (b.rating) - (a.rating));
  }



  // Creating a array that will call the book data and is called under a new const called bookshtml 
 const booksHtml = books.map( book => {
    return `<div class="book">
            <figure class="book__img--wrapper">
              <img class="book__img" src="${book.url}" alt="">
            </figure>
            <div class="book__title">
              ${book.title}
            </div>
            <div class="book__ratings">
              ${ratingsHTML(book.rating)}
            </div>
            <div class="book__price">
              ${priceHTML(book.originalPrice, book.salePrice)}
            </div>
          </div>`
    
  })
  // Array.Join with the empty string removes the commas which come automatically with the array. 
  .join("");

  // The innerHTML of Books will be transfered to bookshtml which will have the book div information 
  booksWrapper.innerHTML = booksHtml;
  
}

// function to get price for book for both on sale and nonsale products. 
function priceHTML(originalPrice , salePrice ){
  if (!salePrice){
    return `${originalPrice.toFixed(2)}`
  }
  else {
    return `<span class="book__price--normal">${originalPrice.toFixed(2)}</span> ${salePrice.toFixed(2)} </span>` 
  }
}

// Create a function filter books which will take an event. 
// It will target the event target value from the renderBooks. 
function filterBooks(event) {
    renderBooks(event.target.value)
}

// Create a function called ratingsHTML which will take in the rating value from the variable
function ratingsHTML(rating){
  // Create a variable with an empty string
  let ratingHTML = '';

  // Loop through all the ratings 
  for (let i =0; i < Math.floor(rating); i++){
    // If the rating in decimal, the number will round down due to the math.floor function 
    ratingHTML += '<i class="fas fa-star"></i>\n'
  }
  // If the number is not in integer, return half star
  if (!Number.isInteger(rating)){
    ratingHTML += '<i class="fas fa-star-half-alt"></i>\n'
  }
  // Return the variable 
  return ratingHTML;
}

// Set timeout is used so that the value is called at the end of the cycle. 
setTimeout(() => {
  renderBooks();
});



// FAKE DATA
function getBooks() {
  return [
    {
      id: 1,
      title: "Crack the Coding Interview",
      url: "assets/crack the coding interview.png",
      originalPrice: 49.95,
      salePrice: 10.95,
      rating: 4.5,
    },
    {
      id: 2,
      title: "Atomic Habits",
      url: "assets/atomic habits.jpg",
      originalPrice: 39,
      salePrice: null,
      rating: 5,
    },
    {
      id: 3,
      title: "Deep Work",
      url: "assets/deep work.jpeg",
      originalPrice: 29,
      salePrice: 12,
      rating: 5,
    },
    {
      id: 4,
      title: "The 10X Rule",
      url: "assets/book-1.jpeg",
      originalPrice: 44,
      salePrice: 19,
      rating: 4.5,
    },
    {
      id: 5,
      title: "Be Obsessed Or Be Average",
      url: "assets/book-2.jpeg",
      originalPrice: 32,
      salePrice: 17,
      rating: 4,
    },
    {
      id: 6,
      title: "Rich Dad Poor Dad",
      url: "assets/book-3.jpeg",
      originalPrice: 70,
      salePrice: 12.5,
      rating: 5,
    },
    {
      id: 7,
      title: "Cashflow Quadrant",
      url: "assets/book-4.jpeg",
      originalPrice: 11,
      salePrice: 10,
      rating: 4,
    },
    {
      id: 8,
      title: "48 Laws of Power",
      url: "assets/book-5.jpeg",
      originalPrice: 38,
      salePrice: 17.95,
      rating: 4.5,
    },
    {
      id: 9,
      title: "The 5 Second Rule",
      url: "assets/book-6.jpeg",
      originalPrice: 35,
      salePrice: null,
      rating: 4,
    },
    {
      id: 10,
      title: "Your Next Five Moves",
      url: "assets/book-7.jpg",
      originalPrice: 40,
      salePrice: null,
      rating: 4,
    },
    {
      id: 11,
      title: "Mastery",
      url: "assets/book-8.jpeg",
      originalPrice: 30,
      salePrice: null,
      rating: 4.5,
    },
  ];
}
