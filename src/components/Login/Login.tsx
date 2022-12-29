import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuth } from "../../redux/auth-selectors";
import { LoginForm } from "./LoginForm";

type LoginType = {};

const Login: React.FC<LoginType> = () => {
  const isAuth = useSelector(getIsAuth);

  return (
    <div>
      {!isAuth ? (
        <div>
          <h1>Login</h1>
          <LoginForm />
        </div>
      ) : (
        <Navigate to={"/profile"} />
      )}
    </div>
  );
};

export default Login;
