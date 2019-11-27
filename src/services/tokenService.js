import axios from 'axios';
import EventEmitter from '../utils/EventEmitter';
import systemConfig from '../config/system';
import queryString from 'query-string';

const AxiosInstance = axios.create({
    baseURL: systemConfig.serverBaseUrl,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

class tokenService extends EventEmitter {


    generateTestToken = (payload) => {
        return new Promise((resolve, reject) => {
            AxiosInstance.post('', queryString.stringify({
                grant_type: 'some_name',
                scope: 'profile'
            }), { headers: { 'Authorization': `Basic ${payload}`}}).then(response => {
                resolve(response.data);
            }).catch((error) => {
                if(error.data)
                    reject(error.data);
                reject(error);     
            });
        });
    };
}

const instance = new tokenService();

export default instance;