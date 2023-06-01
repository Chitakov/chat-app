import React from "react";
import { Stack, Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      <Header />
      <Box
        width={"100%"}
        sx={{
          flexGrow: 1,
          overflow: "scroll",
        }}
      ></Box>
      <Footer />
    </Stack>
  );
};

export default Conversation;
