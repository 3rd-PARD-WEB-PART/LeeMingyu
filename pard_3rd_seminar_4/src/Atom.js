import { atom } from "recoil";

export const myInfoAge = atom ({
    key: "myIngoAge",
    default: 25,
});

export const myInfoName = atom ({
    key: "myIngoName",
    default: '이민규',
});