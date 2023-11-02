import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { logOutThunk } from 'redux/operations/auth.operations';
import { selectIsAuthorized, selectUser } from 'redux/selectors/authSelectors';

const Layout = () => {
  const isAuthorized = useSelector(selectIsAuthorized);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>

          {!isAuthorized ? (
            <>
              <Link to="/login">Log In</Link>
              <Link to="/register">Register</Link>
            </>
          ) : (
            <>
              {user.name !== null && <p>Hello, {user.name}</p>}
              <button type="submit" onClick={() => dispatch(logOutThunk())}>
                Log Out
              </button>
            </>
          )}
        </nav>
      </header>
      <Suspense
        fallback={
          <div>
            {/* <BounceLoader
              className="loader"
              loading={true}
              color={'#751975'}
              size={80}
            /> */}
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
