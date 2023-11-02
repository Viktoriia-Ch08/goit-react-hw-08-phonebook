import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerThunk } from 'redux/operations/auth.operations';
import {
  failedNotification,
  successfullNotification,
} from 'services/notifications';

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const nav = useNavigate();

  const onSubmit = data => {
    console.log(data);
    dispatch(registerThunk(data))
      .unwrap()
      .then(() => {
        nav('/');
        successfullNotification('Congratulations 🥳 You have registered!');
      })
      .catch(e => failedNotification(`${e}. You didn't register 😭`));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input type="text" {...register('name', { required: true })} />
        {errors.name && <span>This field is required</span>}
      </label>
      <label>
        Email:
        <input type="email" {...register('email', { required: true })} />
        {errors.email && <span>This field is required</span>}
      </label>
      <label>
        Password:
        <input
          type="password"
          {...register('password', { required: true, minLength: 5 })}
        />
        {errors.password && <span>This field is required</span>}
      </label>

      {errors.exampleRequired && <span>This field is required</span>}

      <button type="submit">Sign Up</button>
    </form>
  );
};
export default Register;
