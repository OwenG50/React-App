import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { v4 as uuidv4 } from 'uuid';
import './styles/WSAddBook.css'

function WsAddBookForm() {
    const [title, setTitle] = useState('');
    const [isbn, setISBN] = useState('');
    const [edition, setEdition] = useState('');
    const [author, setAuthor] = useState('');
    const [bookCondition, setConditionValue] = useState('SelectCondition');
    const [status, setStatus] = useState('SelectStatus')
    const [buttonShow, setButtonShow] = useState(true);
    const [bookUID, setBookUID] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    
    const handleISBNChange = (event) => {
        setISBN(event.target.value);
    };
    
    const handleEditionChange = (event) => {
        setEdition(event.target.value);
    };
    
    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    };
    
    const bookConditionSelected = (event) => {
        setConditionValue(event.target.value);
    }

    const bookStatusSelected = (event) => {
        setStatus(event.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the page from refreshing
        setButtonShow(false);

        const newBookUID = uuidv4();
        setBookUID(newBookUID);

        // Prepare the book data
        const bookData = {
            UUID: newBookUID,
            title: title,
            isbn: isbn,
            edition: edition,
            author: author,
            // Convert the human-readable condition to a scale of 1-5 as expected by the database
            book_condition: convertConditionToScale(bookCondition),
            status: convertStatusToScale(status)
        };

        fetch('https://yiumntz3gd.execute-api.us-east-1.amazonaws.com/initialstage/AddBookToDBResource', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData),
        })
            .then(response => response.json())
            .then(data => {
                alert('The Book you have entered is: ' + title + ' With UID: ' + newBookUID);
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        setSubmitted(true);
    };

    function convertConditionToScale(condition) {
        switch (condition) {
            case 'unusable': return 1;
            case 'veryPoor': return 2;
            case 'poor': return 3;
            case 'alright': return 4;
            case 'good': return 5;
            case 'veryGood': return 5;
            default: return 0; // Handle unexpected conditions
        }
    }

    function convertStatusToScale(status){
        switch (status){
            case 'checkedIn': return 0;
            case 'checkedOut': return 1;
            case 'dueSoon': return 2;
            case 'overDue': return 3;
            default: return 4; // Handle unexpected conditions
        }
    }




    function clearForm() {
        setTitle('');
        setISBN('');
        setEdition('');
        setAuthor('');
        setConditionValue('SelectCondition');
        setButtonShow(true);
        setBookUID('');
        setSubmitted(false);
    }

    return (
        <div className="WSForm">
            <form onSubmit={handleSubmit}>
                <label>
                    ISBN: <br/>
                    <input type="text" name="isbn" value={isbn} onChange={handleISBNChange} />
                </label>
                
                <label>
                    Title: <br/>
                    <input type="text" name="title" value={title} onChange={handleTitleChange} />
                </label>
                
                <label>
                    Edition (e.g "First Edition"):<br/>
                    <input type="text" name="edition" value={edition} onChange={handleEditionChange}/>
                </label>
                
                <label>
                    Author: <br/>
                    <input type="text" name="author" value={author} onChange={handleAuthorChange}/>
                </label>
                
                <label>
                    Condition: <br/>
                    <select value={bookCondition} onChange={bookConditionSelected}>
                        <option value="SelectCondition">Select a Condition</option>
                        <option value="unusable">Unusable</option>
                        <option value="veryPoor">Very Poor</option>
                        <option value="poor">Poor</option>
                        <option value="alright">Alright</option>
                        <option value="good">Good</option>
                        <option value="veryGood">Very Good/ New</option>
                    </select>
                </label>

                <label>
                    Status: <br/>
                    <select value={status} onChange={bookStatusSelected}>
                        <option value="SelectStatus">Select a Status</option>
                        <option value="checkedIn">Checked In</option>
                        <option value="checkedOut">Checked Out</option>
                        <option value="dueSoon">Due Soon</option>
                        <option value="overDue">Over Due</option>
                    </select>
                </label>

                <br/>
                {buttonShow && <input className="button" type="submit" value="Add to Library" />}
            </form>
            {submitted && <QRCode value={bookUID} />}
            <button className="button" onClick={clearForm}>Refresh</button>
        </div>
    );
}

export default WsAddBookForm;