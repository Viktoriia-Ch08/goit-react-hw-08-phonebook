import { useForm } from 'react-hook-form';
import { updateContact } from 'redux/operations/contacts.operations';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object({
    name: yup.string().min(3).max(15).required(),
    number: yup.string().min(5).max(8).required(),
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
    dispatch(updateContact(newContact)).then(() => closeEditingForm(false));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input defaultValue={name} {...register('name', { required: true })} />
        <input
          defaultValue={number}
          {...register('number', { required: true })}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={() => closeEditingForm(false)}>
          close
        </button>
      </label>
      {errors.name && <span>{errors.name.message}</span>}
      {errors.number && <span>{errors.number.message}</span>}
    </form>
  );
};

export default EditingForm;
