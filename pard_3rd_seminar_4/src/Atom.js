import { atom, selector } from "recoil";

export const myInfoAge = atom({
    key: "myInfoAge",
    default: 25,
});

export const myInfoName = atom({
    key: "myInfoName",
    default: '이민규',
})

export const myInfoSelector = selector({
    key: 'myInfoSelector',
    get: ({ get }) => {
        const age = get(myInfoAge);
        const name = get(myInfoName);
        return (age, name);
    },
    set: ({ set }, newValue) => {
    set(myInfoAge, newValue.age);
    set(myInfoName, newValue.name);
},
});