import { useState } from 'react';
import { TextField, Button } from '@mui/material';

export default function AddCatForm({ onAddCat }){
    const [name, setName] = useState('');
    const [latinName, setLatinName] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !latinName || !image) {
            alert('Please fill in all fields.');
            return;
        }

        const newCat = {
            name: name,
            latinName: latinName,
            image: image,
        };

        onAddCat(newCat);
        setName('');
        setLatinName('');
        setImage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a New Big Cat</h2>
            <TextField id="standard-basic" label="Name:" variant="standard" value={name} 
            onChange={(e) => setName(e.target.value)}/>
            <br />
            <TextField id="standard-basic" label="Latin Name:" variant="standard" value={latinName} 
            onChange={(e) => setLatinName(e.target.value)}/>
            <br />
            <TextField id="standard-basic" label="Image URL:" variant="standard" value={image} 
            onChange={(e) => setImage(e.target.value)}/>
            <br />
            <br />
            <Button variant="outlined" >Add Cat</Button>
        </form>
    );
}
