import axios from 'axios';

export const getList = () => {
    axios('https://yalantis-react-school-api.yalantis.com/api/task0/users')
        .then((response) => console.log(response));
};
