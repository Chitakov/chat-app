import React from "react";
import { Link as RouterLink } from "react-router-dom";
// sections
import { Stack, Typography, Link } from "@mui/material";
import AuthSocial from "../../sections/auth/AuthSocial";
import LoginForm from "../../sections/auth/LoginForm";

// ----------------------------------------------------------------------

const Login = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Войти в Мессенджер</Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">Новый пользователь?</Typography>

          <Link
            to={"/auth/register"}
            component={RouterLink}
            variant="subtitle2"
          >
            Создать аккаунт
          </Link>
        </Stack>

        {/* Form */}
        <LoginForm />

        <AuthSocial />
      </Stack>
    </>
  );
};

export default Login;
