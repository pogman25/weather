import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export default async function fetchData(
    url: string,
    params: AxiosRequestConfig
): Promise<AxiosResponse> {
    return axios({
        timeout: 10000,
        baseURL: 'http://api.wunderground.com/api/ee257faae9ad87ce/forecast/q/',
        url,
        ...params
    });
}
