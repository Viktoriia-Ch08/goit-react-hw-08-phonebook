import { MainButton } from 'components/ForAllComponents/ForAll.styled';
import { AiOutlineUserAdd } from 'react-icons/ai';

const AddContactButton = () => {
  return (
    <MainButton type="submit">
      <AiOutlineUserAdd className="btn-icon" />
    </MainButton>
  );
};

export default AddContactButton;
