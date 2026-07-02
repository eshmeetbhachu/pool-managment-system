import { useState } from 'react'
import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardContent from './components/Main-content/DashboardContent';
import StaffContent from './components/Main-content/StaffContent';
import CalendarContent from './components/Main-content/CalendarContent';
import DutiesContent from './components/Main-content/DutiesContent';
import ApplicationContent from './components/APPLICATIONS/ApplicationContent';
import NewApplicantContent from './components/APPLICATIONS/NewApplicantContent';
import HiredContent from './components/APPLICATIONS/HiredContent';
import RejectedContent from './components/APPLICATIONS/RejectedContent';
import InterviewContent from './components/APPLICATIONS/InterviewContent';
import DocumentsContent from './components/APPLICATIONS/DocumentsContent';

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
        <Route path='application/new' element={<NewApplicantContent />} />
        <Route path='application/hired' element={<HiredContent />} />
        <Route path='application/rejected' element={<RejectedContent />} />
        <Route path='application/interview' element={<InterviewContent />} />
        <Route path='application/documents' element={<DocumentsContent />} />
        </Route>

    </Routes>
 </BrowserRouter>
 )
}

export default App;
