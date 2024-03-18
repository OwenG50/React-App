import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { v4 as uuidv4 } from 'uuid';
import '../Work Study/styles/WSHome.css'

function WsAddBookForm() {
    const [title, setTitle] = useState('');
    const [isbn, setISBN] = useState('');
    const [edition, setEdition] = useState('');
    const [author, setAuthor] = useState('');
    const [bookCondition, setConditionValue] = useState('SelectCondition');
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

    const handleSubmit = (event) => {
        event.preventDefault(); //prevents the page from refreshing 
        setButtonShow(false);
        const newBookUID = uuidv4();
        setBookUID(newBookUID);
        alert('The Book you have entered is: ' + title + 'With UID: ' + newBookUID);
        setSubmitted(true);
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
                <br/>
                {buttonShow && <input className="button" type="submit" value="Add to Library" />}
            </form>
            {submitted && <QRCode value={bookUID} />}
            <button className="button" onClick={clearForm}>Refresh</button>
        </div>
    );
}

export default WsAddBookForm;