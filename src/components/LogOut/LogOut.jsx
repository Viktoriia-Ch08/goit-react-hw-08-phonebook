import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/operations/auth.operations';
import { selectUser } from 'redux/selectors/authSelectors';
import { LogOutContainer, LogOutText } from './LogOut.styled';
import { VscSignOut } from 'react-icons/vsc';
import { Button } from 'components/ForAllComponents/ForAll.styled';

const LogOut = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <LogOutContainer>
      {user.name !== null && (
        <LogOutText>Hello, {`${user.name.substring(0, 10)}...`}</LogOutText>
      )}
      <Button type="submit" onClick={() => dispatch(logOutThunk())}>
        <VscSignOut className="btn-icon" />
      </Button>
    </LogOutContainer>
  );
};

export default LogOut;
