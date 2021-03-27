import { environment } from '../../environments/environment';

export const baseUrl = environment.production ? 'https://something.com/' : 'http://localhost:3000';
export const productsUrl = baseUrl + '/products';
export const cartUrl = baseUrl + '/cart';

