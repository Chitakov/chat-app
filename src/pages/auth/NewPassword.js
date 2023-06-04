import { Stack, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { CaretLeft } from "phosphor-react";
import NewPasswordForm from "../../sections/auth/NewPasswordForm";

const NewPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>
          Изменить Пароль
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 5 }}>
          Пожалуйста, введите новый пароль.
        </Typography>
      </Stack>

      {/* NewPasswordForm */}

      <NewPasswordForm />

      <Link
        component={RouterLink}
        to={"/auth/login"}
        color="inherit"
        variant="subtitle2"
        sx={{
          mt: 3,
          mx: "auto",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <CaretLeft size={24} />
        Вернуться на вход
      </Link>
    </>
  );
};

export default NewPassword;
