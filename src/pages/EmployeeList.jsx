// src/pages/EmployeeList.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db, auth } from '../firebase';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      const querySnapshot = await getDocs(collection(db, 'employees'));
      setEmployees(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    fetchEmployees();
  }, []);

  const handleDeleteEmployee = async (id) => {
    try {
      await deleteDoc(doc(db, 'employees', id));
      setEmployees(employees.filter((employee) => employee.id !== id));
    } catch (error) {
      console.error('Error deleting employee', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/signin');
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <div className="p-4">
      <button onClick={handleSignOut} className="p-2 bg-red-500 text-white">
        Sign Out
      </button>
      <Link to="/addemployee" className="p-2 bg-green-500 text-white">
        Add Employee
      </Link>
      {employees.map((employee) => (
        <div key={employee.id} className="p-2 border">
          <img src={employee.image} alt={employee.firstName} className="w-16 h-16" />
          <p>{employee.firstName} {employee.lastName}</p>
          <p>{employee.email}</p>
          <p>${employee.salary}</p>
          <p>{employee.date}</p>
          <Link to={`/editemployee/${employee.id}`} className="p-2 bg-yellow-500 text-white">
            Edit
          </Link>
          <button onClick={() => handleDeleteEmployee(employee.id)} className="p-2 bg-red-500 text-white">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export

  default EmployeeList;
