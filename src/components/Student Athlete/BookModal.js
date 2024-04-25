import React from 'react';
import '../Student Athlete/styles/Modal.css'; // Make sure to create the appropriate CSS file

const BookModal = ({ isOpen, book, onClose }) => {
    // Get user ID and Email from sessionStorage
    const userID = sessionStorage.getItem('userID');
    const userEmail = sessionStorage.getItem('userEmail');

    // Function to handle book reservation
    const handleReserveBook = async () => {
        console.log(book.UUID);
        console.log(userID);

        if (!book.UUID || !userID) {
            console.error('UUID or UserID is not defined');
            return;
        } else {
            console.log('Both UserID and UUID are defined');
        }

        // Log the payload that will be sent
        const payload = JSON.stringify({
            UUID: book.UUID,
            userId: userID
        });
        console.log('Sending payload:', payload);

        const response = await fetch('https://abyahvmgj1.execute-api.us-east-1.amazonaws.com/ReserveBookStage/ReserveBook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ body: payload }) // Correctly format the body as a JSON string
        });

        console.log(response.status);
        if (response.status === 200) {
            alert("Reservation Successful", window.location.reload());
        } else if (response.status === 400) {
            alert("Book could not be reserved", window.location.reload());
        } else {
            alert("An unexpected error occurred and your book could not be reserved", window.location.reload());
        }

        onClose(); // Add functionality
    };

    if (!isOpen) {
        return null;
    }

    // Stop the event from closing the modal if the click occurred inside the modal content
    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={handleModalClick}>
                <div className="modal-header">
                    <button className="modal-close-button" onClick={onClose}>
                        &times;
                    </button>
                </div>
                
                

                <div className="modal-body">
                    <h2 className='modal-body-title'>{book.title}</h2>
                    <p><strong>Author(s):</strong> {book.authors}</p>
                    <p><strong>Edition:</strong> {book.edition}</p>
                    <p><strong>ISBN:</strong> {book.isbn}</p>
                    <p><strong>Copies Available:</strong> {book.copies_available}</p>
                    <p><strong>Currently Available:</strong> {book.status}</p>
                    <p><strong>UUID:</strong> {book.UUID}</p>
                    <br/>
                    <p>Logged in as: {userEmail}</p>
                    <br/>
                    <button onClick={handleReserveBook} className="reserve-button">Reserve Book</button>
                </div>
            </div>
        </div>
    );
};

export default BookModal;
