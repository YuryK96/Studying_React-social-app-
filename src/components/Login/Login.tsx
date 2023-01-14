import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuth } from "../../redux/auth-selectors";
import { LoginForm } from "./LoginForm";
import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";

type LoginType = {};

const Login: React.FC<LoginType> = () => {
  const isAuth = useSelector(getIsAuth);

  return (
    <Container>
      {!isAuth ? (
        <Box>
          <Typography m={2} variant="h5">
            Authorization
          </Typography>
          <LoginForm />
        </Box>
      ) : (
        <Navigate to={"/profile"} />
      )}
    </Container>
  );
};

export default Login;
