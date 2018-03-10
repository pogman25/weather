export interface IAppReducer {
    isFetch: boolean;
    city: string[];
    forecasts: any[];
}

export interface IAppMapState {
    cities: string[];
}

export interface IAppMapDispatch {
    getCity: (city: string, country: string) =>void;
}