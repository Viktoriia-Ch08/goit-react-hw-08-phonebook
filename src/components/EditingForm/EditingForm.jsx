import { useForm } from 'react-hook-form';
import { updateContact } from 'redux/operations/contacts.operations';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ButtonContainer,
  EditInput,
  Form,
  FormContainer,
  Label,
  WarningSpan,
} from './EditingForm.styled';
import { TfiSave } from 'react-icons/tfi';
import { IoClose } from 'react-icons/io5';
import { Button } from 'components/ForAllComponents/ForAll.styled';
import { successfullNotification } from 'services/notifications';

const schema = yup
  .object({
    name: yup.string().min(3).max(15).required(),
    number: yup.string().max(9).required(),
  })
  .required();

const EditingForm = ({ id, name, number, closeEditingForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmit = ({ name, number }) => {
    const newContact = {
      name,
      number,
      id,
    };
    dispatch(updateContact(newContact)).then(() => {
      successfullNotification('Wow! You have update your contact');
      closeEditingForm(false);
    });
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <span className="label-thumb">Edit Name:</span>
          {errors.name && <WarningSpan>{errors.name.message}</WarningSpan>}
          <EditInput
            defaultValue={name}
            {...register('name', { required: true })}
          />
          <span className="label-thumb">Edit Number:</span>
          {errors.number && <WarningSpan>{errors.number.message}</WarningSpan>}
          <EditInput
            defaultValue={number}
            {...register('number', { required: true })}
          />
          <ButtonContainer>
            <Button type="submit">
              <TfiSave className="btn-icon" />
            </Button>
            <Button type="button" onClick={() => closeEditingForm(false)}>
              <IoClose className="btn-icon" />
            </Button>
          </ButtonContainer>
        </Label>
      </Form>
    </FormContainer>
  );
};

export default EditingForm;
