import React, { useState, useEffect } from 'react';
import '../Student Athlete/styles/SaBook.css';
import BookModal from '../Student Athlete/BookModal';


// Creates Book listings for each book in the Book Database
function BookListings() {
    const [books, setBooks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch('https://k6vyuz09m9.execute-api.us-east-1.amazonaws.com/initialstage/BookData', { method: 'POST' });
            if (response.ok) {
                const data = await response.json();
                let booksArray = JSON.parse(data.body);
                const copiesAvailableMap = booksArray.reduce((acc, book) => {
                    acc[book.isbn] = acc[book.isbn] || 0;
                    if (book.status === 0) { acc[book.isbn]++; }
                    return acc;
                }, {});
                booksArray = booksArray.map(book => ({
                    ...book,
                    status: book.status === 0 ? 'Yes' : 'No',
                    copies_available: copiesAvailableMap[book.isbn]
                }));
                setBooks(booksArray);
            } else {
                console.error('Failed to fetch books');
            }
        };

        fetchBooks();
    }, []);

    function ReserveBook(book) {
        setSelectedBook(book);
        setIsModalOpen(true);
    }

    return (
        <div className='scroll'>
            {books.map((book, index) => (
                <div key={index} className="book-listing">
                    <div>
                        <img src="https://thumbs.dreamstime.com/b/red-leather-cover-golden-book-36419192.jpg" alt="Book Cover" className="book-cover"/>
                        <p>Copies Available: {book.copies_available}</p>
                    </div>
                    <div className="book-info">
                        <h2 className='BookTitle'>Title: {book.title}</h2>
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
                        <button onClick={() => ReserveBook(book)} disabled={book.status !== 'Yes'} className='Reserve'>Reserve Now</button>
                    </div>
                </div>
            ))}
            <BookModal
                isOpen={isModalOpen}
                book={selectedBook}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}

export default BookListings;
