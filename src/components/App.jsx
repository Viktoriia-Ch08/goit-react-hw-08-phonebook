import { useDispatch } from 'react-redux';
import { refreshUserThunk } from 'redux/operations/auth.operations';
import { useEffect } from 'react';
import {} from 'react-spinners';
// import { failedNotification } from 'services/notifications';
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from 'pages/Login/Login';
import Register from 'pages/Register';
import NotFound from 'pages/NotFound';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import AddContact from 'pages/Contacts/Contacts';
import Contacts from 'pages/Contacts/Contacts';
import ContactForm from '../pages/AddContact/ContactForm';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/addContact"
            element={
              <RestrictedRoute>
                <ContactForm />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <RestrictedRoute>
                <Contacts />
              </RestrictedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
