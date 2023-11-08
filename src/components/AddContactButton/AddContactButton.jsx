import { AddButton } from './AddContactButton.styled';
import { AiOutlineUserAdd } from 'react-icons/ai';

const AddContactButton = () => {
  return (
    <AddButton type="submit">
      <AiOutlineUserAdd className="add-btn-icon" />
    </AddButton>
  );
};

export default AddContactButton;
