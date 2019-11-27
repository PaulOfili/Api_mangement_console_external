import axios from './interceptor';
import EventEmitter from '../utils/EventEmitter';
import systemConfig from '../config/system';

class projectsService extends EventEmitter {

}

const instance = new projectsService();

export default instance;