import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/operations/auth.operations';
import { selectUser } from 'redux/selectors/authSelectors';
import { LogOutBtn, LogOutContainer, LogOutText } from './LogOut.styled';
import { VscSignOut } from 'react-icons/vsc';

const LogOut = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <LogOutContainer>
      {user.name !== null && (
        <LogOutText>Hello, {`${user.name.substring(0, 10)}...`}</LogOutText>
      )}
      <LogOutBtn type="submit" onClick={() => dispatch(logOutThunk())}>
        <VscSignOut className="logout-btn-icon" />
      </LogOutBtn>
    </LogOutContainer>
  );
};

export default LogOut;
