import * as ProdApi from './environment.prod.json';
import * as DevApi from './environment.dev.json';

let API_URL = {};

switch (process.env.REACT_APP_ENV) {
    case 'prod':
        API_URL = ProdApi.default;
        break;
    case 'dev':
        API_URL = DevApi.default;
        break;
    default:
        API_URL = DevApi.default;
        break;
}
export default API_URL;
