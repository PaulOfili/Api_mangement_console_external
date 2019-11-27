import axios from './interceptor';
import EventEmitter from '../utils/EventEmitter';
import systemConfig from '../config/system';

class resourcesService extends EventEmitter {


    /* ---------------------------------------------- */
    /* The Following Methods are for all available resources */
    /* ---------------------------------------------- */

    getAllAvailableResources = (project_id) => {
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

const instance = new resourcesService();

export default instance;