import { AxiosInstance } from 'axios';
import ziggyRoute from 'ziggy-js';
import { Company } from './dbInterfaces';

declare global {
    interface Window {
        axios: AxiosInstance;
    }

    var route: typeof ziggyRoute;
}
