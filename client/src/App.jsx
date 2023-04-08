import reactLogo from './assets/react.svg'
import './App.css'
import Note from './components/Note'
import Navbar from './components/Navbar'
import NoteCards from './components/NoteCards'


function App() {

  return <>
    <Navbar />
    <Note />
    <NoteCards />
  </>
}

export default App
