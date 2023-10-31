import { R2Explorer } from 'r2-explorer';
// require('dotenv').config();

export default R2Explorer({
    readonly: false, basicAuth: [{
        username: `${process.env.USERNAME}`,
        password: `${process.env.PASSWORD}`,
    }]
});