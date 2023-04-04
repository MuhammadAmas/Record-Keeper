import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function NoteCards() {
    const [title, setTitle] = useState('Note Title');
    const [note, setNote] = useState('Note Content');

    return (
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
                    {title}
                </Typography>
                <Typography variant="body2">
                    {note}
                </Typography>
            </CardContent>
        </Card>
    );
}