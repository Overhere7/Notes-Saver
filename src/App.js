import React , {useState} from 'react';
import {jsPDF} from "jspdf";
import './App.css';
export default function App() {
  const [noteText, setNoteText] = useState("");
  const [title, setTitle] = useState([]);

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  }

  const handleClick = () => {
    const doc = new jsPDF();
    doc.text(noteText, 10, 10);
    doc.save(`${title}.pdf`);
  }
  const handleChange = (e) => {
    e.preventDefault();
    setNoteText(e.target.value);
    
  }
  const handleErase = (e) => {
    e.preventDefault();
    setNoteText("");
    setTitle("");
  }
  return (
    <>
      <div>
        <h1 className='heading'>Notes App</h1>
       <form>
       <input  type='text' placeholder='Enter Your Note Title' className='TitleTxt' onChange={handleTitle} value={title}></input>
       </form>
        <textarea rows={30} placeholder='Add Your Notes here...'  className='NoteWriting' onChange={handleChange} value={noteText}></textarea>
      </div>
        <button className='savebtn' onClick={handleClick}>Download</button>
        <button className='savebtn' onClick={handleErase}>Erase All</button>

    </>
  )
}
