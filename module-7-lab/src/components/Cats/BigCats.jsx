import { useState } from 'react';
import SingleCat from './SingleCat';
import cats from './cats.json';
import AddCatForm from './AddCatForm';
import { Box, Button, Grid, ButtonGroup} from '@mui/material';

export default function BigCats() {
    const [list, setList] = useState(cats);
    const [filtered, setFiltered] = useState();
    const [reversed, setReversed] = useState(false);
    const [alphabetised, setAlphabetised] = useState(false);
    const [prevList, setPrevList] = useState();

    const handleReverseClick = () => {
        if (!reversed) {
            setPrevList(list);
            setList(prevList => [...prevList].reverse());
            setReversed(true);
        } else {
            setList(prevList);
            setReversed(false);
        }
    };

    const handleAlphabetiseClick = () => {
        if (!alphabetised) {
            setPrevList(list);
            setList(prevList => [...prevList].sort((a, b) => a.name.localeCompare(b.name)))
            setAlphabetised(true);
        } else {
            setList(prevList);
            setAlphabetised(false);
        }
    };

    const handleFilterClick = () => {
        setFiltered(prevFiltered => !prevFiltered);
    };

    const displayList = filtered
        ? list.filter(cat => cat.latinName.includes("Panthera"))
        : list;

    const handleAddCat = (newCat) => {
        setList(prevList => [...prevList, newCat]);
    };

    const handleResetClick = () => {
        setList(cats);
        setFiltered();
    };

    const handleDeleteCat = (index) => {
        setList(prevList => prevList.filter((_, i) => i !== index));
    };

    return (
        <div className="big-cats">
            <h2>Big Cats List</h2>
            <ButtonGroup variant="outlined">
            <Button onClick={handleReverseClick}>
                {reversed ? 'Reset' : 'Reverse List'}</Button>
            <Button onClick={handleAlphabetiseClick}>
                {alphabetised ? 'Reset' : 'Alphabetise List'}</Button>
            <Button onClick={handleFilterClick}>
                {filtered ? 'Reset Filter' : 'Panthera Filter'}</Button>
            <Button onClick={handleResetClick}>Original List</Button>
            </ButtonGroup>
            <Grid container spacing={3} margin={10}>
                {displayList.map((cat, index) => (
                   <Box key={index} width={250} sx={{ margin: 3, border: '2px solid black', borderRadius: 10, }}>
                        <SingleCat
                            name={cat.name}
                            latinName={cat.latinName}
                            image={cat.image}
                        />
                        <Button onClick={() => handleDeleteCat(index)} variant="outlined">Delete</Button>
                        </Box>
                ))}
                </Grid>
            <div className='addCatForm'>
                <AddCatForm onAddCat={handleAddCat} />
            </div>
        </div>
    );
}