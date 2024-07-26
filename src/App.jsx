// src/App.js
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import SignIn from './pages/SignIn';
import EmployeeList from './pages/EmployeeList';
import AddEmployee from './pages/AddEmployee';
import EditEmployee from './pages/EditEmployee'; // Make sure to import EditEmployee
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: 'signin',
    element: <SignIn />
  },
  {
    path: 'employeelist',
    element: (
      <ProtectedRoute>
        <EmployeeList />
      </ProtectedRoute>
    ),
  },
  {
    path: 'addemployee',
    element: (
      <ProtectedRoute>
        <AddEmployee />
      </ProtectedRoute>
    ),
  },
  {
    path: 'editemployee/:id',
    element: (
      <ProtectedRoute>
        <EditEmployee />
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/signin" />
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
