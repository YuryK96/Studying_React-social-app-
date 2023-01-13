import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuth } from "../../redux/auth-selectors";
import { LoginForm } from "./LoginForm";
import { Box, Typography } from "@mui/material";

type LoginType = {};

const Login: React.FC<LoginType> = () => {
  const isAuth = useSelector(getIsAuth);

  return (
    <Box>
      {!isAuth ? (
        <Box>
          <Typography m={2} variant="h4">
            Login
          </Typography>
          <LoginForm />
        </Box>
      ) : (
        <Navigate to={"/profile"} />
      )}
    </Box>
  );
};

export default Login;
