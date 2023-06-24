import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useFetchData from '../utils/useFetchData';
import { useTheme } from '@mui/material/styles';
import './NoteCards.css'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function NoteCards() {
    const theme = useTheme();
    const [notes, setNotes] = useState();

    const record = async () => {
        await useFetchData('GET', "http://localhost:3000/notes").
            then((note) => {
                setNotes(note);
            });
    }

    useEffect(() => {
        record();
    }, [])
    console.log("record", notes)

    const handleDelete = async (id) => {
        console.log('deleteing', id)
        await useFetchData('DELETE', "http://localhost:3000/notes/" + id).
            then(() => {
                record();
            });
    }

    return <>
        <div className='records-container' style={{
            display: 'flex',
            flexWrap: 'wrap',
            margin: '0 3em',
            gap: '24px',
            justifyContent: 'center',
        }}>
            {notes !== undefined && notes.map((note) => {
                return <Card className='recordCard' sx={{
                    width: '100%',
                    [theme.breakpoints.up('md')]: {
                        width: '35%',
                    },
                }
                }
                    key={note.id}
                >
                    <CardContent>
                        <div
                            style={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }} >
                            <Typography sx={{ fontSize: 18, fontWeight: 600 }} gutterBottom>
                                {note.title}
                            </Typography>
                            <IconButton aria-label="delete"
                                onClick={() => handleDelete(note.id)}
                                sx={{
                                }}>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                        <Typography variant="body1">
                            {note.contents}
                        </Typography>
                        <Typography variant="body2" color='grey' textAlign='center' marginTop='12px'>
                            {note.created}
                        </Typography>
                    </CardContent>
                </Card>
            })}
        </div >
    </>;
}


