import { useState } from 'react'
import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardContent from './components/Main-content/DashboardContent';
import StaffContent from './components/Main-content/StaffContent';
import CalendarContent from './components/Main-content/CalendarContent';
import DutiesContent from './components/Main-content/DutiesContent';
import MessagesContent from './components/Main-content/MessagesContent';

function App() {
 return (
 <BrowserRouter>
    <Routes>

        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />}>

        <Route index element ={<DashboardContent />} />
        <Route path='staff' element={<StaffContent />} />
        <Route path='calendar' element={<CalendarContent />} />
        <Route path='duties/:id' element={<DutiesContent />} />
        <Route path='messages' element={<MessagesContent />} />
        </Route>

    </Routes>
 </BrowserRouter>
 )
}

export default App;
