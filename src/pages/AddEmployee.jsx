// src/pages/AddEmployee.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    salary: '',
    date: '',
    image: ''
  });
  const navigate = useNavigate();

  const handleAddEmployee = async () => {
    try {
      await addDoc(collection(db, 'employees'), employee);
      navigate('/employeelist');
    } catch (error) {
      console.error('Error adding employee', error);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="First Name"
        value={employee.firstName}
        onChange={(e) => setEmployee({ ...employee, firstName: e.target.value })}
        className="p-2 m-2 border"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={employee.lastName}
        onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })}
        className="p-2 m-2 border"
      />
      <input
        type="email"
        placeholder="Email"
        value={employee.email}
        onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
        className="p-2 m-2 border"
      />
      <input
        type="number"
        placeholder="Salary"
        value={employee.salary}
        onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
        className="p-2 m-2 border"
      />
      <input
        type="date"
        placeholder="Date"
        value={employee.date}
        onChange={(e) => setEmployee({ ...employee, date: e.target.value })}
        className="p-2 m-2 border"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={employee.image}
        onChange={(e) => setEmployee({ ...employee, image: e.target.value })}
        className="p-2 m-2 border"
      />
      <button onClick={handleAddEmployee} className="p-2 bg-blue-500 text-white">
        Save
      </button>
    </div>
  );
};

export default AddEmployee;
