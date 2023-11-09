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
import { registerThunk } from 'redux/operations/auth.operations';
import {
  failedNotification,
  successfullNotification,
} from 'services/notifications';
import { FiLogIn } from 'react-icons/fi';

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
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <span className="label-thumb">Name:</span>

          <Input type="text" {...register('name', { required: true })} />
          {errors.name && <span>This field is required</span>}
        </Label>
        <Label>
          <span className="label-thumb">Email:</span>
          <Input type="email" {...register('email', { required: true })} />
          {errors.email && <span>This field is required</span>}
        </Label>
        <Label>
          <span className="label-thumb">Password:</span>
          <Input
            type="password"
            {...register('password', { required: true, minLength: 5 })}
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
export default Register;
