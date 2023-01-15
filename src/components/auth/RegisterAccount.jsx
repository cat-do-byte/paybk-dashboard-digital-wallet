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
import { toast } from "react-toastify"

import authApi from "@/api/authApi"
import { registerValidator } from "../../validator/register.validate"

const RegisterAccount = (props) => {
  const { classes, setTabLogin } = props

  // action register
  const {
    isLoading,
    isError,
    error,
    mutate: registerAccount,
  } = useMutation((registerData) => authApi.register(registerData))

  // validate input
  const {
    register,
    handleSubmit,
    formState: { errors: validateErrors },
  } = useForm({
    resolver: yupResolver(registerValidator),
  })

  const onRegister = (data) =>
    registerAccount(data, {
      onSuccess: () => {
        toast("Successful registration!", { type: "success" })
        setTabLogin()
      },
    })

  return (
    <>
      <Typography variant="h1" className={classes.greeting}>
        Welcome!
      </Typography>
      <Typography variant="h2" className={classes.subGreeting}>
        Create your account
      </Typography>

      {/* errors message */}
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
        id="name"
        InputProps={{
          classes: {
            underline: classes.textFieldUnderline,
            input: classes.textField,
          },
        }}
        {...register("username")}
        margin="normal"
        placeholder="Full Name"
        type="text"
        fullWidth
      />
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
        placeholder="Email Adress"
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
      <div className={classes.creatingButtonContainer}>
        {isLoading ? (
          <CircularProgress size={26} />
        ) : (
          <Button
            onClick={handleSubmit(onRegister)}
            size="large"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.createAccountButton}
          >
            Create your account
          </Button>
        )}
      </div>
    </>
  )
}

export default RegisterAccount
