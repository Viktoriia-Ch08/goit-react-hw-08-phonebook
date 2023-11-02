import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logInThunk } from 'redux/operations/auth.operations';
import {
  failedNotification,
  successfullNotification,
} from 'services/notifications';

const Login = () => {
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
    dispatch(logInThunk(data))
      .unwrap()
      .then(() => {
        nav('/');
        successfullNotification('You have logged in 🥳!');
      })
      .catch(e => {
        failedNotification(`${e}. You didn't log in 😭`);
      });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email:
        <input type="email" {...register('email', { required: true })} />
        {errors.email && <span>This field is required</span>}
      </label>
      <label>
        Password:
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <span>This field is required</span>}
      </label>

      {errors.exampleRequired && <span>This field is required</span>}

      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
