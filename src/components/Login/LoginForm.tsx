import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { getCaptcha } from "../../redux/auth-selectors";
import { AppDispatch } from "../../redux/redux-store";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

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
  console.log();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    logIn(data.email, data.password, data.rememberMe, data.captcha, setError);

    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box maxWidth={270}>
        <Box m={1}>
          <TextField
            onFocus={() => {
              clearErrors();
            }}
            label="Login or email"
            size={"small"}
            error={!!errors?.email}
            helperText={errors?.email?.message}
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
        </Box>

        <Box m={1} marginTop={2}>
          <TextField
            inputProps={{
              autoComplete: "new-password",
              form: {
                autoComplete: "off",
              },
            }}
            onFocus={() => {
              clearErrors();
            }}
            label="Password"
            autoComplete="off"
            size={"small"}
            error={!!errors?.password}
            helperText={errors?.password?.message}
            type="password"
            {...register("password", {
              required: "need to fill form",
              minLength: {
                value: 4,
                message: "need more symbols",
              },
            })}
          />
        </Box>
        <Box m={1}>
          <FormControlLabel
            sx={{
              fontSize: "10px",
            }}
            label={
              <Typography fontSize={"small"}>
                Save my login and password
              </Typography>
            }
            control={<Checkbox size={"small"} {...register("rememberMe")} />}
          />
        </Box>

        {captcha && (
          <>
            <Box m={1}>
              <Box component={"img"} src={captcha} />
            </Box>
            <Box m={1}>
              <TextField
                label="Captcha"
                size={"small"}
                error={!!errors?.captcha}
                helperText={errors?.captcha?.message}
                onFocus={() => {
                  clearErrors();
                }}
                type="text"
                {...register("captcha", {
                  required: "need to fill form",
                })}
              />
            </Box>
          </>
        )}

        <Box marginLeft={"60%"}>
          <Button disabled={!isValid} type="submit">
            Log in{" "}
          </Button>
        </Box>
      </Box>
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
