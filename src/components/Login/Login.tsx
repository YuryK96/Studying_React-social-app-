import { useForm, SubmitHandler } from "react-hook-form";
import { Navigate } from "react-router-dom";

type LoginFormType = {
  captcha: string | null;
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string,
    setError: any
  ) => void;
};

type FormValues = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
  setError: any;
  server?: string;
};

const LoginForm: React.FC<LoginFormType> = ({ login, captcha }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    setError,
    clearErrors,
  } = useForm<FormValues>({
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    login(data.email, data.password, data.rememberMe, data.captcha, setError);

    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          onFocus={() => {
            clearErrors();
          }}
          placeholder="email"
          {...register("email", {
            required: "need to fill form",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Pleace enter the valid email",
            },
            minLength: {
              value: 4,

              message: "need more symbols",
            },
          })}
        />
      </div>
      <div>
        {(errors?.email && (
          <p style={{ color: "red" }}>{errors?.email?.message || "Error!"}</p>
        )) || <p style={{ color: "red" }}>{errors?.server?.message}</p>}
      </div>
      <div>
        <input
          onFocus={() => {
            clearErrors();
          }}
          placeholder="password"
          type="password"
          {...register("password", {
            required: "need to fill form",
            minLength: {
              value: 4,
              message: "need more symbols",
            },
          })}
        />
      </div>
      <div>
        {errors?.password && (
          <p style={{ color: "red" }}>
            {errors?.password?.message || "Error!"}
          </p>
        )}
      </div>
      <div>
        <input {...register("rememberMe")} type={"checkbox"} />
      </div>

      {captcha && (
        <>
          <img src={captcha} />
          <div>
            <input
              onFocus={() => {
                clearErrors();
              }}
              type="text"
              {...register("captcha")}
            />
          </div>
        </>
      )}

      <div>
        <input disabled={!isValid} type="submit" />
      </div>
    </form>
  );
};

type LoginType = {
  captcha: string | null;
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string,
    setError: any
  ) => void;
  isAuth: boolean;
};

const Login: React.FC<LoginType> = ({ login, isAuth, captcha }) => {
  return (
    <div>
      {!isAuth ? (
        <div>
          <h1>Login</h1>
          <LoginForm login={login} captcha={captcha} />
        </div>
      ) : (
        <Navigate to={"/profile"} />
      )}
    </div>
  );
};

export default Login;
