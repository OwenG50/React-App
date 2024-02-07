import React, {useState} from 'react';


function PullDataTest(){
    const [responseText, setResponseText] = useState('');

    const handleButtonClick = async () => {
        try {
            const response = await fetch('https://u5zs3f9b78.execute-api.us-east-1.amazonaws.com/initialstage/PittLibraryManagerResource', {
                method: 'POST',
            });


            if (response.ok) {
                const data = await response.text();
                setResponseText(data);
            } else {
                setResponseText('Error: Unable to fetch data');
            }
        } catch (error) {
            console.error(error);
            setResponseText('Error: An unexpected error occurred');
        }
    };

    return(
        <>
            <h1>React MySQL Query</h1>
            <button onClick={handleButtonClick}>Execute Query</button>
            <label>Result:</label>
            <div>{responseText}</div>
        </>
    );
}

export default PullDataTest;