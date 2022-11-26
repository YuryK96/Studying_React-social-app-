import { useForm } from "react-hook-form";

const LoginForm = ({ login }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    login(data.email, data.password, data.rememberMe);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          placeholder="email"
          {...register("email", {
            required: "need to fill form",
            minLength: {
              value: 5,
              message: "need more 5 symbols",
            },
          })}
        />
      </div>
      <div>{errors?.email && <p>{errors?.email?.message || "Error!"}</p>}</div>
      <div>
        <input
          placeholder="password"
          {...register("password", {
            required: "need to fill form",
            minLength: {
              value: 5,
              message: "need more 5 symbols",
            },
          })}
        />
      </div>
      <div>
        {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
      </div>
      <div>
        <input {...register("rememberMe")} type={"checkbox"} />
      </div>
      <div>
        <input disabled={!isValid} type="submit" />
      </div>
    </form>
  );
};

const LogOut = () => {
  return <div>exit</div>;
};

const Login = ({ login, isAuth }) => {
  return (
    <div>
      {!isAuth ? (
        <div>
          <h1>Login</h1>
          <LoginForm login={login} />
        </div>
      ) : (
        <LogOut />
      )}
    </div>
  );
};

export default Login;
