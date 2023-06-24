import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import usePushData from '../utils/usePushData';
import { useTheme } from '@mui/material/styles';

export default function Note() {
    const theme = useTheme();
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    function handleSubmit() {
        setTitle(document.getElementById('title').value);
        setContents(document.getElementById('contents').value);
        console.log({
            title: title,
            contents: contents
        })
        usePushData('POST', 'http://localhost:3000/notes/', {
            title: title,
            contents: contents
        })();
        console.log('submitted');


    }

    return <>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {
                    // m: "1.5 0",
                    // width: '60ch'
                },
                margin: '3em auto',

                width: '75%',
                [theme.breakpoints.up('md')]: {
                    width: '35%',
                },
            }}
            noValidate
            autoComplete="off"
        >
            <Stack spacing={2} direction="column">
                <TextField
                    id="title"
                    label="Title"
                    multiline
                    maxRows={4}
                    placeholder='Write your title here...'
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    id="contents"
                    label="Note"
                    multiline
                    rows={4}
                    defaultValue=""
                    placeholder='Write your Note here...'
                    onChange={(e) => setContents(e.target.value)}
                />

                <div>
                    <Button variant="contained" margin="0 14px"
                        sx={{
                            m: "1.5 0", width: '100%'
                        }}
                        onClick={handleSubmit}
                    >Add Record</Button>
                </div>
            </Stack>
        </Box>
    </>
}





