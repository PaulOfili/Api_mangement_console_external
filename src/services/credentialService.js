import axios from './interceptor';
import EventEmitter from '../utils/EventEmitter';
import systemConfig from '../config/system';

class credentialService extends EventEmitter {


    /* ---------------------------------------------- */
    /* The Following Methods are for a test project */
    /* ---------------------------------------------- */

    getTestCredentials = (project_id) => {
        return new Promise((resolve, reject) => {
            axios.get().then(response => {
                resolve(response.data);
            }).catch((error) => {
                if(error.data)
                    reject(error.data);
                reject(error);     
            });
        });
    };

}

const instance = new credentialService();

export default instance;