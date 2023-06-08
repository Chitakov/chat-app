import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
  Tab,
  Tabs,
} from "@mui/material";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import { MagnifyingGlass } from "phosphor-react";
import { CallElement } from "../../components/CallElement";
import { CallList } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchFriendRequests,
  FetchFriends,
  FetchUsers,
} from "../../redux/slices/app";
// import { FetchUsers } from "../../redux/slices/app";
// import { UserElement } from "../../components/UserElement";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

const UsersList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchUsers());
  }, []);

  const { users } = useSelector((state) => state.app);

  return (
    <>
      {users.map((el, idx) => {
        return <></>;
        // <UserElement key={idx} {...el} />;
      })}
    </>
  );
};

const FriendsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchFriends());
  }, []);

  const { friends } = useSelector((state) => state.app);

  return (
    <>
      {friends.map((el, idx) => {
        return <></>;
        // <UserElement key={idx} {...el} />;
      })}
    </>
  );
};

const FriendRequestList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchFriendRequests());
  }, []);

  const { friendRequests } = useSelector((state) => state.app);

  return (
    <>
      {friendRequests.map((el, idx) => {
        return <></>;
        // <UserElement key={idx} {...el} />;
      })}
    </>
  );
};

const Friends = ({ open, handleClose }) => {
  //   const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //   useEffect(() => {
  //     dispatch(FetchUsers());
  //   }, []);

  //   const {users} = useSelector((state) => state.app);

  //   console.log(users);

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      //   TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      //   aria-describedby="alert-dialog-slide-description"
      sx={{ p: 4 }}
    >
      {/* <DialogTitle>{"Friends"}</DialogTitle> */}
      <Stack p={2} sx={{ width: "100%" }}>
        {/* <Search>
          <SearchIconWrapper>
            <MagnifyingGlass color="#709CE6" />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search> */}
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Исследовать" />
          <Tab label="Друзья" />
          <Tab label="Запросы" />
        </Tabs>
      </Stack>
      <DialogContent>
        <Stack sx={{ height: "100%" }}>
          <Stack spacing={2.4}>
            {(() => {
              switch (value) {
                case 0:
                  return <UsersList />;
                //   return users.map((el, idx) => {
                //     return <UserElement key={idx} {...el} />;
                //   });
                case 1:
                  return <FriendsList />;
                case 2:
                  return <FriendRequestList />;
                default:
                  break;
              }
            })()}
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default Friends;
