import {
  CircularProgress,
  Typography,
  Button,
  TextField,
  Fade,
} from "@material-ui/core"
import { useMutation } from "react-query"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import authApi from "@/api/authApi"
import { loginValidator } from "../../validator/login.validate"

const LoginAccount = (props) => {
  const classes = props.classes

  // action login
  const {
    isLoading,
    isError,
    error,
    mutate: signIn,
  } = useMutation((loginData) => authApi.login(loginData))

  // validate input

  const {
    register,
    handleSubmit,
    formState: { errors: validateErrors },
  } = useForm({
    resolver: yupResolver(loginValidator),
  })

  const onLogin = (data) => signIn(data)

  return (
    <>
      <Typography variant="h1" className={classes.greeting}>
        Good day, User
      </Typography>

      <Fade in={isError}>
        <Typography color="secondary" className={classes.errorMessage}>
          {error}
        </Typography>
      </Fade>

      {Object.keys(validateErrors).map((key, index) => (
        <Typography
          color="secondary"
          className={classes.errorMessage}
          key={index}
        >
          {validateErrors[key]?.message}
        </Typography>
      ))}

      <TextField
        id="email"
        InputProps={{
          classes: {
            underline: classes.textFieldUnderline,
            input: classes.textField,
          },
        }}
        {...register("email")}
        margin="normal"
        placeholder="Email Address"
        type="email"
        fullWidth
      />
      <TextField
        id="password"
        InputProps={{
          classes: {
            underline: classes.textFieldUnderline,
            input: classes.textField,
          },
        }}
        {...register("password")}
        margin="normal"
        placeholder="Password"
        type="password"
        fullWidth
      />
      <div className={classes.formButtons}>
        {isLoading ? (
          <CircularProgress size={26} className={classes.loginLoader} />
        ) : (
          <Button
            onClick={handleSubmit(onLogin)}
            variant="contained"
            color="primary"
            size="large"
          >
            Login
          </Button>
        )}
        <Button color="primary" size="large" className={classes.forgetButton}>
          Forget Password
        </Button>
      </div>
    </>
  )
}

export default LoginAccount
