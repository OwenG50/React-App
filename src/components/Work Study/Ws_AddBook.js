import React, { useState } from 'react';
import { QrReader, useQrReader } from 'react-qr-reader';
import '../Work Study/styles/WSHome.css'

function WsAddBookForm() {
    const [title, setTitle] = useState('');
    const [isbn, setISBN] = useState('');
    const [edition, setEdition] = useState('');
    const [author, setAuthor] = useState('');
    const [bookCondition, setConditionValue] = useState('SelectCondition');
   
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
    
    const bookCondionSelected = (event) => {
        setConditionValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('The Book you have entered is: ' + title);
        //event.preventDefault(); //prevents the page from refreshing 
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    ISBN: <br/>
                    <input type="text" name="isbn" value={isbn} onChange={handleISBNChange} />
                </label>
                <br/><br/>
                <label>
                    Title: <br/>
                    <input type="text" name="title" value={title} onChange={handleTitleChange} />
                </label>
                <br/><br/>
                <label>
                    Edition (e.g "First Edition"):<br/>
                    <input type="text" name="edition" value={edition} onChange={handleEditionChange}/>
                </label>
                <br/><br/>
                <label>
                    Author: <br/>
                    <input type="text" name="author" value={author} onChange={handleAuthorChange}/>
                </label>
                <br/><br/>
                <label>
                    Condition: <br/>
                    <select value={bookCondition} onChange={bookCondionSelected}>
                        <option value="SelectCondition">Select a Condition</option>
                        <option value="unusable">Unusable</option>
                        <option value="veryPoor">Very Poor</option>
                        <option value="poor">Poor</option>
                        <option value="alright">Alright</option>
                        <option value="good">Good</option>
                        <option value="veryGood">Very Good/ New</option>
                    </select>
                </label>
                <br/><br/>
                <input className="button" type="submit" value="Add to Library" />
            </form>
        </div>
    );
}

export default WsAddBookForm;