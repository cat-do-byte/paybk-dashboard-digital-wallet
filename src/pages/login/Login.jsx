import React, { useState } from "react"
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
} from "@material-ui/core"
import { useMutation } from "react-query"
// import classnames from "classnames";

// styles
import useStyles from "./styles"

// logo
import logo from "./logo.svg"
import google from "./google.svg"
import authApi from "../../api/authApi"
import LoginAccount from "../../components/auth/LoginAccount"
import RegisterAccount from "../../components/auth/RegisterAccount"

function Login(props) {
  const classes = useStyles()

  const [activeTabId, setActiveTabId] = useState(0)

  const setTabLogin = () => setActiveTabId(0)

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src={logo} alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>Material Admin</Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Tabs
            value={activeTabId}
            onChange={(e, id) => setActiveTabId(id)}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Login" classes={{ root: classes.tab }} />
            <Tab label="New User" classes={{ root: classes.tab }} />
          </Tabs>
          {activeTabId === 0 && <LoginAccount classes={classes} />}
          {activeTabId === 1 && (
            <RegisterAccount classes={classes} setTabLogin={setTabLogin} />
          )}
        </div>
        <Typography color="primary" className={classes.copyright}>
          © 2014-{new Date().getFullYear()}{" "}
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="https://flatlogic.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Flatlogic
          </a>
          , LLC. All rights reserved.
        </Typography>
      </div>
    </Grid>
  )
}

export default Login
