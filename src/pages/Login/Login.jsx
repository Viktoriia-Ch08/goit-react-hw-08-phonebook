import {
  Button,
  Container,
  Form,
  Input,
  Label,
} from 'components/ForAllComponents/ForAll.styled';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logInThunk } from 'redux/operations/auth.operations';
import {
  failedNotification,
  successfullNotification,
} from 'services/notifications';
import { FiLogIn } from 'react-icons/fi';

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
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <span className="label-thumb">Email:</span>
          <Input type="email" {...register('email', { required: true })} />
          {errors.email && <span>This field is required</span>}
        </Label>
        <Label>
          <span className="label-thumb">Password:</span>

          <Input
            type="password"
            {...register('password', { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </Label>

        {errors.exampleRequired && <span>This field is required</span>}

        <Button type="submit">
          <FiLogIn className="btn-icon" />
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
