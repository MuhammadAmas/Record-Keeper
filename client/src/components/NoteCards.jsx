import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useFetchData from '../utils/useFetchData';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './NoteCards.css'

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
                        <Typography sx={{ fontSize: 18, fontWeight: 600 }} gutterBottom>
                            {note.title}
                        </Typography>
                        <Typography variant="body2">
                            {note.contents}
                        </Typography>
                    </CardContent>
                </Card>
            })}
        </div >
    </>;
}