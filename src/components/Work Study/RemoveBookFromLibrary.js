import React, { useState } from 'react';

function BookDeleteComponent() {
    const [UUID, setUUID] = useState('');

    const handleDelete = async () => {
        if (!UUID) {
            alert('Please enter a UUID');
            return;
        }

        try {
            const response = await fetch('https://psa6rboa6h.execute-api.us-east-1.amazonaws.com/initialStage/RemoveBookResource', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ UUID: UUID })
            });

            const data = await response.json();
            const responseBody = JSON.parse(data.body); // Parsing the JSON body within the response body

            if (response.status === 200 && responseBody.message.includes("successfully")) {
                alert('Book deleted successfully!');
                setUUID(''); // Clear the input field after successful deletion
            } else {
                alert('Error deleting book: ' + responseBody.message); // Use the actual message from the lambda
            }
            console.log(data);
        } catch (error) {
            alert('Error deleting book: ' + error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={UUID}
                onChange={(e) => setUUID(e.target.value)}
                placeholder="Enter book UUID"
            />
            <button onClick={handleDelete}>Delete Book</button>
        </div>
    );
}

export default BookDeleteComponent;
