// src/pages/EditEmployee.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    salary: '',
    date: '',
    image: ''
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      const docRef = doc(db, 'employees', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setEmployee(docSnap.data());
      } else {
        console.log('No such document!');
      }
    };

    fetchEmployee();
  }, [id]);

  const handleUpdateEmployee = async () => {
    try {
      const employeeDoc = doc(db, 'employees', id);
      await updateDoc(employeeDoc, employee);
      navigate('/employeelist');
    } catch (error) {
      console.error('Error updating employee', error);
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
      <button onClick={handleUpdateEmployee} className="p-2 bg-blue-500 text-white">
        Save
      </button>
    </div>
  );
};

export default EditEmployee;
