import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { SingleEmployeeInfoPage } from './Views/AccountInfoPage/SingleEmployeeInfoPage/SingleEmployeeInfoPage';
import { AccountUpdatePage } from './Views/AccountUpdatePage/AccountUpdatePage';
import { EmployeesInfoPage } from './Views/EmployeesInfoPage';
import { EmployeeHomePage } from './Views/HomePage/EmployeeHomePage';
import { ManagerHomePage } from './Views/HomePage/ManagerHomePage';
import { LoginPage } from './Views/LoginPage';
import { EmployeeReimbursementPage } from './Views/ReimbursementPage/EmployeeReimbursementPage';
import { SubmitReimbursementPage } from './Views/ReimbursementPage/SubmitReimbursementPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/manager/home" element={<ManagerHomePage />}/>
          <Route path="/employee/home" element={<EmployeeHomePage />}/>
          <Route path="/employee/reimbursement" element={<SubmitReimbursementPage />}/>
          <Route path="/manager/reimbursement" element={<SubmitReimbursementPage />}/>
          <Route path="/employee/:username" element={<SingleEmployeeInfoPage />}/>
          <Route path="/manager/employeesinfo" element={<EmployeesInfoPage />}/>
          <Route path="/employee/:username/edit" element={<AccountUpdatePage />}/>
          <Route path="/employee/reimbursement/:status" element={<EmployeeReimbursementPage />}/>
          <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
