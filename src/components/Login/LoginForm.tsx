import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { getCaptcha } from "../../redux/auth-selectors";
import { AppDispatch } from "../../redux/redux-store";

export const LoginForm: React.FC<LoginFormType> = ({}) => {
  const dispatch: AppDispatch = useDispatch();
  const logIn = (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string,
    setError: any
  ) => {
    dispatch(login(email, password, rememberMe, captcha, setError));
  };
  const captcha = useSelector(getCaptcha);
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
    logIn(data.email, data.password, data.rememberMe, data.captcha, setError);

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

type LoginFormType = {};

type FormValues = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
  setError: any;
  server?: string;
};
