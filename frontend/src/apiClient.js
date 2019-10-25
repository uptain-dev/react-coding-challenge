import axios from 'axios';

var axiosInstance = null;

/**
 * HTTP REST Api Client
 * 
 * @version 0.1.0
 * @author Angela Galliat
 */
export default class apiClient {
    constructor(config) {
        axiosInstance = axios.create({
            baseURL: config.baseURL,
            timeout: 5000
          });
    }

    /**
     * Send an async HTTP GET request to the provided URL and return the response as a promise.
     * @param {String} url 
     */
    request(url) {
        if(axiosInstance) {
            return axiosInstance.get(url)
                .then( response => {
                    return response;
                })
                .catch( error => {
                    console.log(error);
                });
        }
    }

    /**
     * Send an async HTTP POST request to the provided URL and return the response as a promise.
     * @param {String} url 
     * @param {Object} data 
     */
    create(url, data) {
        if(axiosInstance) {
            return axiosInstance.post(url, data)
                .then( response => {
                    return response;
                })
                .catch( error => {
                    console.log(error);
                });
        }
    }

    /**
     * Send an async HTTP PUT request to the provided URL and return the response as a promise.
     * @param {String} url 
     * @param {Object} data 
     */
    update(url, data) {
        if(axiosInstance) {
            return axiosInstance.put(url, data)
                .then( response => {
                    return response;
                })
                .catch( error => {
                    console.log(error);
                });
        }
    }
}
