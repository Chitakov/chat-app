import React from "react";
import {
  Dialog,
  Slide,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
  Grid,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const list = [
  {
    key: 0,
    title: "Пометить как непрочитанное",
    combination: ["Cmd", "Shift", "U"],
  },
  {
    key: 1,
    title: "Отключить звук",
    combination: ["Cmd", "Shift", "M"],
  },
  {
    key: 2,
    title: "Архив",
    combination: ["Cmd", "Shift", "E"],
  },
  {
    key: 3,
    title: "Удалить чат",
    combination: ["Cmd", "Shift", "D"],
  },
  {
    key: 4,
    title: "Закрепить чат",
    combination: ["Cmd", "Shift", "P"],
  },
  {
    key: 5,
    title: "Поиск",
    combination: ["Cmd", "F"],
  },
  {
    key: 6,
    title: "Искать чат",
    combination: ["Cmd", "Shift", "F"],
  },
  {
    key: 7,
    title: "Следующий чат",
    combination: ["Cmd", "N"],
  },
  {
    key: 8,
    title: "Следующий шаг",
    combination: ["Ctrl", "Tab"],
  },
  {
    key: 9,
    title: "Предыдущий шаг",
    combination: ["Ctrl", "Shift", "Tab"],
  },
  {
    key: 10,
    title: "Новая группа",
    combination: ["Cmd", "Shift", "N"],
  },
  {
    key: 11,
    title: "Профиль & О себе",
    combination: ["Cmd", "P"],
  },
  {
    key: 12,
    title: "Увеличить скорость голосового сообщения",
    combination: ["Shift", "."],
  },
  {
    key: 13,
    title: "Понизить скорость голосового сообщения",
    combination: ["Shift", ","],
  },
  {
    key: 14,
    title: "Настройки",
    combination: ["Shift", "S"],
  },
  {
    key: 15,
    title: "Панель эмодзи",
    combination: ["Cmd", "E"],
  },
  {
    key: 16,
    title: "Панель стикеров",
    combination: ["Cmd", "S"],
  },
];

const Shortcuts = ({ open, handleClose }) => {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{ p: 4 }}
      >
        <DialogTitle>{"Горячие клавиши"}</DialogTitle>
        <DialogContent sx={{ mt: 4 }}>
          {/*  */}
          <Grid container spacing={3}>
            {list.map(({ key, title, combination }) => {
              return (
                <Grid item xs={6}>
                  <Stack
                    sx={{ width: "100%" }}
                    justifyContent="space-between"
                    key={key}
                    spacing={3}
                    direction={"row"}
                    alignItems="center"
                  >
                    <Typography variant="caption" sx={{ fontSize: 14 }}>
                      {title}
                    </Typography>
                    <Stack spacing={2} direction="row">
                      {combination.map((el) => {
                        return (
                          <Button
                            sx={{ color: "#212121" }}
                            disabled
                            variant="contained"
                          >
                            {el}
                          </Button>
                        );
                      })}
                    </Stack>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant={"contained"} onClick={handleClose}>
            Ок
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Shortcuts;
