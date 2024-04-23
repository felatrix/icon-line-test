import { books } from "@/constants/book";
import { authors } from "@/constants/author";
import { Author } from "@/constants/data";
function findAuthorsByBookIds(bookIds: string): Author[] {
    const matchingAuthors: Author[] = [];
    const bookIdsArr: number[] = bookIds.split(",").map(value => parseInt(value.trim(), 10)); // Parse each ID from the string

    // Iterate through each book ID
    bookIdsArr.forEach(bookId => {
        // Find the book with the current ID
        const book = books.find(book => book.id === bookId);

        if (book) {
            // Split the author IDs of the book
            const authorIds: string[] = book.authors_ids.split(',');

            // Find authors matching the author IDs
            authorIds.forEach(authorId => {
                const author = authors.find(author => author.id.toString() === authorId.trim());
                if (author) {
                    // Concatenate the author's full name
                    matchingAuthors.push(author);
                }
            });
        }
    });

    return matchingAuthors;
}

export { findAuthorsByBookIds }