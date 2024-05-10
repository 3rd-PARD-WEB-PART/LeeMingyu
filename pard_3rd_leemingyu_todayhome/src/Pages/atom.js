import { atom } from 'recoil';

export const myInfoState = atom({
    key: 'myInfoState',
    default: {
        email: '',
        password: '',
        nickname: '',
        homepage: '',
        gender: 0,
        date:'',
        image:'',
        introduce:'',

    }
});
