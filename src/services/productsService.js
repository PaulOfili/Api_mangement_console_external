import axios from './interceptor';
import EventEmitter from '../utils/EventEmitter';
import systemConfig from '../config/system';

class productsService extends EventEmitter {


    getAllProducts = () => {
        return new Promise((resolve, reject) => {
            axios.get().then(response => {
                resolve(response.data)
            }).catch((error) => {
                if(error.data)
                    reject(error.data);
                reject(error);     
            });
        });
    };

}

const instance = new productsService();

export default instance;