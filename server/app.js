import express from 'express';
import cors from 'cors';
import { getNote, getNotes, createNote } from './database.js'
const app = express();
app.use(cors())
app.use(express.json());

app.get('/notes', async (req, res) => {
    const notes = await getNotes();
    res.send(notes)
})

app.get('/notes/:id', async (req, res) => {
    const id = req.params.id
    const note = await getNote(id);
    console.log(note);
    res.send(note)
})

app.post('/notes', async (req, res) => {
    const { title, contents } = req.body;
    try {
        const note = await createNote(title, contents);
        console.log("object")
        res.status(201).send(note)
    } catch {
        res.status(400).send('Bad Request')
    }
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
})