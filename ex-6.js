let favoriteBooks = [];

function addFavoriteBook(bookName) {
  
  if (bookName.includes("Beauty")) {
    favoriteBooks.push(bookName);
    console.log(`"${bookName}": collect`);
  } else {
    console.log(`"${bookName}: not collect`);
  }
}


// Example case
addFavoriteBook("Let Me Tell You What I Mean");
addFavoriteBook("Life Among the Terranauts");
addFavoriteBook("The Beauty of Living Twice");
addFavoriteBook("Black Beauty");
addFavoriteBook("Monstrous Beauty");

console.log(favoriteBooks);
