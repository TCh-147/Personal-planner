import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import EventsList from './Events/EventsList';
import GoalsList from './Goals/GoalsList';
import NotesList from './Notes/NotesList';
import NotesForm from './Notes/NotesForm';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h1 className='py-10 text-4xl tracking-wide font-semibold uppercase text-center bg-gray-100'>Personal Planner</h1>
    <div className="p-8 flex flex-col">
    <BrowserRouter>
      <Routes>
          <Route path="" element={<Dashboard/>}></Route>
          <Route path="goals" element={<GoalsList/>}></Route>
          <Route path="events" element={<EventsList/>}></Route>
          <Route path="notes" element={<NotesList/>}></Route>
          
          <Route path="new_note" element={<NotesForm/>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  </React.StrictMode>
);