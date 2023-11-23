import { MainButton } from 'components/ForAllComponents/ForAll.styled';
import { AiOutlineUserAdd } from 'react-icons/ai';

const AddContactButton = ({ onClick }) => {
  return (
    <MainButton type="submit" onClick={onClick}>
      <AiOutlineUserAdd className="btn-icon" />
    </MainButton>
  );
};

export default AddContactButton;
