import { useDispatch } from 'react-redux';
import { refreshUserThunk } from 'redux/operations/auth.operations';
import { useEffect } from 'react';
import {} from 'react-spinners';
// import { failedNotification } from 'services/notifications';
import Layout from './Layout';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import Register from 'pages/Register';
import NotFound from 'pages/NotFound';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUserThunk());
    // .unwrap()
    // .catch(error =>
    //   failedNotification(`😭 Sorry, smth went wrong: ${error.message}`)
    // );
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/contacts" element={<Contacts />}> */}

          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <Login />
              </RestrictedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <Register />
              </RestrictedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
