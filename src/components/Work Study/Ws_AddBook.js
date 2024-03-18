import React, { useState } from 'react';
import { QrReader, useQrReader } from 'react-qr-reader';
import { v4 as uuidv4 } from 'uuid';
import '../Work Study/styles/WSHome.css'


function WsAddBookForm() {
    const [title, setTitle] = useState('');
    const [isbn, setISBN] = useState('');
    const [edition, setEdition] = useState('');
    const [author, setAuthor] = useState('');
    const [bookCondition, setConditionValue] = useState('SelectCondition');
    const [buttonShow, setButtonShow] = useState(true);
   
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
        setButtonShow(false);
        const bookUID = uuidv4();
        alert('The Book you have entered is: ' + title + 'With UID: ' + bookUID);
        // put everything in a json object
        //create a qr code from the json data 
        //display the qr code 
        //make a way to print it? 
        event.preventDefault(); //prevents the page from refreshing 
    }

    function clearForm() {
        //window.location.reload(false);
        setTitle('');
        setISBN('');
        setEdition('');
        setAuthor('');
        setConditionValue('SelectCondition');
        setButtonShow(true);
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
                <br/>
                {buttonShow && <input className="button" type="submit" value="Add to Library" />}
            </form>
            <button className="button" onClick={clearForm}>Refresh</button>
            </div>
            
    );
}

export default WsAddBookForm;