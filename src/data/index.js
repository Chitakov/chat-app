import { faker } from "@faker-js/faker";
import {
  ChatCircleDots,
  Gear,
  GearSix,
  Phone,
  SignOut,
  User,
  Users,
} from "phosphor-react";

const Profile_Menu = [
  {
    title: "Профиль",
    icon: <User />,
  },
  {
    title: "Настройки",
    icon: <Gear />,
  },
  {
    title: "Выйти",
    icon: <SignOut />,
  },
];

const Nav_Buttons = [
  {
    index: 0,
    icon: <ChatCircleDots />,
  },
  {
    index: 1,
    icon: <Users />,
  },
  {
    index: 2,
    icon: <Phone />,
  },
];

const Nav_Setting = [
  {
    index: 3,
    icon: <GearSix />,
  },
];

const ChatList = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "9:36",
    unread: 0,
    pinned: true,
    online: true,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "12:02",
    unread: 2,
    pinned: true,
    online: false,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "10:35",
    unread: 3,
    pinned: false,
    online: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "04:00",
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 7,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
];

const Chat_History = [
  {
    type: "msg",
    message: "Привет 👋🏻, Как ты ?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "divider",
    text: "Сегодня",
  },
  {
    type: "msg",
    message: "Привет 👋 Дима, неплохо, а ты ?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Можешь отослать мне абстактное изображение?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Да, конечно, отсылаю",
    incoming: true,
    outgoing: false,
  },

  {
    type: "msg",
    subtype: "img",
    message: "Вот",
    img: faker.image.abstract(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    message: "Можешь, пожалуйста, отослать этот файл в другом формате?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Да, конечно.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Котики ;)",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "Это пересланное сообщение",
    message: "Котики ;)",
    incoming: false,
    outgoing: true,
  },
];

const Message_options = [
  {
    title: "Ответить",
  },
  {
    title: "Отреагировать на сообщение",
  },
  {
    title: "Переслать сообщение",
  },
  {
    title: "Отметить сообщение",
  },
  {
    title: "Репорт",
  },
  {
    title: "Удалить сообщение",
  },
];

const Shared_links = [
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Котики ;)",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Котики ;)",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Котики ;)",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Котики ;)",
    incoming: true,
    outgoing: false,
  },
];

const Shared_docs = [
  {
    type: "msg",
    subtype: "doc",
    message: "Да, конечно.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Да, конечно.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Да, конечно.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Да, конечно.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Да, конечно.",
    incoming: true,
    outgoing: false,
  },
];

const MembersList = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: false,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: false,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: false,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
  },
];

const CallList = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
    incoming: true,
    missed: false,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
    incoming: false,
    missed: true,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: false,
    incoming: true,
    missed: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: false,
    incoming: false,
    missed: false,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
    incoming: true,
    missed: false,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: false,
    incoming: false,
    missed: false,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
    incoming: true,
    missed: false,
  },
  {
    id: 7,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: false,
    incoming: false,
    missed: false,
  },
  {
    id: 8,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
    incoming: true,
    missed: false,
  },
  {
    id: 9,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: false,
    incoming: false,
    missed: false,
  },
  {
    id: 10,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
    incoming: true,
    missed: false,
  },
  {
    id: 11,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: false,
    incoming: false,
    missed: false,
  },
  {
    id: 12,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
    incoming: true,
    missed: false,
  },
];

export {
  Profile_Menu,
  Nav_Setting,
  Nav_Buttons,
  ChatList,
  Chat_History,
  Message_options,
  Shared_links,
  Shared_docs,
  CallList,
  MembersList,
};
