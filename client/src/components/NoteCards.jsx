import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useFetchData from '../utils/useFetchData';

export default function NoteCards() {

    const [title, setTitle] = useState('Note Title');
    const [note, setNote] = useState();

    const record = async () => {
        const notes = await useFetchData('GET', "http://localhost:3000/notes");
        setNote(record());
        return notes;
    }
    
    // useEffect(() => {
    //     record();
    //     console.log("record", note)
    // }, [])




    // const records = note.then((notes) => {
    //     console.log("notes",notes);
    //     return notes;
    // });
    // console.log("record",records)


    return <>
        <Card sx={{
            // minWidth: 275,
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '3em auto',
            // width: '60ch'
        }}>
            <CardContent>
                <Typography sx={{ fontSize: 18, fontWeight: 600 }} gutterBottom>
                    {/* {note.title} */}
                </Typography>
                <Typography variant="body2">
                    {/* {note.contents} */}
                </Typography>
            </CardContent>
        </Card>
    </>;
}