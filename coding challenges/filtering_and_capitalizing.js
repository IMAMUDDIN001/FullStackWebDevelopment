// Define the input list of books
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "The Road", author: "Cormac McCarthy", year: 2006 },
    { title: "A Brief History of Time", author: "Stephen Hawking", year: 1988 },
    { title: "The Goldfinch", author: "Donna Tartt", year: 2013 },
    { title: "Educated", author: "Tara Westover", year: 2018 }
];

// Function to capitalize author names
function capitalizeAuthorName(name) {
    return name.split(' ')
               .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
               .join(' ');
}

// Filter books published after 2010 and capitalize author names
const filteredBooks = books
    .filter(book => book.year > 2010) // Filter books published after 2010
    .map(book => ({
        title: book.title,
        author: capitalizeAuthorName(book.author), // Capitalize author names
        year: book.year
    }));

// Print the result
console.log("Books published after 2010 with capitalized author names:");
console.log(filteredBooks);
