import axios from 'axios';
import md5 from 'md5';

const publicKey = '724e98f0534f9d2fffdf1eaa422745d0';
const privateKey = 'b9c19c5f28323263aadc14b1b3aba71b65e5b790';

const time = Number(new Date());
const hash = md5(time + privateKey + publicKey)

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts: time,
        apikey: publicKey,
        hash
    }
})

export default api;