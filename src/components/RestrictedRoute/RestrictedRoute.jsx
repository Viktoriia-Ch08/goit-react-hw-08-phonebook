const { useSelector } = require('react-redux');
const { Navigate } = require('react-router-dom');
const { selectIsAuthorized } = require('redux/selectors/authSelectors');

const RestrictedRoute = ({ children, redirectTo = '/' }) => {
  const isAuthorized = useSelector(selectIsAuthorized);

  return <>{!isAuthorized ? <Navigate to={redirectTo} replace /> : children}</>;
};

export default RestrictedRoute;
