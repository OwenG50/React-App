import React, { useState, useEffect } from 'react';
import '../Student Athlete/styles/SaBook.css'

function BookListings() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('https://k6vyuz09m9.execute-api.us-east-1.amazonaws.com/initialstage/BookData', {
                    method: 'POST',
                });

                if (response.ok) {
                    const data = await response.json(); // Parses the response data as JSON

                    // Since the actual books data is a stringified array within the `body` property, parse it to get the array
                    if (data.body) {
                        let booksArray = JSON.parse(data.body);

                        // First pass: Update the status from integer to "Yes" or "No"
                        booksArray = booksArray.map(book => ({
                            ...book,
                            status: book.status === 0 ? 'Yes' : 'No'
                        }));

                        // Calculate available copies for each book based on ISBN
                        const copiesAvailableMap = booksArray.reduce((acc, book) => {
                            acc[book.isbn] = acc[book.isbn] || 0;
                            if (book.status === 'Yes') { // Note the change here to match the updated status
                                acc[book.isbn]++;
                            }
                            return acc;
                        }, {});

                        // Second pass: Append the copies_available data to each book object
                        booksArray = booksArray.map(book => ({
                            ...book,
                            copies_available: copiesAvailableMap[book.isbn]
                        }));

                        setBooks(booksArray); // Now you have the array of book objects
                    } else {
                        console.error('Invalid data structure:', data);
                        // Optionally set an error state or handle this case as needed
                    }
                } else {
                    console.error('Failed to fetch books: Server responded with an error');
                }
            } catch (error) {
                console.error('Failed to fetch books:', error);
            }
        };

        fetchBooks();
    }, []);


    return (
        <div className='scroll'>
            {books.map((book, index) => (
                <div key={index} className="book-listing">
                    <div>
                        {/* Replace the dynamic src with a fixed URL pointing to your stock image */}
                        <img src="https://thumbs.dreamstime.com/b/red-leather-cover-golden-book-36419192.jpg" alt="Book Cover" className="book-cover"/>
                        <p>Copies Available: {book.copies_available}{/*TODO add checker to get copies available*/} </p>
                    </div>
                    <div className="book-info">
                        <h2>Title: {book.title}</h2>
                        <p>Author(s): {book.authors}</p>
                        <p>Edition: {book.edition}</p>
                    </div>
                    <div className="book-condition">
                        <div className="condition-text">
                            <span>Condition:</span>
                        </div>
                        <div className="stars">{'★'.repeat(book.book_condition) + '☆'.repeat(5 - book.book_condition)}</div>
                        <p>Currently Available: {book.status}</p>
                    </div>
                    <div>
                        <button className='Reserve'>Reserve Now</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BookListings;
